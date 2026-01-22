import { Button } from "../ui/button";
import { Pencil, Trash } from "lucide-react";
import { Input } from "../ui/input";

export default function ArticleManagement() {
    return (
        <>
            <div className="flex flex-col bg-midnight-800 text-offwhite-200">
                {/* header */}
                <div className="header-admin-style px-4 sm:px-10">
                    <div className="text-headline-3 sm:text-headline font-semibold">Article management</div>
                    <Button className="sm:w-auto w-full">Create article</Button>
                </div>
                
                {/* search and selection */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-6 sm:py-10 px-4 sm:px-10">
                    <Input
                        type="text"
                        placeholder="Search"
                        className="w-full sm:w-1/3"
                    />
                    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-1/3">
                        <select className="w-full sm:w-1/2 p-2 border border-gold-600/30 rounded bg-midnight-700 text-offwhite-200">
                            <option value="">Status</option>
                            <option value="published">Published</option>
                            <option value="draft">Draft</option>
                        </select>
                        <select className="w-full sm:w-1/2 p-2 border border-gold-600/30 rounded bg-midnight-700 text-offwhite-200">
                            <option value="">Category</option>
                            <option value="tech">Tech</option>
                            <option value="lifestyle">Lifestyle</option>
                        </select>
                    </div>
                </div>

                {/* Desktop table view */}
                <div className="hidden sm:block">
                    {/* topic */}
                    <div className="flex flex-row gap-2 px-10 py-4 border-b border-gold-600">
                        <div className="w-2/3 text-body text-offwhite-400/60">Article title</div>
                        <div className="text-center w-1/6 text-body text-offwhite-400/60">Category</div>
                        <div className="text-center w-1/6 text-body text-offwhite-400/60">Status</div>
                        <div className="flex flex-row gap-2 justify-around w-1/12">
                        </div>
                    </div>

                    {/* map article */}
                    <div className="flex flex-row items-center gap-2 px-10 py-4 border-b border-gold-600">
                        <div className="w-2/3">Article title Demo</div>
                        <div className="text-center w-1/6">Category</div>
                        <div className="text-center w-1/6">Status</div>
                        <div className="flex flex-row gap-2 justify-around w-1/12">
                            <Pencil className="w-4 h-4 text-gold-600" />
                            <Trash className="w-4 h-4 text-red-500" />
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2 px-10 py-4 border-b border-gold-600">
                        <div className="w-2/3">Article title Demo</div>
                        <div className="text-center w-1/6">Category</div>
                        <div className="text-center w-1/6">Status</div>
                        <div className="flex flex-row gap-2 justify-around w-1/12">
                            <Pencil className="w-4 h-4 text-gold-600" />
                            <Trash className="w-4 h-4 text-red-500" />
                        </div>
                    </div>
                </div>

                {/* Mobile card view */}
                <div className="sm:hidden px-4 space-y-4">
                    <div className="border border-gold-600/30 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold text-offwhite-200">Article title Demo</h3>
                            <div className="flex gap-2">
                                <Pencil className="w-4 h-4 text-gold-600" />
                                <Trash className="w-4 h-4 text-red-500" />
                            </div>
                        </div>
                        <div className="flex gap-2 text-sm text-offwhite-400/60">
                            <span>Category</span>
                            <span>•</span>
                            <span>Status</span>
                        </div>
                    </div>
                    <div className="border border-gold-600/30 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold text-offwhite-200">Article title Demo</h3>
                            <div className="flex gap-2">
                                <Pencil className="w-4 h-4 text-gold-600" />
                                <Trash className="w-4 h-4 text-red-500" />
                            </div>
                        </div>
                        <div className="flex gap-2 text-sm text-offwhite-400/60">
                            <span>Category</span>
                            <span>•</span>
                            <span>Status</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}