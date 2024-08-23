import React from "react";

const blogsList = [
  {
    id: 1,
    title: "Full-Stack Development for Beginners",
    href: "#",
    description:"Guide for beginners on how to get started with full-stack development using the MERN stack (MongoDB, Express.js, React, Node.js)",
    date: "Aug 16, 2024",
    datetime: "2020-03-16",
  },
  {
    id: 2,
    title: "JavaScript Tips and Tricks",
    href: "#",
    description:
      "Useful JavaScript tips, best practices, and lesser-known features that can help beginners and intermediates to write better code.",
    date: "July 28, 2024",
    datetime: "2020-03-16",
  },
  {
    id: 3,
    title: "React vs. Other Front-End Frameworks",
    href: "#",
    description:
      "Compare React with other popular front-end frameworks like Angular, Vue.js, and Svelte, highlighting their strengths and weaknesses.",
    date: "July 1, 2024",
    datetime: "2020-03-16",
  },
  {
    id: 4,
    title: "Exploring CSS Frameworks",
    href: "#",
    description:
      "A series that explores different CSS frameworks like Tailwind CSS, Bootstrap, and Bulma, and how they can be used to streamline front-end development.",
    date: "June 22, 2024",
    datetime: "2020-03-16",
  },
  {
    id: 5,
    title: "Code Reviews and Best Practices",
    href: "#",
    description:
      "Insights on how to conduct effective code reviews, common mistakes to avoid, and how to improve code quality within teams.",
    date: "May 6, 2024",
    datetime: "2020-03-16",
  },
  {
    id: 6,
    title: "The Future of Web Development",
    href: "#",
    description:
      "Emerging trends in web development, such as WebAssembly, Progressive Web Apps (PWAs), and the use of AI in web designs.",
    date: "Apr 18, 2024",
    datetime: "2020-03-16",
  },
];


const Home = () => {
  return (
    <div>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                    <a href={blog.href}>
                      <span className="absolute inset-0" />
                      {blog.title}
                    </a>
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
