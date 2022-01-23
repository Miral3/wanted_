import React from 'react';
import styled, { css } from 'styled-components';
import IconMenu from '../assets/icon-menu.png';
import TitleLogo from '../assets/wanted_Logo_black_raw.png';
import Search from '../assets/search.svg';
import Noti from '../assets/noti.svg';
import New from '../assets/new.svg';
import Beta from '../assets/beta.svg';
import Dot from '../assets/dot.svg';
import N from '../assets/n.svg';

const StyledUl = styled.ul`
  list-style: none;
`
const StyledLi = styled.li`
  display: inline-block;
`
const StyledButton = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
`
const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  z-index: 100;
`
const Nav = styled.div`
  position: relative;
  max-width: 1060px;
  height: 50px;
  @media ${({ theme }) => theme.device.lg} {
    width: 87.72%;
    height: 50px;
    margin: 0 auto;
  }
  @media ${({ theme }) => theme.device.md} {
    width: 90%;
    height: 50px;
    margin: 0 auto;
  }
  @media ${({ theme }) => theme.device.sm} {
    width: 90%;
    height: 110px;
    margin: 0 auto;
  }
  @media ${({ theme }) => theme.device.xs} {
    width: 100%;
    height: 110px;
    margin: 0;
  }
`;
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

// NavLeft
const NavbarLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.device.sm} {
    width: 100%;
    height: 60px;
    padding: 15px 0;
  }
  @media ${({ theme }) => theme.device.xs} {
    height: 60px;
    width: 100%;
    padding: 15px 20px;
  }
`;
const NavbarLeftContainer = styled.div`
  display: flex;
  align-items: center;
`
const MenuButton = styled(StyledButton)`
  margin-top: 2px;
  margin-right: 13px;
`;
const HamburgerMenu = styled.img`
  width: 17px;
  height: 14px;
  object-fit: contain;
`;
const LogoButton = styled.a`
  margin-top: 2px;
  cursor: pointer;
`;
const Logo = styled.img`
  width: 76.8px;
  height: auto;
`;

// NavMiddle
const NavbarMiddle = styled.div`
  height: inherit;
`;
const GnbLists = styled(StyledUl)`
  text-align: center;
  margin: 0;
  @media ${({ theme }) => theme.device.xm} {
    display: flex;
    flex: 1 1;
    justify-content: space-evenly;
  }
  @media ${({ theme }) => theme.device.sm} {
    justify-content: flex-start;
    margin-right: 30px;
  }
  @media ${({ theme }) => theme.device.xs} {
    text-align: left;
    margin-right: 0;
  }
`;
const GnbItem = styled(StyledLi)`
  ${props =>
    props.hidden &&
    css`
      display: none;
      padding-left: 10px;
      @media ${({ theme }) => theme.device.xs} {
        display: inline-block;
      }
    `}
  ${props =>
    props.more &&
    css`
      display: inline-block;
      @media ${({ theme }) => theme.device.xs} {
        display: none;
      }
    `}  
`;
const NavLink = styled.a`
  position: relative;
  vertical-align: middle;
  padding: 15px;
  line-height: 20px;
  font-size: 14px;
  font-weight: 600;
  display: inline-block;
  cursor: pointer;

  @media ${({ theme }) => theme.device.xm} {
    padding: 15px 0;
    font-size: 13px;
  }
  @media ${({ theme }) => theme.device.sm} {
    padding: 11px 10px 19px;
    font-size: 13px;
  }
  @media ${({ theme }) => theme.device.xs} {
    padding: 11px 10px 19px;
    font-size: 14px;
  }
`;
const StateWrapper = styled.em`
  position: absolute;
  top: 10px;
  right: -5px;
  @media ${({ theme }) => theme.device.xm} {
    right: -20px;
  }
  @media ${({ theme }) => theme.device.sm} {
    right: -8px;
    top: 4px;
  }
`;
const State = styled.img``;

// NavRight
const NavbarRight = styled.div`
  height: 100%;
  padding: 9px 0;
`;
const ButtonLists = styled(StyledUl)`
  height: 100%;
  @media ${({ theme }) => theme.device.xs} {
    margin-top: -5px;
  }
`;
const ButtonItem = styled(StyledLi)`
  position: relative;
  height: inherit;
  vertical-align: middle;
  ${props =>
    props.leftDivision &&
    css`
      display: inline-flex;
      ::before {
        display: block;
        content: '';
        width: 1px;
        height: 10px;
        background-color: #e1e2e3;
        margin: auto 10px;
      }
      @media ${({ theme }) => theme.device.sm} {
        display: none;
      }
    `}
  ${props =>
    props.profileBox &&
    css`
      display: inline-flex;
      align-items: center;
      margin-right: 5px;
      @media ${({ theme }) => theme.device.sm} {
        display: none;
        margin: 0;
      }
    `}
  ${props =>
    props.hidden &&
    css`
      display: none;
      @media ${({ theme }) => theme.device.sm} {
        display: inline-block;
      }
    `}
`;
const StyleAsideButton = styled(StyledButton)`
  position: relative;
  padding: 0 5px;
  @media ${({ theme }) => theme.device.lg} {
    padding: 0 10px;
  }
