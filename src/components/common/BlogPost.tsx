import ReactMarkdown from "react-markdown";

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
        <div className="p-10 flex flex-col py-14 px-28 gap-4 items-center w-full">
            <img
                src={image}
                alt={alt}
                className="max-h-160 w-full object-cover rounded-2xl"
            />
            <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-4 w-3/4">
                    <div className="flex items-center gap-2 w-full mt-4">
                        <div className="tag-category">{category}</div>
                        <div className="text-offwhite-400 text-sm">
                            {new Date(date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </div>
                    </div>
                    <div>
                        <div className="text-headline text-gold-gradient">{title}</div>
                        <div className="text-body w-full text-offwhite-300">{description}</div>
                        <div className="markdown w-full text-offwhite-300">
                            <ReactMarkdown>{content}</ReactMarkdown>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-1/4 pt-12">
                    <div className="flex flex-row gap-2 border-b border-offwhite-400 pb-2">
                        <img src={imgAuthor} alt={author} className="w-16 h-16 rounded-full" />
                        <div>
                            <div className="text-body-3 text-offwhite-200">Author</div>
                            <div className="text-body text-offwhite-200">{author}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogPost;


