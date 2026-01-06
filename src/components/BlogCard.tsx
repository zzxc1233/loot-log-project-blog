import { BlogCardUI } from "./ui/BlogCardUI"
import { Button } from "./ui/button";
import { cards } from "./data/BlogPost";


export function BlogCard() {
    return (
        <section className="px-4 py-6">
            <div className="grid gap-6 xl:grid-cols-2">
                {cards.map((card, index) => (
                    <article key={index} className="flex flex-col">
                        <BlogCardUI {...card} />
                    </article>
                ))}
            </div>
            <div className="flex justify-center pt-6">
                <Button variant="link" size="xl">View more</Button>
            </div>
        </section>
    );
}