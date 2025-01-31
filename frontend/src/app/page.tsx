import LogoDefault from '@/app/components/LogoDefault';
import LogoLarge from '@/app/components/LogoLarge';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
        <div className="flex items-center">
          <LogoLarge />
          <LogoDefault />
        </div>
        <div className="flex flex-col">
          <Link href="/password-reset" className="hover:underline mb-2">
            Esqueceu a senha?
          </Link>
          <h1>
            Ainda não possui conta?
            <span className="text-[#22C55E]"> Cadastre-se <Link href="/user-registration" className="underline">aqui</Link></span>
          </h1>
        </div>
      </main>
    </div>
  );
}
