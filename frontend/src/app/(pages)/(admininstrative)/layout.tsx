import type { PropsWithChildren } from "react";
import Container from "./components/Container";

const TemplateAdmin = (props: PropsWithChildren) => {
  return (
    <Container>
      {props.children}
    </Container>
   );
}
 
export default TemplateAdmin;