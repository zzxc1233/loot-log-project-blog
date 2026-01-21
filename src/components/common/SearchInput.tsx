import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { useContext } from "react";
import { DataByIdContext } from "../context/UseDataById"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface BlogData {
    id: string | number;
    title: string;
}

export function SearchInput() {
    const dataById = useContext(DataByIdContext);
    const [search, setSearch] = useState<string>("");
    const navigate = useNavigate();

    const filteredData = search.trim()
        ? dataById.filter((data: BlogData) =>
            data.title.toLowerCase().includes(search.toLowerCase())
        )
        : [];

    const handleClick = (id: string | number) => {
        navigate(`/blog-post/${id}`)
        setSearch("")
    };

    return (
        <>
            <div className="flex flex-col gap-2 relative">
                <div>
                    <label htmlFor="search-input"></label>
                    <div className="">
                        <Input
                            className="border rounded-lg border-gold-400/30 bg-midnight-800 px-4 py-3 text-body w-full min-h-12 xl:w-sm text-offwhite-200 placeholder:text-offwhite-400/60"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className="absolute right-1/30 top-1/2 -translate-1/2 text-gold-400">
                            <Search />
                        </button>
                    </div>
                </div>

                {filteredData.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 flex flex-col bg-midnight-800 border border-gold-400/30 rounded-lg z-50 max-h-60">
                        {filteredData.map((data: BlogData) => (
                            <button
                                key={data.id}
                                onClick={() => handleClick(data.id)}
                                className="w-full text-left p-3 text-offwhite-200 hover:bg-gold-400/20 transition-colors cursor-pointer"
                            >
                                <p className="text-body-3 truncate">{data.title}</p>
                            </button>
                        ))}
                    </div>
                )}

                {search.trim() && filteredData.length === 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 p-3 bg-midnight-800 border border-gold-400/30 rounded-lg z-50">
                        <p className="text-offwhite-400 text-body-3">No results found</p>
                    </div>
                )}
            </div>
        </>
    );
}
