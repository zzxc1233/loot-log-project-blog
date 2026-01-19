import { useNavigate } from "react-router-dom";

type BlogCardUIProps = {
  image: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  imgAuthor: string;
  author: string;
  date: string;
  id: string;
};

export function BlogCardUI({
  image,
  alt,
  category,
  title,
  description,
  imgAuthor,
  author,
  date,
  id,
}: BlogCardUIProps) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col gap-4 p-4 bg-midnight-800 border border-gold-400/30 rounded-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] transition-shadow">
        <div className="relative h-53 sm:h-90">
          <img
            className="w-full h-full object-cover rounded-md"
            src={image}
            alt={alt}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <span className="tag-category">
              {category}
            </span>
          </div>
          <div>
            <h2 className="cursor-pointer text-start font-bold text-xl mb-2 line-clamp-2 hover:underline text-gold-400"
              onClick={() => navigate(`/blog-post/${id}`)}>
              {title}
            </h2>
          </div>
          <p className="text-offwhite-400 text-sm mb-4 grow line-clamp-3">
            {description}
          </p>
          <div className="flex items-center text-sm text-offwhite-300">
            <img
              className="w-8 h-8 rounded-full mr-2 border border-gold-400/30"
              src={imgAuthor}
              alt={author}
            />
            <span>{author}</span>
            <span className="mx-2 text-gold-400/50">|</span>
            <span>
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
