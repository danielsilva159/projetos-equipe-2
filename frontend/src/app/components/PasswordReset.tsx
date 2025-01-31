import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import InputText from './inputText';

export default function PasswordReset() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-zinc-900 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-neutral-100 text-center text-lg font-semibold mb-6">Solicitar troca de senha</h2>
        <form>
          <div className="mb-4">
            <div className="flex items-center">
              <InputText textLabel="Email" type="email" endIcon={<AiOutlineMail className="h-5 w-5" />} />
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
}
