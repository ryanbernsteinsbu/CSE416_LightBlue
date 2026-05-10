import { Router, Request, Response } from 'express';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import bcrypt from 'bcryptjs';
import { Op } from 'sequelize';
import PasswordResetToken from '../models/passwordResetToken';

import User from '../models/user';  

const router = Router();

// ── Nodemailer transporter (created once, reused) ────────────────────────────
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: false,  
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// ── POST /api/auth/forgot-password ───────────────────────────────────────────
router.post('/forgot-password', async (req: Request, res: Response) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        // Look up the user — do NOT reveal in the response whether it exists
        const user = await User.findOne({ where: { email } });

        if (user) {
            // Delete any existing unused tokens for this user
            await PasswordResetToken.destroy({
                where: { user_id: user.id, used: false },
            });

            // Generate a cryptographically secure token
            const token = crypto.randomBytes(32).toString('hex');
            const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

            await PasswordResetToken.create({
                token,
                user_id: user.id,
                expires_at: expiresAt,
                used: false,
            });

            const resetUrl = `${process.env.APP_URL}/reset-password?token=${token}`;

            await transporter.sendMail({
                from: `"Catch 23" <${process.env.EMAIL_USER}>`,
                to: user.email,   
                subject: 'Reset your Catch 23 password',
                html: `
                    <div style="font-family:sans-serif;max-width:480px;margin:auto;padding:24px">
                        <h2 style="margin-bottom:8px">Password Reset</h2>
                        <p>Someone requested a password reset for your Catch 23 account.</p>
                        <p>Click the button below to choose a new password.
                           This link expires in <strong>1 hour</strong>.</p>
                        <a href="${resetUrl}"
                           style="display:inline-block;margin:20px 0;padding:12px 28px;
                                  background:#2f3f89;color:#fff;border-radius:8px;
                                  text-decoration:none;font-weight:bold;font-size:16px">
                            Reset Password
                        </a>
                        <p style="color:#888;font-size:13px">
                            If you didn't request this, you can safely ignore this email.
                            Your password won't change.
                        </p>
                    </div>
                `,
            });
        }

        // Always 200 — don't let callers enumerate valid emails
        return res.status(200).json({
            message: 'If that email is linked to an account, a reset link has been sent.',
        });
    } catch (err) {
        console.error('FORGOT PASSWORD ERROR:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

// ── POST /api/auth/reset-password ────────────────────────────────────────────
router.post('/reset-password', async (req: Request, res: Response) => {
    try {
        const { token, password } = req.body;

        if (!token || !password) {
            return res.status(400).json({ error: 'Token and password are required' });
        }

        if (password.length < 8) {
            return res.status(400).json({ error: 'Password must be at least 8 characters' });
        }

        // Find a valid, unused, unexpired token
        const resetToken = await PasswordResetToken.findOne({
            where: {
                token,
                used: false,
                expires_at: { [Op.gt]: new Date() },
            },
        });

        if (!resetToken) {
            // Distinguish expired vs truly invalid so the frontend can show the right message
            const expiredToken = await PasswordResetToken.findOne({ where: { token } });
            if (expiredToken) {
                return res.status(400).json({ error: 'Token expired' });
            }
            return res.status(400).json({ error: 'Invalid token' });
        }

        // Hash the new password  (12 salt rounds)
        const hashedPassword = await bcrypt.hash(password, 12);

        // Update user password
        await User.update(
            { password: hashedPassword },
            { where: { id: resetToken.user_id } }
        );

        // Mark token as used so it can't be replayed
        await resetToken.update({ used: true });

        return res.status(200).json({ message: 'Password updated successfully.' });
    } catch (err) {
        console.error('RESET PASSWORD ERROR:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;