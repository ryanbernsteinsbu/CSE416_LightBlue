'use client';
import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ResetPassword from '@/components/ResetPassword';
import Modal from '@/components/Modal';

function ResetPasswordContent() {
    const params = useSearchParams();
    const token = params.get("token");
    const router = useRouter();

    return (
        <div className="landing">
            <h1 className="landing-title">CATCH 23</h1>
            <Modal isOpen={true}>
                <ResetPassword
                    token={token}
                    onShowLogin={() => router.push("/")}
                />
            </Modal>
        </div>
    );
}

export default function ResetPasswordPage() {
    return (
        <Suspense fallback={null}>
            <ResetPasswordContent />
        </Suspense>
    );
}