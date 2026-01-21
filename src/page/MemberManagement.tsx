import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import UpdateProfile from "@/components/common/updateProfile";
import ResetPassword from "@/components/common/resetPassword";
import { User, KeyRound } from "lucide-react";
import { useState } from "react";

function MemberManagement() {
    const [activeTab, setActiveTab] = useState<"profile" | "password">("profile");
    const name = "Moodeng ja";

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-midnight-900">
                {/* Header */}
                <div className="flex items-center gap-4 px-6 sm:px-12 lg:px-32 py-6 bg-midnight-800 border-b border-gold-400/30">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-midnight-600 border border-gold-400/30 flex items-center justify-center">
                        <User className="text-gold-400 w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4">
                        <p className="text-lg sm:text-xl font-semibold text-offwhite-200">{name}</p>
                        <span className="text-gold-400/50">|</span>
                        <p className="text-lg sm:text-xl text-gold-400">Profile</p>
                    </div>
                </div>

                {/* main */}
                <div className="flex flex-col sm:flex-row px-6 sm:px-12 lg:px-32 py-8 gap-6">
                    {/* sidebar */}
                    <div className="w-full sm:w-48 flex flex-row sm:flex-col gap-2">
                        <button
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-left w-full transition-colors cursor-pointer ${activeTab === "profile"
                                ? "text-gold-400 font-medium bg-midnight-700"
                                : "text-offwhite-400 hover:text-offwhite-200 hover:bg-midnight-800"
                                }`}
                            onClick={() => setActiveTab("profile")}
                        >
                            <User className="w-5 h-5" />
                            <span>Profile</span>
                        </button>
                        <button
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-left w-full transition-colors cursor-pointer ${activeTab === "password"
                                ? "text-gold-400 font-medium bg-midnight-700"
                                : "text-offwhite-400 hover:text-offwhite-200 hover:bg-midnight-800"
                                }`}
                            onClick={() => setActiveTab("password")}
                        >
                            <KeyRound className="w-5 h-5" />
                            <span>Reset password</span>
                        </button>
                    </div>

                    {/* content */}
                    <div className="flex-1 bg-midnight-800 rounded-2xl p-6 sm:p-10 border border-gold-400/30">
                        {activeTab === "profile" ? (
                            <UpdateProfile
                                initialName="Moodeng ja"
                                initialUsername="moodeng.cute"
                                email="moodeng.cute@gmail.com"
                            />
                        ) : (
                            <ResetPassword />
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MemberManagement;
