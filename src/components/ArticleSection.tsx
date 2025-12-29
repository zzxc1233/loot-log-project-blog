import { Search } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

function Article() {
    return (
        <>
            <div className="flex:col">
                <div className="text-headline-3 p-4">
                    <p>Latest articles</p>
                </div>
                <div>
                    <form action="" className="bg-brown-200 p-4 xl:rounded-2xl xl:flex xl:justify-between items-center">
                        <div className='hidden xl:inline '>

                            <div className='gap-2 flex'>
                                <button className='text-body text-brown-400 border rounded-lg px-5 py-3 hover:bg-brown-300'>Highlight</button>
                                <button className='text-body text-brown-400 border rounded-lg px-5 py-3 hover:bg-brown-300'>Cat</button>
                                <button className='text-body text-brown-400 border rounded-lg px-5 py-3 hover:bg-brown-300'>Inspiration</button>
                                <button className='text-body text-brown-400 border rounded-lg px-5 py-3 hover:bg-brown-300'>Ganeral</button>
                            </div>

                        </div>
                        <div className="">
                            <label htmlFor="search-input" className='' ></label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="search-input"
                                    name="search"
                                    className="border rounded-lg border-brown-300 bg-white px-4 py-3 text-body w-full xl:w-sm"
                                    placeholder="Search"
                                />
                                <Search className="absolute right-1/30 top-2/7 text-brown-400" />
                            </div>
                        </div>
                        <div className="xl:hidden flex flex-col gap-2 py-3">
                            <label htmlFor="highlight-input" className="text-body text-brown-400">Category</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="highlight-input"
                                    name="highlight"
                                    className="border rounded-lg border-brown-300 bg-white px-4 py-3 text-body w-full"
                                    placeholder="Highlight"
                                />
                                <ChevronDown className="absolute right-1/30 top-2/7 text-brown-400" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Article