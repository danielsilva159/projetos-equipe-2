import LogoDefault from "@/app/components/LogoDefault";
import InputSearch from "./Search";
import UserLogged from "./UserLogged";
import { FaSearch } from 'react-icons/fa'
import usuarioLogado from "@/context/data/usuario-logado";

const Header = () => {

  const userLogged = usuarioLogado

  return (
    <div className="flex justify-between px-10">
      <div className="flex items-center gap-6 justify-start px-8 h-full">
        <LogoDefault />
        <h1 className="text-2xl font-semibold">Administrador</h1>
      </div>
      <div className="flex items-center gap-4">
        <InputSearch
          endIcon={
            <FaSearch size={20} style={{ fill: '#fff', stroke: '#fff' }} />
          }
        />
        <div className="bg-zinc-400 h-14 w-[2px]"></div>
        <UserLogged {...userLogged} />
      </div>
    </div>
  )
}
 
export default Header;