import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import { useState } from "react";

interface UpdateProfileProps {
    initialName?: string;
    initialUsername?: string;
    email?: string;
}

function UpdateProfile({
    initialName = "Moodeng ja",
    initialUsername = "moodeng.cute",
    email = "moodeng.cute@gmail.com"
}: UpdateProfileProps) {
    const [name, setName] = useState(initialName);
    const [username, setUsername] = useState(initialUsername);
    const [error, setError] = useState({
        name: "",
        username: "",
    });

    function handleSave() {
        let isError = false;
        let newError = { ...error };

        if (!name.trim()) {
            newError.name = "Name is required";
            isError = true;
        }
        if (!username.trim()) {
            newError.username = "Username is required";
            isError = true;
        }

        setError(newError);
        if (!isError) {
            // TODO: Save profile logic here
            console.log("Profile saved:", { name, username, email });
        }
    }

    return (
        <div className="flex flex-col gap-8">
            {/* profile picture */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-midnight-600 border border-gold-400/30 flex items-center justify-center">
                    <User className="text-gold-400 w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                <Button
                    variant="outline"
                >
                    Upload profile picture
                </Button>
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
                        }}/>
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
