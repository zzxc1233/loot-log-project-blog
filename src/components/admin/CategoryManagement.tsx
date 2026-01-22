import { Button } from "../ui/button";
import { Pencil, Trash } from "lucide-react";
import { Input } from "../ui/input";

export default function CategoryManagement() {
    return (
        <>
            <div className="flex flex-col bg-midnight-800 text-offwhite-200">
                {/* header */}
                <div className="header-admin-style px-4 sm:px-10">
                    <div className="text-headline-3 sm:text-headline font-semibold">Category management</div>
                    <Button className="sm:w-auto w-full">Create category</Button>
                </div>

                {/* search */}
                <div className="flex flex-row justify-start items-center py-6 sm:py-10 px-4 sm:px-10">
                    <Input 
                    type="text" 
                    placeholder="Search"
                    className="w-full sm:w-1/3"
                    />
                </div>

                {/* Desktop table view */}
                <div className="hidden sm:block">
                    {/* topic */}
                    <div className="flex flex-row gap-2 px-10 py-4 border-b border-gold-600">
                        <div className="w-2/3 text-body text-offwhite-400/60">Category name</div>
                    </div>

                    {/* map category */}
                    <div className="flex flex-row justify-between gap-2 px-10 py-4 border-b border-gold-600">
                        <div className="w-2/3">Category Demo</div>
                        <div className="flex flex-row gap-2 justify-around items-center w-1/12">
                            <Pencil className="w-4 h-4 text-gold-600" />
                            <Trash className="w-4 h-4 text-red-500" />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between gap-2 px-10 py-4 border-b border-gold-600">
                        <div className="w-2/3">Category Demo</div>
                        <div className="flex flex-row gap-2 justify-around items-center w-1/12">
                            <Pencil className="w-4 h-4 text-gold-600" />
                            <Trash className="w-4 h-4 text-red-500" />
                        </div>
                    </div>
                </div>

                {/* Mobile card view */}
                <div className="sm:hidden px-4 space-y-4">
                    <div className="border border-gold-600/30 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-offwhite-200">Category Demo</h3>
                            <div className="flex gap-2 justify-around items-center">
                                <Pencil className="w-4 h-4 text-gold-600" />
                                <Trash className="w-4 h-4 text-red-500" />
                            </div>
                        </div>
                    </div>
                    <div className="border border-gold-600/30 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-offwhite-200">Category Demo</h3>
                            <div className="flex gap-2 justify-around items-center">
                                <Pencil className="w-4 h-4 text-gold-600" />
                                <Trash className="w-4 h-4 text-red-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}