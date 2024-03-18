import LoginForm from "@/components/forms/login";
import Image from "next/image";

async function callApi({ cpf, password }) {
  "use server";
  const base64 = Buffer.from(`${cpf}:${password}`).toString("base64");

  const response = await fetch(`${process.env.API_URL}/info`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${base64}`,
    },
  });

  return await response.json();
}

export default function Login() {
  return (
    <div className="flex flex-col items-center w-full p-8 gap-8">
      <Image
        src="/img/logo/default.png"
        alt="Siga Aluno"
        title="Siga Aluno"
        width={200}
        height={100}
        className="h-[200px] w-full object-contain mix-blend-multiply"
      />
      <p className="text-slate-500 text-center text-sm">
        Siga está de cara nova! Nessa nova versão, você poderá visualizar sua
        grade de notas, faltas e informações pessoais com agilidade e
        facilidade!
      </p>
      <LoginForm onSubmit={callApi} />
    </div>
  );
}
