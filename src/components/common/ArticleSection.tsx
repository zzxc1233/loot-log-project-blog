import { ARTICLE_CATEGORIES } from "@/constants/categories";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState, useEffect } from "react";
import axios from "axios";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { BlogCardUI } from "./BlogCardUI";

interface Post {
    id: string;
    image: string;
    alt: string;
    category: string;
    title: string;
    description: string;
    imgAuthor: string;
    author: string;
    date: string;
    likes: string;
    content: string;
}

type ArticleSectionProps = {
    className?: string;
};

function ArticleSection({ className }: ArticleSectionProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("Highlight");
    const [cards, setCards] = useState<Post[]>([]);

    const isActive = (category: string) => selectedCategory === category;

    async function getCardsData() {
        try {
            const response = await axios.get(
                "https://blog-post-project-api.vercel.app/posts",
            );
            setCards(response.data.posts);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getCardsData();
    }, []);

    return (
        <>
            {/* Search Section */}
            <div className={cn("flex-col", className)}>
                <div className="text-headline-3 p-4 text-gold-gradient">
                    <p>Latest articles</p>
                </div>
                <div>
                    <form
                        action=""
                        className="bg-midnight-700 border border-gold-400/20 p-4 xl:rounded-2xl xl:flex xl:justify-between items-center"
                    >
                        {/* Category Buttons */}
                        <div className="hidden xl:flex gap-2">
                            {ARTICLE_CATEGORIES.map((categorie) => (
                                <Button
                                    key={categorie.value}
                                    variant="article"
                                    type="button"
                                    className={cn(
                                        isActive(categorie.value)
                                            ? "bg-gold-400 text-midnight-900"
                                            : "bg-midnight-600 text-offwhite-300",
                                    )}
                                    onClick={() => setSelectedCategory(categorie.value)}
                                >
                                    {categorie.value}
                                </Button>
                            ))}
                        </div>

                        {/* Search Input */}
                        <div className="">
                            <label htmlFor="search-input" className=""></label>
                            <div className="relative">
                                <Input
                                    className="border rounded-lg border-gold-400/30 bg-midnight-800 px-4 py-3 text-body w-full min-h-12 xl:w-sm text-offwhite-200 placeholder:text-offwhite-400/60"
                                    placeholder="Search"
                                />
                                <button>
                                    <Search className="absolute right-1/30 top-1/2 -translate-1/2 text-gold-400" />
                                </button>
                            </div>
                        </div>

                        {/* Category Dropdown */}
                        <div className="xl:hidden flex flex-col gap-2 py-3">
                            <label
                                htmlFor="highlight-input"
                                className="text-body text-offwhite-400"
                            >
                                Category
                            </label>
                            <div className="relative">
                                <Select
                                    value={selectedCategory}
                                    onValueChange={setSelectedCategory}
                                >
                                    <SelectTrigger className="border rounded-lg border-gold-400/30 bg-midnight-800 px-4 py-3 text-body text-offwhite-300 w-full min-h-12">
                                        <SelectValue placeholder="Select Category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {ARTICLE_CATEGORIES.map((categorie) => (
                                            <SelectItem key={categorie.value} value={categorie.value}>
                                                {categorie.value}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Blog Cards Section */}
            <section className="py-6 px-4 xl:px-0">
                <div className="grid gap-6 xl:grid-cols-2">
                    {cards.map((card) => {
                        if (card.category === selectedCategory) {
                            return (
                                <article key={card.id} className="flex flex-col">
                                    <BlogCardUI {...card} />
                                </article>
                            );
                        }
                    })}
                </div>
                <div className="flex justify-center pt-6">
                    <Button variant="link" size="xl">
                        View more
                    </Button>
                </div>
            </section>
        </>
    );
}

export default ArticleSection;
