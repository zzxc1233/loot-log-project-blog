import AdminLayout from "../components/admin/AdminLayout";
import ArticleManagement from "../components/admin/ArticleManagement";
import CategoryManagement from "../components/admin/CategoryManagement";
import ProfileManament from "../components/admin/ProfileManament";
import NotificationManatement from "../components/admin/NotificationManatement";
import ResetPasswordAdmin from "../components/admin/ResetPasswordAdmin";
import { useState } from "react";

export default function AdminPage() {
    const [activeTab, setActiveTab] = useState("article");

    function renderContent() {
        switch (activeTab) {
            case 'category':
                return <CategoryManagement />
            case 'profile':
                return <ProfileManament />
            case 'notification':
                return <NotificationManatement />
            case 'reset-password':
                return <ResetPasswordAdmin />
            default:
                return <ArticleManagement />
        }
    }
    
    return (
        <AdminLayout activeTab={activeTab} setActiveTab={setActiveTab}>
            {renderContent()}
        </AdminLayout>
    )
}