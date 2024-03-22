import { Container } from "@chakra-ui/layout";
import Content from "./content/Content";
import Sidebar from "./sidebar/Sidebar";

export default function Main() {
  return (
    <div className="container-fluid main">
      <Container display={{ base: "block", md: "flex" }} maxW="container.xl">
        <Sidebar />
        <Content />
      </Container>
    </div>
  );
}
