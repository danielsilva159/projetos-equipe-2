import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';

export default function PasswordReset() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-zinc-900 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-neutral-100 text-center text-lg font-semibold mb-6">Solicitar troca de senha</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-zinc-400 text-sm mb-2">
              Email
            </label>
            <div className="flex items-center bg-black rounded-md">
              <input
                type="email"
                id="email"
                placeholder="Digite seu email"
                className="flex-1 bg-transparent text-white px-4 py-2 focus:outline-none"
              />
              <span className="px-3 text-zinc-400">
                <AiOutlineMail className="h-5 w-5" />
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-neutral-100 font-semibold py-2 rounded-md transition duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
