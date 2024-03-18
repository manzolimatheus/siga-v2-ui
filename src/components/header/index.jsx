import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex p-2 border-b-2 border-slate-300 shadow-md bg-white">
      <Link href="/">
        <Image
          src="/img/logo/default.png"
          alt="Siga Aluno"
          title="Siga Aluno"
          width={200}
          height={100}
        />
      </Link>
    </header>
  );
}
