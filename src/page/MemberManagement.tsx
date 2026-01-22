import MemberLayout from "../components/member/MemberLayout";
import UpdateProfile from "@/components/member/updateProfile";
import ResetPassword from "@/components/member/resetPassword";
import { useState } from "react";

export default function MemberManagement() {
    const [activeTab, setActiveTab] = useState("profile");

    function renderContent() {
        switch (activeTab) {
            case 'password':
                return <ResetPassword />
            default:
                return (
                    <UpdateProfile
                        initialName="Moodeng ja"
                        initialUsername="moodeng.cute"
                        email="moodeng.cute@gmail.com"
                    />
                )
        }
    }
    
    return (
        <MemberLayout activeTab={activeTab} setActiveTab={setActiveTab}>
            {renderContent()}
        </MemberLayout>
    )
}
