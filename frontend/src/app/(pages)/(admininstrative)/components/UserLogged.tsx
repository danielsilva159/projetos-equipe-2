import Image from "next/image";

interface UserLoggedProps {
  name: string,
  avatar: string
  email: string
}

const UserLogged = (props: UserLoggedProps) => {
  return ( 
    <div>
      <div className="flex items-center gap-6 py-12">
        <Image src={props.avatar} alt={props.name} width={60} height={60} className="rounded-full" />
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-2xl text-zinc-200">{props.name}</h1>
          <p className="text-zinc-200/60 text-sm">{props.email}</p>
        </div>
      </div>
    </div>
   );
}
 
export default UserLogged;