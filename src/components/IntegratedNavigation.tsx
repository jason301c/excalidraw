import ProfileDropdown from "@/components/ProfileDropdown";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "@tanstack/react-router";

type NavButtonProps = {
  isActive: boolean;
  label: string;
};

function NavButton({ isActive, label }: NavButtonProps) {
  return (
    <Button
      className={cn(
        "flex h-9 items-center justify-center px-3 text-sm font-light hover:font-bold",
        isActive ? "font-bold" : "font-medium",
      )}
      variant="secondary"
      size="sm"
    >
      {label}
    </Button>
  );
}

const routes = [
  {
    label: "Home",
    to: "/pages",
  },
  {
    label: "Mermaid",
    to: "/mermaid",
  },
];

export default function IntegratedNavigation() {
  const location = useLocation();

  return (
    <div className="flex items-center gap-4">
      <Link to="/pages" className="flex items-center">
        <h1 className="font-virgil text-2xl font-bold">Draw</h1>
      </Link>
      <div className="h-8 w-px bg-gray-300 dark:bg-gray-600" />
      <div className="flex items-center gap-2">
        {routes.map(({ label, to }) => (
          <Link to={to} key={to}>
            <NavButton label={label} isActive={location.pathname === to} />
          </Link>
        ))}
      </div>
      <div className="h-8 w-px bg-gray-300 dark:bg-gray-600" />
      <ProfileDropdown />
    </div>
  );
}