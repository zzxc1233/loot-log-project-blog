type BlogCardUIProps = {
  image: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  imgAuthor: string;
  author: string;
  date: string;
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
}: BlogCardUIProps) {
  return (
    <>
      <div className="flex flex-col gap-4 p-4 bg-midnight-800 border border-gold-400/30 rounded-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] transition-shadow">
        <a href="#" className="relative h-53 sm:h-90">
          <img
            className="w-full h-full object-cover rounded-md"
            src={image}
            alt={alt}
          />
        </a>
        <div className="flex flex-col">
          <div className="flex">
            <span className="bg-gold-400/20 rounded-full px-3 py-1 text-sm font-semibold text-gold-400 mb-2 border border-gold-400/30">
              {category}
            </span>
          </div>
          <a href="#">
            <h2 className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline text-gold-400">
              {title}
            </h2>
          </a>
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
