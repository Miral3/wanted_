import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import Go from '../assets/goto.svg';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  filter: brightness(50%);
  ${props =>
    props.active &&
    css`
      filter: brightness(100%);
    `
  }
`;
const ImageContainer = styled.div`
  padding: 0 12px;
  box-sizing: content-box;
  @media ${({ theme }) => theme.device.md} {
    height: 183px;
    border-radius: 3px 3px 0 0;
  }
`;
const Image = styled.img`
  border-radius: 4px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-user-drag: none;
`;
const InformationContainer = styled.div`
  text-align: center;
  opacity: 1;
  @media ${({ theme }) => theme.device.lg} {
    opacity: 0;
    position: absolute;
    bottom: 35px;
    left: 34px;
    width: 330px;
    height: 146px;
    border-radius: 4px;
    background-color: #fff;
    text-align: left;
    ${props =>
    props.active &&
    css`
      opacity: 1;
    `
  }
  }
`;
const H2 = styled.h2`
  font-size: 18px;
  margin-top: 20px;
  line-height: 1;
  @media ${({ theme }) => theme.device.lg} {
    font-size: 20px;
    margin: 20px 20px 0;
    line-height: 1.5;
  }
`;
const H3 = styled.h3`
  font-size: 13px;
  margin-top: 6px;
  font-weight: 500;
  line-height: 1.15;
  color: #666;
  @media ${({ theme }) => theme.device.lg} {
    font-size: 14px;
    margin: 0 20px;
    font-weight: 400;
    height: 44px;
    line-height: 1.64;
  }
`;
const Hr = styled.hr`
  display: none;
  @media ${({ theme }) => theme.device.lg} {
    display: block;
    height: 1px;
    margin: 0;
    border: none;
    background-color: #ececec;
  }
`;
const GoContainer = styled.a`
  display: inline-flex;
  margin: 6px 0 0 13px;
  padding: 6px;
  box-sizing: border-box;
  height: 40px;
  font-size: 14px;
  font-weight: 700;
  color: #36f;
  align-items: center;
`;
const GoText = styled.span`
  line-height: 1;
  color: #36f;
`;
const GoIcon = styled.img`
  color: #36f;
  width: 14px;
  margin: -2px -1px 0 2px;
`;

function Slide({ image, h2, h3, idx, currentIndex, imageX }) {
  const imageRef = useRef();
  let active = false;

  if (currentIndex === idx) {
    active = true;
  }
  useEffect(() => {
    imageRef.current.style.width = `${imageX}px`;
  }, [imageX]);

  return (
    <Wrapper active={active} key={idx}>
      <ImageContainer ref={imageRef}>
        <Image src={image} alt='banner' />
      </ImageContainer>
      <InformationContainer active={active}>
        <H2>{h2}</H2>
        <H3>{h3}</H3>
        <Hr></Hr>
        <GoContainer href='/'>
          <GoText>바로가기</GoText>
          <GoIcon src={Go} alt='Go' />
        </GoContainer>
      </InformationContainer>
    </Wrapper>
  )
}

export default Slide;