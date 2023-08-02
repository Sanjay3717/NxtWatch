import {Component} from 'react'
import {AiOutlineHome, AiOutlineFire} from 'react-icons/ai'
import {GrGamepad} from 'react-icons/gr'
import {CgPlayList} from 'react-icons/cg'

import {
  LeftSideOptionsContainer,
  LeftSideOptionsIcons,
  Icons,
  IconText,
  ContactUs,
  ContactUsText,
  ContactLogo,
  ContactLogoContainer,
  ContactDescContainer,
  ContactDesc,
} from './styledComponents'
import './index.css'

class LeftSideOptions extends Component {
  render() {
    return (
      <LeftSideOptionsContainer>
        <LeftSideOptionsIcons>
          <Icons>
            <AiOutlineHome className="home-icon" />
            <IconText>Home</IconText>
          </Icons>
          <Icons>
            <AiOutlineFire className="home-icon" />
            <IconText>Trending</IconText>
          </Icons>
          <Icons>
            <GrGamepad className="home-icon" />
            <IconText>Gaming</IconText>
          </Icons>
          <Icons>
            <CgPlayList className="home-icon" />
            <IconText>Saved Videos</IconText>
          </Icons>
        </LeftSideOptionsIcons>

        <ContactUs>
          <ContactUsText>CONTACT US</ContactUsText>
          <ContactLogoContainer>
            <ContactLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
            <ContactLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
            <ContactLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
          </ContactLogoContainer>
          <ContactDescContainer>
            <ContactDesc>
              Enjoy! Now to see your channels and recommendations
            </ContactDesc>
          </ContactDescContainer>
        </ContactUs>
      </LeftSideOptionsContainer>
    )
  }
}
export default LeftSideOptions
