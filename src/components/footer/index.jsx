"use client";
// Components
import Link from "next/link";
import Image from "next/image";

// Icons
import { CalendarIcon, CheckCircleIcon, Icon } from "@chakra-ui/icons";

// Hooks
import useSessionStorage from "@/app/hooks/use-session-storage";

export default function Footer() {
  const userData = useSessionStorage("userData");

  return (
    <footer className="h-full w-full border-t-2 border-slate-300 bg-white">
      <nav className="h-full flex w-full">
        <ul className="h-full w-full flex items-center justify-between p-4">
          <li className="h-full">
            <Link
              href="/notas"
              className="h-full flex flex-col items-center justify-between"
            >
              <Icon as={CheckCircleIcon} />
              <span>Notas</span>
            </Link>
          </li>
          <li className="h-full">
            <Link
              href="/frequencia"
              className="h-full flex flex-col items-center justify-between"
            >
              <Icon as={CalendarIcon} />
              <span>Frequência</span>
            </Link>
          </li>
          <li className="h-full">
            <Link href="/dashboard" className="h-full">
              <Image
                src={userData?.userInfo?.image}
                alt="Foto de perfil"
                width={40}
                height={40}
                className="h-full w-[40px] object-cover rounded-full transition-all hover:brightness-75"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
