'use client';
import { useSearchParams } from 'next/navigation';
import ResetPassword from '@/components/ResetPassword';
import { useRouter } from 'next/navigation';

export default function ResetPasswordPage() {
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
 