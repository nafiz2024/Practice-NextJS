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

export async function generateMetadata({ params }) {
  const { blogId } = await params;
  const blog = blogs.find((item) => item.id === parseInt(blogId, 10));

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: blog.title,
    description: `Read details for "${blog.title}" by ${blog.author}.`,
  };
}

const BlogDetailsPage = async ({ params }) => {
  const { blogId } = await params;
  const blog = blogs.find((blog) => blog.id === parseInt(blogId, 10));

  if (!blog) {
    return (
      <section className="min-h-screen bg-slate-100 px-4 py-10 md:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">
            Blog Not Found
          </p>
          <h1 className="text-3xl font-black text-slate-900">No blog found</h1>
          <p className="mt-3 text-slate-600">
            এই id দিয়ে কোনো blog পাওয়া যায়নি।
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-100 px-4 py-10 md:px-8">
      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
          <div className="bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-400 px-8 py-10 text-white">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
              Blog Details
            </p>
            <h1 className="max-w-3xl text-3xl font-black leading-tight md:text-5xl">
              {blog.title}
            </h1>
          </div>

          <div className="p-8 md:p-10">
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="rounded-full bg-sky-100 px-4 py-2 font-semibold text-sky-700">
                Author: {blog.author}
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-600">
                Published: {blog.date}
              </span>
              <span className="rounded-full bg-emerald-100 px-4 py-2 font-medium text-emerald-700">
                Blog ID: {blog.id}
              </span>
            </div>

            <div className="mb-8 flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="rounded-3xl bg-slate-50 p-6">
              <h2 className="mb-4 text-xl font-bold text-slate-900">
                Full Overview
              </h2>
              <p className="text-base leading-8 text-slate-700">
                {blog.content}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogDetailsPage;
