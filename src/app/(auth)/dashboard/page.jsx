'use client'
import Info from "./partials/info";
// Components
import Welcome from "./partials/welcome";

// Hooks
import useSessionStorage from "@/app/hooks/use-session-storage";

export default function Dashboard() {
  const user = useSessionStorage("userData");

  return (
    <div className="flex flex-col gap-4 p-6">
      <Welcome user={user} />
      <hr />
      <Info user={user} />
    </div>
  );
}
