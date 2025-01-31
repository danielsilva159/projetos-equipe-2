import InputSelect from "@/app/components/inputSelect";
import accessProfile from "@/context/data/select-perfil-de-acesso";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { TbCube } from "react-icons/tb";

const Menu = () => {

  const options = accessProfile

  return (
    <div className="w-80">
      <div className="w-full px-1 pb-6">
        <InputSelect options={options} />
      </div>
      <div className="flex flex-col gap-2">
        <Link href="#">
          <div className="w-full flex items-center gap-3 pl-16 hover:bg-zinc-900 transition-colors duration-300 h-10 text-zinc-400 hover:text-zinc-100 cursor-pointer p-0.5">
            <FiUser />
            <p>Gerenciar</p>
          </div>
        </Link>
        <Link href="#">
          <div className="w-full flex items-center gap-3 pl-16 hover:bg-zinc-900 transition-colors duration-300 h-10 text-zinc-400 hover:text-zinc-100 cursor-pointer p-0.5">
            <TbCube />
            <p>Visualizar</p>
          </div>
        </Link>
        <Link href="#">
          <div className="w-full flex items-center gap-3 pl-16 hover:bg-zinc-900 transition-colors duration-300 h-10 text-zinc-400 hover:text-zinc-100 cursor-pointer p-0.5">
            <HiOutlineClipboardList />
            <p>Relatórios</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
 
export default Menu;