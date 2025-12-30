function Header() {
  return (
    <>
      
        <div className="min-h-screen bg-brown-100 py-10 px-4 xl:px-30 xl:py-15">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 xl:gap-16 items-center">
            <article className="space-y-6 xl:flex:col xl:items-end gap-4 xl:gap-6">
              <h1 className="text-headline-2 text-brown-600 text-center xl:text-right">
                Stay <span className="hidden xl:inline"><br /></span>Informed, <span className="inline xl:hidden"><br /></span>Stay Inspired
              </h1>
              <p className="text-body text-brown-400 text-center gap-16 xl:text-right">
                Discover a World of Knowledge at Your Fingertips. Your Daily Dose of Inspiration and information.
              </p>
            </article>

            <div className="flex justify-center">
              <img
                src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
                alt="Man with cat in autumn forest"
                className="w-full max-w-xs xl:max-w-none xl:w-sm h-[529px] rounded-2xl object-cover"
              />
            </div>

            <div className="space-y-4 gap-3">
              <p className="text-body-3 text-brown-400">
                -Author
              </p>
              <h2 className="text-headline-3 text-brown-500">
                Thompson P.
              </h2>
              <div className="space-y-3 text-body text-brown-400">
                <p>
                  I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.
                </p>
                <br />
                <p>
                  When I'm not writing, I spends time volunteering at my local animal shelter, helping cats find loving homes.
                </p>
              </div>
            </div>
          </div>
        </div>
      
    </>
  )
}


export default Header