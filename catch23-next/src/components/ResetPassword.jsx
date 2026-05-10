'use client';
import React, { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ResetPassword from '../../components/ResetPassword'; // adjust path to where your components live
import Modal from '../../components/Modal';

function ResetPasswordContent() {
    const params = useSearchParams();
    const router = useRouter();
    const token = params.get('token');

    return (
        <div className="landing">
            <h1 className="landing-title">CATCH 23</h1>
            <Modal isOpen={true}>
                <ResetPassword
                    token={token}
                    onShowLogin={() => router.push('/')}
                />
            </Modal>
        </div>
    );
}

// useSearchParams must be wrapped in Suspense in Next.js App Router
export default function ResetPasswordPage() {
    return (
        <Suspense fallback={null}>
            <ResetPasswordContent />
        </Suspense>
    );
}