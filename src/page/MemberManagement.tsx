import MemberLayout from "../components/member/MemberLayout";
import UpdateProfile from "@/components/member/updateProfile";
import ResetPassword from "@/components/member/resetPassword";
import { useEffect, useState } from "react";
import axios from "@/lib/axios"

export default function MemberManagement() {
    const [activeTab, setActiveTab] = useState("profile");
    const [user, setUser] = useState({
        name: "",
        username: "",
        profile_pic: "",
        email: ""
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`/auth/get-user`);
                const data = response.data

                if (data) {
                    setUser({
                        name: data.name,
                        username: data.username,
                        profile_pic: data.profile_pic,
                        email: data.email
                    });
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUserData();
    }, []);

    function renderContent() {
        switch (activeTab) {
            case 'password':
                return <ResetPassword
                    key={user.username || "loading"}
                    initialProfilePic={user.profile_pic}
                />
            default:
                return (
                    <UpdateProfile
                        key={user.username || "loading"}
                        initialName={user.name}
                        initialUsername={user.username}
                        initialProfilePic={user.profile_pic}
                        email={user.email}
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
