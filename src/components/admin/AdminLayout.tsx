import { Button } from "../ui/button";
import { NotebookText, FolderClosed, User, Bell, KeyRound, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { type ReactNode, useState } from "react";

interface AdminLayoutProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    children: ReactNode;
}

export default function AdminLayout({ activeTab, setActiveTab, children }: AdminLayoutProps) {

    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuItems = [
        { id: 'article', icon: NotebookText, label: 'Article management' },
        { id: 'category', icon: FolderClosed, label: 'Category management' },
        { id: 'profile', icon: User, label: 'Profile' },
        { id: 'notification', icon: Bell, label: 'Notification' },
        { id: 'reset-password', icon: KeyRound, label: 'Reset password' }
    ];

    return (
        <>
            <div className="flex flex-row w-full relative">
                {/* Mobile menu overlay */}
                {isMobileMenuOpen && (
                    <div 
                        className="fixed inset-0 bg-black/50 z-40 sm:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}
                
                {/* Mobile menu button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="sm:hidden fixed top-4 left-4 z-50 p-2 bg-midnight-800 text-offwhite-200 rounded-lg"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Sidebar */}
                <div className={`
                    fixed sm:relative z-50 sm:z-auto
                    flex flex-col bg-midnight-800 text-offwhite-200 justify-between h-screen
                    transform transition-transform duration-300 ease-in-out
                    w-64 sm:w-1/4
                    ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}
                `}>
                    <div className="p-4 sm:p-6">
                        <div className="flex flex-col items-center sm:items-start">
                            <img src="logo.png" alt="logo" width={80} height={80} className="mb-2" />
                            <p className="text-headline-3 sm:text-headline font-semibold text-offwhite-200 text-center sm:text-left">Admin Panel</p>
                        </div>
                    </div>
                    
                    <div className="flex-1 px-4 sm:px-6 flex flex-col gap-2 sm:gap-4 overflow-y-auto">
                        {menuItems.map((menu) => (
                            <button
                                key={menu.id}
                                onClick={() => {
                                    setActiveTab(menu.id);
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`sidebar-admin-style ${activeTab === menu.id ? 'bg-gold-600/30' : 'hover:bg-gold-600/30'
                                    }`}
                            >
                                <menu.icon className="w-4 h-4 shrink-0" />
                                <span className="text-sm sm:text-base">{menu.label}</span>
                            </button>
                        ))}
                    </div>
                    
                    <div className="p-4 sm:p-6 flex flex-col justify-end gap-4 sm:gap-8">
                        <Button
                            onClick={() => navigate('/')}
                            className="w-full sm:w-auto"
                        >
                            Log out
                        </Button>
                    </div>
                </div>

                {/* Main content */}
                <div className="flex-1 px-4 sm:px-6 py-4 bg-midnight-800 min-h-screen">
                    <div className="mt-12 sm:mt-0">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}