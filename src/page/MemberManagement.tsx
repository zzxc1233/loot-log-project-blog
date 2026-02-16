import Navbar from "@/components/layout/Navbar";
import MemberLayout from "../components/member/MemberLayout";
import UpdateProfile from "@/components/member/updateProfile";
import ResetPassword from "@/components/member/resetPassword";
import { useState } from "react";
import { useAuth } from "@/components/contexts/AuthProvider";

export default function MemberManagement() {
    const [activeTab, setActiveTab] = useState("profile");

    // 1. ดึง user และ loading มาจาก useAuth() ได้เลย
    const { user, loading } = useAuth();

    // 2. ถ้ากำลังโหลดข้อมูล ให้แสดงสถานะ Loading
    if (loading) {
        return (
            <MemberLayout activeTab={activeTab} setActiveTab={setActiveTab}>
                <div className="flex justify-center items-center h-64 text-galactic-teal">
                    Loading user data...
                </div>
            </MemberLayout>
        );
    }

    // 3. ถ้าไม่มี user (เช่น token หมดอายุ) อาจจะสั่ง logout หรือ return null
    if (!user) return null;

    function renderContent() {
        switch (activeTab) {
            case 'password':
                return <ResetPassword key={user?.id} />;
            default:
                return <UpdateProfile 
                    key={user?.id} 
                    initialName={user?.name}
                    initialUsername={user?.username}
                    initialProfilePic={user?.profile_pic}
                    email={user?.email}
                />
        }
    }

    return (
        <>
        <Navbar className="hidden sm:flex"/>
        <MemberLayout activeTab={activeTab} setActiveTab={setActiveTab}>
            {renderContent()}
        </MemberLayout>
        </>
    )
}
