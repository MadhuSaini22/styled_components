import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import { StyledSocialIcons } from './styles/SocialIcons.styled'

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      
      <li>
        <a href='https://github.com/MadhuSaini22'>
          <FaGithub />
        </a>
      </li>

      <li>
        <a href='https://www.linkedin.com/in/madhu-saini/'>
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href='https://twitter.com/MadhuSaini22'>
          <FaTwitter />
        </a>
      </li>
    </StyledSocialIcons>
  )
}
