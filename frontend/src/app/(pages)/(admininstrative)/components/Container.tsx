import type { PropsWithChildren } from "react";
import Header from "./Header";
import SideBar from "./Menu";

const Container = (props: PropsWithChildren) => {
  return ( 
    <div>
      <Header />
      <div className="flex bg-zinc-600">
        <SideBar />
        <div>
          {props.children}
        </div>
      </div>
    </div>
   );
}
 
export default Container;