import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { userId } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if (!res.ok) {
        return {
            title: "User Not Found",
            description: "The requested user profile could not be found.",
        };
    }

    const user = await res.json();

    return {
        title: user.name,
        description: `View contact and company details for ${user.name}.`,
    };
}

const UsersDetailsPage = async ({ params }) => {
    const { userId } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if (!res.ok) {
        notFound();
    }

    const user = await res.json();

    return (
        <section className="min-h-screen bg-slate-100 px-4 py-10 md:px-8">
            <div className="mx-auto max-w-5xl">
                <div className="mb-6">
                    <Link
                        href="/users"
                        className="inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-sky-500 hover:text-sky-600"
                    >
                        Back to Users
                    </Link>
                </div>

                <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
                    <div className="bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-400 px-8 py-10 text-white">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
                            User Details
                        </p>
                        <h1 className="text-3xl font-black md:text-5xl">
                            {user.name}
                        </h1>
                        <p className="mt-3 text-base text-white/90 md:text-lg">
                            Username: @{user.username}
                        </p>
                    </div>

                    <div className="grid gap-6 p-8 md:grid-cols-2 md:p-10">
                        <div className="rounded-3xl bg-slate-50 p-6">
                            <h2 className="mb-4 text-xl font-bold text-slate-900">
                                Contact Information
                            </h2>
                            <div className="space-y-3 text-sm leading-7 text-slate-600">
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
                                    <span className="font-semibold text-slate-900">User ID:</span>{" "}
                                    {user.id}
                                </p>
                            </div>
                        </div>

                        <div className="rounded-3xl bg-slate-50 p-6">
                            <h2 className="mb-4 text-xl font-bold text-slate-900">
                                Address
                            </h2>
                            <div className="space-y-3 text-sm leading-7 text-slate-600">
                                <p>
                                    <span className="font-semibold text-slate-900">Street:</span>{" "}
                                    {user.address.street}
                                </p>
                                <p>
                                    <span className="font-semibold text-slate-900">Suite:</span>{" "}
                                    {user.address.suite}
                                </p>
                                <p>
                                    <span className="font-semibold text-slate-900">City:</span>{" "}
                                    {user.address.city}
                                </p>
                                <p>
                                    <span className="font-semibold text-slate-900">Zipcode:</span>{" "}
                                    {user.address.zipcode}
                                </p>
                            </div>
                        </div>

                        <div className="rounded-3xl bg-slate-50 p-6 md:col-span-2">
                            <h2 className="mb-4 text-xl font-bold text-slate-900">
                                Company Details
                            </h2>
                            <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-3">
                                <div className="rounded-2xl bg-white p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
                                        Company
                                    </p>
                                    <p className="mt-2 text-lg font-bold text-slate-900">
                                        {user.company.name}
                                    </p>
                                </div>
                                <div className="rounded-2xl bg-white p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
                                        Catch Phrase
                                    </p>
                                    <p className="mt-2 text-base font-semibold text-slate-900">
                                        {user.company.catchPhrase}
                                    </p>
                                </div>
                                <div className="rounded-2xl bg-white p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
                                        Business
                                    </p>
                                    <p className="mt-2 text-base font-semibold text-slate-900">
                                        {user.company.bs}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default UsersDetailsPage;
