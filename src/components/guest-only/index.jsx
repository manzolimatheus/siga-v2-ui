"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GuestOnly({ children }) {
  const router = useRouter();

  useEffect(() => {
    const userData = sessionStorage.getItem("userData");
    if (userData) {
      router.push("/dashboard");
    }
  }, []);

  return <>{children}</>;
}
