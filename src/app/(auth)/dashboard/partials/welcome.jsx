// Components
import Image from "next/image";

export default function Welcome({ user }) {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <Image
        src={user?.userInfo?.image}
        alt="Foto de perfil"
        width={100}
        height={100}
        className="rounded-full shadow-lg"
      />
      <h1 className="text-3xl font-bold">👋 Bem-vindo {user?.userInfo?.name}!</h1>
      <p className="text-gray-500">
        Bem-vindo ao painel de controle da sua conta.
      </p>
    </div>
  );
}
