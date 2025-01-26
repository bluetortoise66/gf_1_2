const Blog = () => {
  return (
    <div className="blog mt-[120px] w-[340px] rounded-lg bg-white">
      <img
        className="h-[288px] w-full rounded-t-lg object-cover"
        src="public/spacejoy-YqFz7UMm8qE-unsplash.jpg"
        alt="Blog Cover Photos"
      />
      <div className="flex flex-col gap-3 px-4 py-6">
        <div className="flex flex-col gap-2">
          <span className="w-fit flex-none rounded-full border-1 border-green-200 bg-green-50 px-2 py-0.5 text-sm text-green-700">
            Interior
          </span>
          <span className="line-clamp-1 text-lg font-semibold text-neutral-900">
            Top 5 Living Room Inspirations
          </span>
        </div>
        <div className="flex flex-col gap-6">
          <p className="line-clamp-2 text-base font-medium text-neutral-600">
            Curated vibrants colors for your living, make it pop & calm in the
            same time.
          </p>
          <button className="flex w-fit items-center gap-1.5 rounded-sm text-left text-indigo-700 focus:shadow-[0_0_0_4px_rgba(68,76,231,.12)] disabled:text-neutral-400">
            <span className="inline px-[2px] text-base font-medium">
              Read More
            </span>
            <div className="flex size-5 items-center justify-center">
              <svg
                width="13.33px"
                viewBox="0 0 14 14"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="relative top-[1px]"
              >
                <path d="M10.4763 6.16658L6.00633 1.69657L7.18483 0.518066L13.6667 6.99992L7.18483 13.4817L6.00633 12.3032L10.4763 7.83325H0.333328V6.16658H10.4763Z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
