import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      lang="en"
      className="grid grid-cols-1 lg:grid-cols-[300px_1fr] min-w-full gap-5"
    >
      <aside className="bg-orange-500 hidden lg:block">
        {/* <DashboardSidebar /> */}
      </aside>
      <main className="bg-purple-400">{children}</main>
    </div>
  );
}
