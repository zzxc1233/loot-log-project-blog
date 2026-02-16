import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function ProfileManament() {
    return (
        <>
            <div className="flex flex-col bg-midnight-800 text-offwhite-200">
                {/* header */}
                <div className="header-admin-style px-4 sm:px-10">
                    <div className="text-headline-3 sm:text-headline font-semibold">Profile</div>
                    <Button className="w-20 sm:w-auto hidden sm:block">Save</Button>
                </div>

                {/* body */}
                <div className="flex flex-col gap-2 p-4 sm:p-10">
                    {/* profile */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 h-28 sm:h-auto">
                        <img src="profile.png" alt="profile" className="w-16 h-16 sm:w-20 sm:h-20" />
                        <Button
                            className="w-full sm:w-auto"
                            variant="outline">
                            Upload profile picture
                        </Button>
                    </div>

                    {/* info */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <Input
                            type="text"
                            placeholder="Name"
                            className="mb-4 w-full sm:w-1/2" />

                        <label htmlFor="username" className="text-sm font-medium">Username</label>
                        <Input
                            type="text"
                            placeholder="Username"
                            className="mb-4 w-full sm:w-1/2" />

                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input
                            type="email"
                            placeholder="Email"
                            className="mb-4 w-full sm:w-1/2" />

                        <label htmlFor="bio" className="text-sm font-medium">{`Bio (max 120 letters)`}</label>
                        <Textarea
                            id="bio"
                            maxLength={120}
                            placeholder="Tell us about yourself..."
                            className="resize-none w-full sm:w-1/2 h-20 sm:h-28 border border-gold-400/30 focus-visible:border-gold-400/30 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-gold-400/30 outline-none"
                            rows={4}
                        />
                    </div>
                    <Button className="w-full sm:w-auto block sm:hidden">Save</Button>
                </div>
            </div>
        </>
    )
}