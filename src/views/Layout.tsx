import { Outlet } from "@tanstack/react-router";

export default function Layout() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="h-full w-full">
        <Outlet />
      </div>
    </div>
  );
}
