import Image from "next/image";
import Link from "next/link";

export default function LogoDefault() {
  return (
    <Link href="/">
      <Image src="/logo-default.svg" width={162} height={121} alt="Logo default"/>
    </Link>
  )
}