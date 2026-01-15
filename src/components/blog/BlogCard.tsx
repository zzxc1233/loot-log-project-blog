import { BlogCardUI } from "./BlogCardUI";
import { Button } from "../ui/button";
import axios from "axios";
import { useEffect, useState } from "react";

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

export function BlogCard({ category }: { category: string }) {
  const [cards, setCards] = useState<Post[]>([]);

  async function getCardsData() {
    if (!cards) return;
    const response = await axios.get(
      "https://blog-post-project-api.vercel.app/posts"
    );
    setCards(response.data.posts);
  }

  useEffect(() => {
    getCardsData();
  }, []);

  return (
    <>
    <section className="py-6 px-4 xl:px-0">
      <div className="grid gap-6 xl:grid-cols-2">
        {cards.map((card) => {
          if(card.category === category){
            return(
              <article key={card.id} className="flex flex-col">
                <BlogCardUI {...card} />
              </article>
            )
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
