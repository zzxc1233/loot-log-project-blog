import { Button } from "../ui/button";

export default function NotificationManatement() {
    return (
        <>
            <div className="flex flex-col bg-midnight-800 text-offwhite-200">
                {/* header */}
                <div className="header-admin-style px-4 sm:px-10">
                    <div className="text-headline-3 sm:text-headline font-semibold">Notification</div>
                </div>

                {/* content */}
                <div className="flex flex-col gap-2 py-6 sm:py-10 px-4 sm:px-10">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gold-600 py-6 sm:py-8">
                        <div className="flex flex-row items-start gap-3 w-full sm:w-auto">
                            <img src="profile.png" className="w-10 h-10 shrink-0" alt="profile" />
                            <span className="text-body text-offwhite-400/60 text-sm sm:text-base leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quod dicta accusantium illum voluptate officiis molestiae, et earum provident sit dolore atque veniam eum, autem excepturi architecto dolorum rerum ut!
                            </span>
                        </div>
                        <Button
                            variant="link"
                            size="sm"
                            className="w-full sm:w-auto text-center"
                        >
                            View
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}