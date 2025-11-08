import Link from "next/link";

export default function Home() {
  const isLoggedIn = false;
  return (
    <div className="flex flex-col justify-center gap-y-3 md:gap-y-6 items-center w-full text-center">
      <section
        className="flex flex-col gap-y-2"
        aria-labelledby="Welcome message"
      >
        <h2 className="text-2xl md:text-3xl">Welcome to dataview</h2>
        <span>Your soon to be favourite data visualization platform</span>
      </section>
      <div className="flex flex-col">
        <Link
          href={isLoggedIn ? "/dashboard" : "/auth/signup"}
          className="link-btn"
        >
          {isLoggedIn ? "Continue" : "Get started"}
        </Link>
      </div>
    </div>
  );
}
