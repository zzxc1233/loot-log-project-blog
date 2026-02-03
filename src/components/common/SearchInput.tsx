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
                <div className="relative group w-full sm:w-80">
                    <Input
                        type="text"
                        placeholder="Search articles..."
                        className="pl-10 pr-4 py-2 bg-space-700 border-white/10 text-silver-100 placeholder:text-silver-400/50 rounded-full focus:ring-galactic-teal/30 focus:border-galactic-teal transition-all"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-silver-400 group-focus-within:text-galactic-teal transition-colors" />
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
