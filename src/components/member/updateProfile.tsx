import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import { useState, useEffect } from "react";
import axiosInstance from "@/lib/axios";
import { toast } from "sonner";
import { useAuth } from "@/components/contexts/AuthProvider";

interface UpdateProfileProps {
    initialName?: string;
    initialUsername?: string;
    initialProfilePic?: string;
    email?: string;
}

function UpdateProfile({
    initialName,
    initialUsername,
    initialProfilePic,
    email
}: UpdateProfileProps) {
    const { refreshUserData } = useAuth();
    const [name, setName] = useState(initialName || "");
    const [username, setUsername] = useState(initialUsername || "");
    const [error, setError] = useState({
        name: "",
        username: "",
        profilePic: ""
    });
    const [profilePicFile, setProfilePicFile] = useState<File | null>(null);
    const [profilePicPreview, setProfilePicPreview] = useState<string>("");

    // Set initial profile picture preview
    useEffect(() => {
        if (initialProfilePic) {
            setProfilePicPreview(initialProfilePic);
        }
    }, [initialProfilePic]);


    const handleProfilePicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            toast.error("Please select an image file");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            toast.error("Image size should be less than 5MB");
            return;
        }

        setProfilePicFile(file);
        const objectUrl = URL.createObjectURL(file);
        setProfilePicPreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    };

    async function handleSave() {
        let isError = false;
        let newError = { name: "", username: "", profilePic: "" };

        if (!name?.trim()) {
            newError.name = "Name is required";
            isError = true;
        }
        if (!username?.trim()) {
            newError.username = "Username is required";
            isError = true;
        }

        setError(newError);
        if (!isError) {
            try {
                const formData = new FormData();
                formData.append('name', name!.trim());
                formData.append('username', username!.trim());

                // ส่งไฟล์เฉพาะเมื่อมีการเลือกรูปใหม่เท่านั้น
                if (profilePicFile) {
                    formData.append('profile_pic', profilePicFile);
                }

                await axiosInstance.put('/auth/update-profile', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                // Refresh user data to update navbar and component state
                await refreshUserData();
                toast.success("Profile updated successfully");
            } catch (error: any) {
                const errorMessage = error.response?.data?.error || "Error updating profile";
                toast.error(errorMessage);
            }
        }
    }

    return (
        <div className="flex flex-col gap-8">
            {/* profile picture */}
            <h2 className="text-xl font-semibold text-galactic-teal">Update Profile</h2>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-midnight-600 border border-gold-400/30 flex items-center justify-center overflow-hidden">
                    {profilePicPreview ? (
                        <img
                            src={profilePicPreview}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <User className="text-gold-400 w-10 h-10 sm:w-12 sm:h-12" />
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePicChange}
                        className="hidden"
                        id="profile-pic-input"
                    />
                    <Button
                        variant="outline"
                        onClick={() => document.getElementById('profile-pic-input')?.click()}
                    >
                        Upload profile picture
                    </Button>
                    {profilePicFile && (
                        <p className="text-xs text-offwhite-400">
                            Selected: {profilePicFile.name}
                        </p>
                    )}
                </div>
            </div>

            {/* form */}
            <div className="flex flex-col gap-6 max-w-lg">
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-offwhite-400">Name</label>
                    {error.name && <p className="text-body-3 text-red-500">{error.name}</p>}
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            if (error.name) setError({ ...error, name: "" });
                        }} />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm text-offwhite-400">Username</label>
                    {error.username && <p className="text-body-3 text-red-500">{error.username}</p>}
                    <Input
                        type="text"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                            if (error.username) setError({ ...error, username: "" });
                        }}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm text-offwhite-400">Email</label>
                    <p className="text-offwhite-400 px-1">{email}</p>
                </div>

                <Button
                    variant="default"
                    className="w-full sm:w-1/3"
                    onClick={handleSave}
                >
                    Save
                </Button>
            </div>
        </div>
    );
}

export default UpdateProfile;
