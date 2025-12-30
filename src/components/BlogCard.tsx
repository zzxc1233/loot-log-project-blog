import { BlogCardUI } from "./ui/BlogCardUI"
import { Button } from "./ui/button";

const cards = [
    {
        img: "https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449771/my-blog-post/e739huvlalbfz9eynysc.jpg",
        alt: "The Art of Mindfulness: Finding Peace in a Busy World",
        category: "General",
        header: "The Art of Mindfulness: Finding Peace in a Busy World",
        content:
            "Discover the transformative power of mindfulness and how it can help you navigate the challenges of modern life with greater ease and contentment.",
        imgAuthor: "https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg",
        author: "Thompson P.",
        date: "11 September 2024",
    },
    {
        img:"https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449771/my-blog-post/gsutzgam24abrvgee9r4.jpg",
        alt: "Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do",
        category: "Cat",
        header: "The Secret Language of Cats: Decoding Feline Communication",
        content:
            "Unravel the mysteries of cat communication and learn how to better understand your feline friend's needs and desires.",
        imgAuthor: "https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg",
        author: "Thompson P.",
        date: "21 August 2024",
    },
    {
        img: "https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449771/my-blog-post/zzye4nxfm3pmh81z7hni.jpg",
        alt: "Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do",
        category: "Inspiration",
        header: "Embracing Change: How to Thrive in Times of Transition",
        content:
            "Learn powerful strategies to navigate life's changes with grace and emerge stronger on the other side.",
        imgAuthor: "https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg",
        author: "Thompson P.",
        date: "23 March 2024",
    },
    {
        img: "https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449771/my-blog-post/e0haxst38li4g8i0vpsr.jpg",
        alt: "Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do",
        category: "General",
        header: "The Future of Work: Adapting to a Digital-First Economy",
        content:
            "Explore how technology is reshaping the workplace and learn skills to succeed in the evolving job market.",
        imgAuthor: "https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg",
        author: "Thompson P.",
        date: "23 May 2024",
    },
    {
        img: "https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449771/my-blog-post/g8qpepvgnz6gioylyhrz.jpg",
        alt: "Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do",
        category: "Inspiration",
        header: "The Power of Habits: Small Changes, Big Results",
        content:
            "Discover how small, consistent habits can lead to significant personal and professional growth over time.",
        imgAuthor: "https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg",
        author: "Thompson P.",
        date: "23 June 2024",
    },
    {
        img: "https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449771/my-blog-post/koydfh6jpmzhtxvwein3.jpg",
        alt: "Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do",
        category: "Cat",
        header: "Cat Nutrition: A Guide to Feeding Your Feline Friend",
        content:
            "Learn about the nutritional needs of cats and how to provide a balanced diet for optimal health and longevity.",
        imgAuthor: "https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg",
        author: "Thompson P.",
        date: "21 July 2024",
    },

    // เพิ่ม card อื่น ๆ ได้ที่นี่
];

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