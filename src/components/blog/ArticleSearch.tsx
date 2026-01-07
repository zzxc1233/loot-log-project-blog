import { Search } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils";

type ArticleProps = {
    className?: string;
};

function Article({ className }: ArticleProps) {
    return (
        <>
            <div className={cn("flex:col", className)}>
                <div className="text-headline-3 p-4">
                    <p>Latest articles</p>
                </div>
                <div>
                    <form action="" className="bg-brown-200 p-4 xl:rounded-2xl xl:flex xl:justify-between items-center">
                        <div className='hidden xl:inline '>
                            <div className='gap-2 flex'>
                                <Button variant="article">Highlight</Button>
                                <Button variant="article">Cat</Button>
                                <Button variant="article">Inspiration</Button>
                                <Button variant="article">General</Button>
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="search-input" className='' ></label>
                            <div className="relative">
                                <Input className="border rounded-lg border-brown-300 bg-white px-4 py-3 text-body w-full min-h-12 xl:w-sm" placeholder='Search' />
                                <Search className="absolute right-1/30 top-1/2 -translate-1/2" />
                            </div>
                        </div>
                        <div className="xl:hidden flex flex-col gap-2 py-3">
                            <label htmlFor="highlight-input" className="text-body text-brown-400">Category</label>
                            <div className="relative">
                                <Select>
                                    <SelectTrigger className="border rounded-lg border-brown-300 bg-white px-4 py-3 text-body text-brown-400 w-full min-h-12">
                                        <SelectValue placeholder="General" />
                                    </SelectTrigger>
                                    <SelectContent >
                                        <SelectItem value="Highlight">Highlight</SelectItem>
                                        <SelectItem value="Cat">Cat</SelectItem>
                                        <SelectItem value="Inspiration">Inspiration</SelectItem>
                                        <SelectItem value="General">General</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Article