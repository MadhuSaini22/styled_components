import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { Button } from "./styles/Button.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logom.svg" alt="" />

          <a href="https://www.linkedin.com/in/madhu-saini/">
            <Button>Connect with me :)</Button>
          </a>
        </Nav>

        <Flex>
          <div>
            <h1>Hello, I'm Madhu Saini</h1>

            <p>
              A prossionate Frontend Engineer, looking to contribute to the open source community.
              You can suggest me any project for contribution, I would be happy to work with.
            </p>

            <a href="https://madhusaini.netlify.app/">
              <Button bg="#ff0099" color="#fff">
                Learn More
              </Button>
            </a>
          </div>

          <Image src="./images/madhu12.jpg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
