import Link from "next/link";

export const metadata = {
  title: "Not Found",
  description: "The page you are looking for could not be found.",
};

const NotFound = () => {
  return (
    <section className="min-h-screen bg-slate-100 px-4 py-10 md:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
          <div className="bg-gradient-to-r from-rose-500 via-orange-400 to-amber-300 px-8 py-10 text-white">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
              Error 404
            </p>
            <h1 className="text-4xl font-black md:text-6xl">Page Not Found</h1>
            <p className="mt-3 max-w-2xl text-base text-white/90 md:text-lg">
              The page you requested does not exist or may have been moved.
            </p>
          </div>

          <div className="p-8 md:p-10">
            <div className="rounded-3xl bg-slate-50 p-6">
              <h2 className="text-xl font-bold text-slate-900">
                Try one of these pages
              </h2>
              <p className="mt-3 text-slate-600">
                You can head back home or continue browsing the main sections of
                the app.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-600"
                >
                  Go Home
                </Link>
                <Link
                  href="/users"
                  className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-sky-500 hover:text-sky-600"
                >
                  Browse Users
                </Link>
                <Link
                  href="/blogs"
                  className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-sky-500 hover:text-sky-600"
                >
                  Read Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
