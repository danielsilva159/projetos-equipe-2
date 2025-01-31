import type { PropsWithChildren } from "react";
import Header from "./Header";
import Menu from "./Menu";

const Container = (props: PropsWithChildren) => {
  return (
    <div className="flex flex-col h-screen pt-9 pb-11">
      <Header />
      <div className="flex h-full">
        <Menu />
        <div className="bg-zinc-800 w-full rounded-md p-2 mr-10">{props.children}</div>
      </div>
    </div>
  )
}
 
export default Container;