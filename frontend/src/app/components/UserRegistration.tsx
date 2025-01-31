import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import InputText from './InputText';
import { GoChevronDown } from 'react-icons/go';
import ReactCountryFlag from 'react-country-flag';
import { MdLockOutline } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';

export default function PasswordReset() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-zinc-900 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-neutral-100 text-center text-lg font-bold mb-4">Cadastrar</h2>
        <form>
          <InputText
            textLabel={'Nome'}
            startIcon={
              <Image src="/Vector.png" alt="Ícone personalizado" width={20} height={20} />
            }
            className="mt-2 mb-2"
          />
          <InputText textLabel={'Email'} startIcon={<AiOutlineMail className="h-5 w-5" />} className='mt-2 mb-2' />
          <InputText textLabel={'Senha'} startIcon={<MdLockOutline className="h-5 w-5" />} className='mt-2 mb-2' />
          <InputText textLabel={'Senha'} startIcon={<MdLockOutline className="h-5 w-5" />} className='mt-2 mb-2' />
          <InputText 
            textLabel={''}
            startIcon={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                  <ReactCountryFlag countryCode="BR" svg style={{ width: '1.5em', height: '1.5em', marginRight: '8px' }} />
                  <GoChevronDown />
              </div>
            }
            className='mt-2 mb-2'
          />
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-neutral-100 font-semibold mt-6 mb-4 py-2 rounded-md transition duration-300"
          >
            Cadastrar-se
          </button>
          <div className='flex gap-1 mt-2 mb-2 justify-center'>
            <Link href="/" className="hover:underline mb-2">
              Já possui conta? <span className="text-[#22C55E]">Faça Login</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
