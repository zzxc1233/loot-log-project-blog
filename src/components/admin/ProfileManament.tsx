import { Button } from "../ui/button";
import { Input } from "../ui/input";

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
                        <textarea
                            id="bio"
                            maxLength={120}
                            onInput={(e) => {
                                const target = e.target as HTMLTextAreaElement;
                                target.value = target.value.slice(0, 120);
                            }}
                            rows={4}
                            cols={10}
                            className="border border-gold-600/30 rounded-2xl p-4 w-full bg-midnight-700 text-offwhite-200"
                            placeholder="comment"></textarea>
                    </div>
                    <Button className="w-full sm:w-auto block sm:hidden">Save</Button>
                </div>
            </div>
        </>
    )
}