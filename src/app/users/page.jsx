import Link from "next/link";

export const metadata = {
    title: "Users",
    description: "Browse the user directory fetched from the external API.",
};

const UsersPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    return (
        <section className="min-h-screen bg-slate-100 px-4 py-10 md:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
                        Team Directory
                    </p>
                    <h1 className="text-3xl font-black text-slate-900 md:text-5xl">
                        Users Are Showing Here
                    </h1>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {users.map((user) => (
                        <article
                            key={user.id}
                            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="mb-5 flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
                                        User #{user.id}
                                    </p>
                                    <h2 className="mt-2 text-2xl font-bold text-slate-900">
                                        {user.name}
                                    </h2>
                                    <p className="mt-1 text-sm text-slate-500">
                                        @{user.username}
                                    </p>
                                </div>
                                <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                                    {user.company.name}
                                </span>
                            </div>

                            <div className="space-y-3 text-sm text-slate-600">
                                <p>
                                    <span className="font-semibold text-slate-900">Email:</span>{" "}
                                    {user.email}
                                </p>
                                <p>
                                    <span className="font-semibold text-slate-900">Phone:</span>{" "}
                                    {user.phone}
                                </p>
                                <p>
                                    <span className="font-semibold text-slate-900">Website:</span>{" "}
                                    {user.website}
                                </p>
                                <p>
                                    <span className="font-semibold text-slate-900">City:</span>{" "}
                                    {user.address.city}
                                </p>
                            </div>

                            <div className="mt-6">
                                <Link
                                    href={`/users/${user.id}`}
                                    className="inline-flex rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-600"
                                >
                                    View Details
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UsersPage;
