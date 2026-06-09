import Link from "next/link";

export default function NotFound() {
  return (
    <section className="site-container grid min-h-screen place-items-center py-32 text-center">
      <div>
        <p className="text-[0.62rem] uppercase tracking-[0.22em] text-cyan">404 / Outside the system</p>
        <h1 className="mt-6 text-6xl font-semibold tracking-[-0.065em] md:text-8xl">Page not found.</h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-zinc-500">
          The requested page is not part of the current engineering architecture.
        </p>
        <Link href="/" className="mt-8 inline-block bg-white px-5 py-3 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-black">
          Return home
        </Link>
      </div>
    </section>
  );
}
