import InputSelect from "@/app/components/inputSelect";
import accessProfile from "@/context/data/select-perfil-de-acesso";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { TbCube } from "react-icons/tb";

const Menu = () => {

  const options = accessProfile

  //TODO: criar verificacao de pagina ativa

  return (
    <div className="w-80">
      <div className="w-full px-1 pb-6">
        <InputSelect options={options} />
      </div>
      <div className="flex flex-col">
        <Link href="#">
          <div className="w-full flex items-center gap-4 pl-20 hover:bg-zinc-900 transition-colors duration-300 h-12 text-zinc-400 hover:text-zinc-100 cursor-pointer p-0.5">
            <FiUser width={24} height={24} />
            <p className="text-lg">Gerenciar</p>
          </div>
        </Link>
        <Link href="#">
          <div className="w-full flex items-center gap-4 pl-20 hover:bg-zinc-900 transition-colors duration-300 h-12 text-zinc-400 hover:text-zinc-100 cursor-pointer p-0.5">
            <TbCube width={24} height={24} />
            <p className="text-lg">Visualizar</p>
          </div>
        </Link>
        <Link href="#">
          <div className="w-full flex items-center gap-4 pl-20 hover:bg-zinc-900 transition-colors duration-300 h-12 text-zinc-400 hover:text-zinc-100 cursor-pointer p-0.5">
            <HiOutlineClipboardList width={24} height={24} />
            <p className="text-lg">Relatórios</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
 
export default Menu;