"use client";

import { validateCPF } from "@/utils/cpf";
// Components
import { Spinner } from "@chakra-ui/react";

// Hooks
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm({ onSubmit }) {
  const toast = useToast();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const cpf = data.cpf.replace(/\D/g, "");

    const isCPFValid = validateCPF(cpf);

    if (!isCPFValid) {
      toast({
        title: "Erro",
        description: "CPF inválido",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    const response = await onSubmit({cpf, password: data.password});

    if (response?.error) {
      toast({
        title: "Erro",
        description: response.error,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    if (response?.userInfo) {
      toast({
        title: "Sucesso",
        description: "Login efetuado com sucesso",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      sessionStorage.setItem("userData", JSON.stringify(response));

      router.push("/dashboard");
    }

    setLoading(false);
  };

  return (
    <form
      className="w-full flex flex-col gap-8 bg-white p-4 shadow-lg rounded-md"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="cpf" className="font-bold">
          CPF
        </label>
        <input
          type="text"
          id="cpf"
          name="cpf"
          className="rounded-md p-2 bg-slate-100 border-[1px] border-slate-300"
          required
          maxLength={14}
          minLength={11}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="font-bold">
          Senha
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="rounded-md p-2 bg-slate-100 border-[1px] border-slate-300"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-black p-4 text-white rounded-md font-bold transition-all hover:bg-gray-900 disabled:brightness-75"
        disabled={loading}
      >
        {loading ? <Spinner /> : <span>Entrar</span>}
      </button>
    </form>
  );
}