`
const SearchButton = styled(StyleAsideButton)`
  margin-top: 8px;
  @media ${({ theme }) => theme.device.sm} {
    margin: 0;
  }
`;
const SearchIcon = styled.img`
  width: 18px;
  height: 18px;
`;
const Badge = styled.span`
  background-color: #36f;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 13px;
  height: 13px;
  font-size: 14px;
  color: #333;
  font-weight: 600;
  line-height: 1;
  position: absolute;
  padding: 0 !important;
  ${props =>
    props.noti &&
    css`
      top: -5px;
      left: 23px;
    `
  }
  ${props =>
    props.avatar &&
    css`
      top: -2px;
      left: 22px;
    `
  }
`
const BadgeIcon = styled.img`
  width: 5px;
  height: 5px;
`
const NotiButton = styled(StyleAsideButton)`
  margin-top: 5px;
  margin-right: 11px;
  @media ${({ theme }) => theme.device.md} {
    margin-right: 5px;
  }
  @media ${({ theme }) => theme.device.sm} {
    margin: 0;
  }
`;
const NotiIcon = styled.img`
  width: 16px;
  height: 16px;
`;
const AvatarButton = styled(StyleAsideButton)`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  vertical-align: top;
  padding: 0;
  margin-right: 11px;
  @media ${({ theme }) => theme.device.md} {
    margin-right: 0;
  }
`;
const AvatarBorder = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #e1e2e3;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const AvatarImage = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png), url(https://static.wanted.co.kr/images/profile_default.png);
`;
const DashboardButton = styled.a`
  font-size: 13px;
  color: #666;
  line-height: 30px;
  height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  padding: 0 10px;
  margin-left: 15px;
  font-weight: 400;
  cursor: pointer;
  @media ${({ theme }) => theme.device.md} {
    margin: 0;
  }
`;
const DotsButton = styled(StyledButton)`
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 5px;
  width: 33px;
  height: 21px;
  @media ${({ theme }) => theme.device.sm} {
    margin-right: 0;
  }
  @media ${({ theme }) => theme.device.xs} {
    margin-right: 10px;
  }
`
const DotsIcon = styled.img`
  width: 15px;
`
function Navbar() {
  return (
    <Wrapper>
      <Nav>
        <NavbarContainer>
          <NavbarLeft>
            <NavbarLeftContainer>
              <MenuButton>
                <HamburgerMenu src={IconMenu} alt='hanburgerMenu' />
              </MenuButton>
              <LogoButton href='/'>
                <Logo src={TitleLogo} alt='wantedTitleLogo' />
              </LogoButton>
            </NavbarLeftContainer>
          </NavbarLeft>
          {/* <NavbarMiddle> */}
          <GnbLists>
            <GnbItem hidden={true}>
              <NavLink hidden={true} href='/'>홈</NavLink>
            </GnbItem>
            <GnbItem>
              <NavLink href='/'>채용</NavLink>
            </GnbItem>
            <GnbItem>
              <NavLink href='/'>이벤트</NavLink>
            </GnbItem>
            <GnbItem more={true}>
              <NavLink href='/'>직군별 연봉</NavLink>
            </GnbItem>
            <GnbItem more={true}>
              <NavLink href='/'>이력서</NavLink>
            </GnbItem>
            <GnbItem more={true}>
              <NavLink href='/'>커뮤니티<StateWrapper><State src={New} alt='new'></State></StateWrapper></NavLink>
            </GnbItem>
            <GnbItem more={true}>
              <NavLink href='/'>프리랜서</NavLink>
            </GnbItem>
            <GnbItem more={true}>
              <NavLink href='/'>AI 합격예측<StateWrapper><State src={Beta} alt='beta'></State></StateWrapper></NavLink>
            </GnbItem>
          </GnbLists>
          {/* </NavbarMiddle> */}
          <NavbarRight>
            <ButtonLists>
              <ButtonItem>
                <SearchButton>
                  <SearchIcon src={Search} alt='search' />
                </SearchButton>
              </ButtonItem>
              <ButtonItem>
                <NotiButton>
                  <NotiIcon src={Noti} alt='noti' />
                </NotiButton>
                <Badge noti={true}>
                  <BadgeIcon src={N} alt='n' />
                </Badge>
              </ButtonItem>
              <ButtonItem profileBox={true}>
                <AvatarButton>
                  <AvatarBorder>
                    <AvatarImage />
                  </AvatarBorder>
                </AvatarButton>
                <Badge avatar={true}>
                  <BadgeIcon src={N} alt='n' />
                </Badge>
              </ButtonItem>
              <ButtonItem leftDivision={true}>
                <DashboardButton>기업 서비스</DashboardButton>
              </ButtonItem>
              <ButtonItem hidden={true}>
                <DotsButton>
                  <DotsIcon src={Dot} alt='dot' />
                </DotsButton>
              </ButtonItem>
            </ButtonLists>
          </NavbarRight>
        </NavbarContainer>
      </Nav>
    </Wrapper>
  );
}

export default Navbar;