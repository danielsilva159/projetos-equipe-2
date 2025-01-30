import Image from "next/image";
import Link from "next/link";

export default function LogoDefault() {
  return (
    <Link href="/">
      <Image src="/logo-default.svg" width={160} height={120} alt="Logo default"/>
    </Link>
  )
}