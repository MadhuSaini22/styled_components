import SocialIcons from './SocialIcons'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src='./images/logom.svg' alt='' />

        <Flex>
          <ul>
            <li>
              You can contribute to my github projects. Find the bugs, solve it and generate the pull request.
              I would be happy to grow our open source community.
            </li>
            <li>madhusaini46810@gmail.com</li>
          </ul>
          <ul>
            <li>About </li>
            <li>What I Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; 2021, All rights reserved💖</p>
      </Container>
    </StyledFooter>
  )
}
