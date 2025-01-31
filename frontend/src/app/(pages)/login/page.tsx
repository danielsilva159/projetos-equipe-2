import LogoLarge from '@/app/components/LogoLarge';
import InputText from '@/app/components/inputText';
import Link from 'next/link';
import { AiOutlineMail, AiOutlineEye } from 'react-icons/ai';

export default function Login() {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex flex-col  bg-[#18181B] w-1/3 m-4 p-8 gap-2">
        <div className="flex justify-center">
          <LogoLarge />
        </div>
        <InputText textLabel="Email" endIcon={<AiOutlineMail />} />
        <InputText textLabel="Senha" type="password" endIcon={<AiOutlineEye />} />
        <div className="flex items-end justify-end">
          <Link href={'/password-reset'}>Esqueceu a senha?</Link>
        </div>
        <div className="flex">
          <Link href={''} className="w-full bg-[#22C55E] text-center rounded-md p-2">
            Login
          </Link>
        </div>
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-3 text-gray-500 text-sm font-medium">OU</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <div className="flex items-center my-4">
          <Link href={''} className="flex justify-center items-center w-8 h-8 rounded-2xl bg-[#EF4444]">
            G
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <span>
            Ainda não possui conta?{' '}
            <Link href={'/user-registration'} className="text-[#22C55E]">
              Cadastre-se aqui
            </Link>
          </span>
          <span>ou faça login pelo Google clicando no G acima</span>
        </div>
      </div>
    </div>
  );
}
