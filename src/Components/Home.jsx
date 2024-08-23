import React from "react";
import { blogsList } from "./constants";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 cursor-pointer">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Our Latest Blogs
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Get the latest insights and tips to enhance your skills in the
              tech world.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogsList.map((blog) => (
              <article
                key={blog.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs font-semibold">
                  <time dateTime={blog.datetime} className="text-gray-500">
                    {blog.date}
                  </time>
                </div>
                <div className="group relative hover:opacity-50">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                      <Link to={`/blogDetails/${blog.title}/${blog.id}`}>
                      <span className="absolute inset-0" />
                      {blog.title}
                      </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {blog.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
