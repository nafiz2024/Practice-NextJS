import Link from "next/link";

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with JavaScript",
      author: "Alice Tan",
      date: "2026-03-10",
      tags: ["JavaScript", "Beginner", "Programming"],
      content:
        "This guide walks you through the basics of JavaScript, including variables, functions, and simple DOM manipulation.",
    },
    {
      id: 2,
      title: "A Guide to Healthy Remote Work",
      author: "Ravi Kumar",
      date: "2026-02-22",
      tags: ["Productivity", "Remote Work", "Wellness"],
      content:
        "Learn how to stay productive and maintain a healthy work-life balance while working from home.",
    },
    {
      id: 3,
      title: "Understanding AI in 2026",
      author: "Nafiz Alam",
      date: "2026-04-01",
      tags: ["AI", "Technology", "Future"],
      content:
        "An overview of the latest trends in artificial intelligence and what they mean for businesses and individuals.",
    },
    {
      id: 4,
      title: "Top Travel Destinations in Southeast Asia",
      author: "Mei Lin",
      date: "2026-01-15",
      tags: ["Travel", "Asia", "Lifestyle"],
      content:
        "Explore some of the most beautiful and culturally rich destinations across Southeast Asia.",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-100 px-4 py-10 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
            Latest Stories
          </p>
          <h1 className="text-3xl font-black text-slate-900 md:text-5xl">
            Blogs
          </h1>
          <p className="mt-3 max-w-2xl text-base text-slate-600 md:text-lg">
            Helpful articles, ideas, and quick reads from different topics in
            one clean place.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex items-center justify-between gap-4 text-sm text-slate-500">
                <span className="rounded-full bg-sky-100 px-3 py-1 font-semibold text-sky-700">
                  {blog.author}
                </span>
                <span>{blog.date}</span>
              </div>

              <h2 className="mb-3 text-2xl font-bold text-slate-900">
                {blog.title}
              </h2>

              <p className="mb-5 leading-7 text-slate-600">{blog.content}</p>

              <div className="mb-6 flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <Link href={`/blogs/${blog.id}`} className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-600">
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
