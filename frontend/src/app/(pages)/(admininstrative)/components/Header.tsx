import LogoDefault from "@/app/components/LogoDefault";
import InputSearch from "./Search";
import UserLogged from "./UserLogged";
import { AiOutlineSearch } from "react-icons/ai";
import usuarioLogado from "@/context/data/usuario-logado";

const Header = () => {

  const userLogged = usuarioLogado

  return (
    <div className="flex justify-between items-center h-40 px-6 py-8">
      <div className="flex items-center gap-14 justify-center">
        <LogoDefault />
        <h1 className="text-2xl font-semibold">Administrador</h1>
      </div>
      <div className="flex items-center gap-4 px-6 py-8">
        <InputSearch
          endIcon={
            <AiOutlineSearch
              size={20}
              style={{ fill: '#fff', stroke: '#fff' }}
            />
          }
        />
        <div className="bg-zinc-400 h-14 w-[2px]"></div>
        <UserLogged
          {...userLogged}
        />
      </div>
    </div>
  )
}
 
export default Header;