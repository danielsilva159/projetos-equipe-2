import Image from "next/image";
import Link from "next/link";

export default function LogoDefault() {
  return (
    <Link href="/" className="p-0">
      <Image src="/logo-default.svg" width={162} height={129} alt="Logo default"/>
    </Link>
  )
}