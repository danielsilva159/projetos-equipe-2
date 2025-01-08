import Image from "next/image";
import Link from "next/link";

export default function LogoLarge() {
  return (
    <Link href="/">
      <Image src="/logo-large.svg" width={201.48} height={148} alt="Logo large"/>
    </Link>
  )
}