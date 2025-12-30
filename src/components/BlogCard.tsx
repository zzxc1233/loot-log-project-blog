import { BlogCardUI } from "./ui/BlogCardUI"

const cards = [
    {
        img: "https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449771/my-blog-post/e739huvlalbfz9eynysc.jpg",
        alt: "Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do",
        category: "Cat",
        header: "Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do",
        content:
            "Dive into the curious world of cat behavior, exploring why cats knead, purr, and chase imaginary prey. This article helps pet owners decode their feline's actions and understand how their instincts as hunters shape their daily routines.",
        imgAuthor: "https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg",
        author: "Thompson P.",
        date: "11 September 2024",
    },
    {
        img: "https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449771/my-blog-post/e739huvlalbfz9eynysc.jpg",
        alt: "Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do",
        category: "Cat",
        header: "Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do",
        content:
            "Dive into the curious world of cat behavior, exploring why cats knead, purr, and chase imaginary prey. This article helps pet owners decode their feline's actions and understand how their instincts as hunters shape their daily routines.",
        imgAuthor: "https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg",
        author: "Thompson P.",
        date: "11 September 2024",
    },
    {
        img: "https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449771/my-blog-post/e739huvlalbfz9eynysc.jpg",
        alt: "Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do",
        category: "Cat",
        header: "Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do",
        content:
            "Dive into the curious world of cat behavior, exploring why cats knead, purr, and chase imaginary prey. This article helps pet owners decode their feline's actions and understand how their instincts as hunters shape their daily routines.",
        imgAuthor: "https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg",
        author: "Thompson P.",
        date: "11 September 2024",
    },
    {
        img: "https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449771/my-blog-post/e739huvlalbfz9eynysc.jpg",
        alt: "Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do",
        category: "Cat",
        header: "Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do",
        content:
            "Dive into the curious world of cat behavior, exploring why cats knead, purr, and chase imaginary prey. This article helps pet owners decode their feline's actions and understand how their instincts as hunters shape their daily routines.",
        imgAuthor: "https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg",
        author: "Thompson P.",
        date: "11 September 2024",
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
        </section>
    );
}