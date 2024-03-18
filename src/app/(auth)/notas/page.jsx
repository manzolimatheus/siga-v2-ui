"use client";

// Hooks
import useSessionStorage from "@/app/hooks/use-session-storage";
import List from "./partials/list";

export default function Grades() {
  const user = useSessionStorage("userData");

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold p-4">✨ Notas</h1>
      <List user={user} />
    </div>
  );
}
