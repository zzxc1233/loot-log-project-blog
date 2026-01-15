import { ARTICLE_CATEGORIES } from "@/constants/categories";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type ArticleProps = {
  className?: string;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

function Article({ className, selectedCategory, setSelectedCategory }: ArticleProps) {
  const isActive = (category: string) => selectedCategory === category;
  return (
    <>
      <div className={cn("flex-col", className)}>
        <div className="text-headline-3 p-4 text-gold-gradient">
          <p>Latest articles</p>
        </div>
        <div>
          <form
            action=""
            className="bg-midnight-700 border border-gold-400/20 p-4 xl:rounded-2xl xl:flex xl:justify-between items-center"
          >
            <div className="hidden xl:flex gap-2">
              {ARTICLE_CATEGORIES.map((categorie) => (
                <Button
                  key={categorie.value}
                  variant="article"
                  type="button"
                  className={cn(
                    isActive(categorie.value)
                      ? "bg-gold-400 text-midnight-900"
                      : "bg-midnight-600 text-offwhite-300"
                  )}
                  disabled={isActive(categorie.value)}
                  onClick={() => setSelectedCategory(categorie.value)}
                >
                  {categorie.value}
                </Button>
              ))}
            </div>
            <div className="">
              <label htmlFor="search-input" className=""></label>
              <div className="relative">
                <Input
                  className="border rounded-lg border-gold-400/30 bg-midnight-800 px-4 py-3 text-body w-full min-h-12 xl:w-sm text-offwhite-200 placeholder:text-offwhite-400/60"
                  placeholder="Search"
                />
                <Search className="absolute right-1/30 top-1/2 -translate-1/2 text-gold-400" />
              </div>
            </div>
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
    </>
  );
}

export default Article;
