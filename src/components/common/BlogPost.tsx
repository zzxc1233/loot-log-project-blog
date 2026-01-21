import ReactMarkdown from "react-markdown";
import CommentSection from "./CommentSection";

interface BlogPostProps {
    image: string;
    alt: string;
    category: string;
    date: string;
    author: string;
    imgAuthor: string;
    title: string;
    description: string;
    content: string;
}

function BlogPost({
    image,
    alt,
    category,
    author,
    imgAuthor,
    date,
    title,
    description,
    content,
}: BlogPostProps) {
    return (
        <div className="p-4 sm:p-6 md:p-10 flex flex-col py-6 sm:py-10 md:py-14 px-4 sm:px-8 md:px-16 lg:px-28 gap-4 items-center w-full">
            <img
                src={image}
                alt={alt}
                className="max-h-80 sm:max-h-120 md:max-h-160 w-full object-cover rounded-2xl"
            />
            <div className="flex flex-col md:flex-row gap-4 w-full">
                <div className="flex flex-col gap-4 w-full md:w-3/4">
                    <div className="flex items-center gap-2 w-full mt-4">
                        <div className="tag-category">{category}</div>
                        <div className="text-offwhite-400 text-xs sm:text-sm">
                            {new Date(date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </div>
                    </div>
                    <div>
                        <div className="text-headline-3 sm:text-headline-2 md:text-headline text-gold-gradient">{title}</div>
                        <div className="text-body-3 sm:text-body w-full text-offwhite-300">{description}</div>
                        <div className="markdown w-full text-offwhite-300 text-sm sm:text-base">
                            <ReactMarkdown>{content}</ReactMarkdown>
                        </div>
                    </div>
                    <CommentSection />
                </div>
                <div className="flex flex-col gap-4 w-full md:w-1/4 pt-6 md:pt-12 border-t md:border-t-0 border-gold-400/30">
                    <div className="flex flex-row gap-2 border-b border-offwhite-400 pb-2">
                        <img src={imgAuthor} alt={author} className="w-12 h-12 sm:w-16 sm:h-16 rounded-full" />
                        <div>
                            <div className="text-body-3 text-offwhite-200">Author</div>
                            <div className="text-body-3 sm:text-body text-offwhite-200">{author}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogPost;


