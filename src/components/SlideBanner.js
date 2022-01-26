import React, { useEffect, useRef, useState } from 'react';
import Slide from './Slide'
import styled from 'styled-components';
import { data } from './BannerData';
import nextBtn from '../assets/right.svg';
import prevBtn from '../assets/left.svg';

const Wrapper = styled.div``;
const SlierContainer = styled.div`
  padding-top: 75px;
  position: relative;
  width: 100vw;
  overflow: hidden;
  @media ${({ theme }) => theme.device.sm} {
    padding-top: 135px;
  }
`;
const SlierImages = styled.div`
  display: flex;
  width: 100%;
`;
const StyledButton = styled.button`
  width: 30px;
  height: 60px;
  position: fixed;
  border-radius: 15px;
  background-color: #fff;
  opacity: 0.5;
  z-index: 5;
  top: 195px;
`;
const PrevBtn = styled(StyledButton)`
  left: calc((100% - 1210px) / 2);
`;
const NextBtn = styled(StyledButton)`
  right: calc((100% - 1200px) / 2);
`;
const ButtonImg = styled.img`
  width: 16px;
`;

function SlideBanner() {
  const sliderRef = useRef();
  const imageCount = data.length;

  const [winX, setWinX] = useState(window.innerWidth);
  const [currentIndex, setCurrentIndex] = useState(2);
  const [imageX, setImageX] = useState(1060);
  const [isChange, setIsChange] = useState(true);

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragX, setDragX] = useState(0);


  const calcPosition = (idx) => {
    if (winX > 1200) {
      return -14092 + 1084 * (imageCount - idx + 1) + (winX - 1088) / 2;
    } else {
      return (
        -(imageX * imageCount + 24 * imageCount) +
        (imageX + 24) * (imageCount - idx + 1) + 36
      );
    }
  };

  const onClickPrevBtn = () => {
    setIsChange(true);
    setDragX(0);
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === 1) {
      setTimeout(() => {
        sliderRef.current.style.transition = `all 0s`;
        sliderRef.current.style.transform = `translateX(${calcPosition(9)}px)`;
        setIsChange(false);
        setCurrentIndex(9);
      }, 501);
    }
  };

  const onClickNextBtn = () => {
    setIsChange(true);
    setDragX(0);
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === 11) {
      setTimeout(() => {
        sliderRef.current.style.transition = `all 0s`;
        sliderRef.current.style.transform = `translateX(${calcPosition(3)}px)`;
        setIsChange(false);
        setCurrentIndex(3);
      }, 501);
    }
  };

  const resizeWindow = () => {
    setWinX(window.innerWidth);
  }

  const onMouseDownImg = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
  }

  const onMouseUpImg = () => {
    setIsMouseDown(false);

    if (dragX > 0) {
      onClickNextBtn();
    } else if (dragX < 0) {
      onClickPrevBtn();
    }
  }

  const onMouseOverImg = () => {
    setIsMouseOver(true);
  }

  const onMouseLeaveImg = () => {
    setIsMouseDown(false);
    setIsMouseOver(false);

    if (dragX > 0) {
      onClickNextBtn();
    } else if (dragX < 0) {
      onClickPrevBtn();
    }
  }

  const onMouseMoveImg = (e) => {
    if (!isMouseDown) {
      return;
    }

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * -1;
    sliderRef.current.style.transform = `translateX(${(calcPosition(currentIndex)) - walk}px)`;
    sliderRef.current.style.transition = `all 0s ease-in-out`;

    if (Math.abs(walk) >= imageX * 0.2) {
      setDragX(walk);
    } else {
      setDragX(0);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", resizeWindow);
    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, []);

  useEffect(() => {
    if (isChange) {
      sliderRef.current.style.transform = `translateX(${calcPosition(currentIndex)}px)`;
      sliderRef.current.style.transition = `all 0.5s ease-in-out`;
    }
    const intervalId = setInterval(() => {
      if (!sliderRef.current || isMouseOver) {
        return;
      }
      setIsChange(true);
      setCurrentIndex(currentIndex + 1);
      if (currentIndex === 11) {
        setTimeout(() => {
          setIsChange(false);
          setCurrentIndex(3);
          sliderRef.current.style.transition = `all 0s`;
          sliderRef.current.style.transform = `translateX(${calcPosition(3)}px)`;
        }, 501);
      }
    }, 4000);
    return () => clearTimeout(intervalId);
  }, [currentIndex, winX, imageX, isChange, isMouseOver, isMouseDown]);

  useEffect(() => {
    if (winX < 1200) {
      setImageX(winX - 96);
    } else {
      setImageX(1060);
    }
  }, [winX]);

  return (
    <Wrapper>
      <SlierContainer>
        <SlierImages
          ref={sliderRef}
          onMouseDown={onMouseDownImg}
          onMouseUp={onMouseUpImg}
          onMouseMove={onMouseMoveImg}
          onMouseOver={onMouseOverImg}
          onMouseLeave={onMouseLeaveImg}
        >
          {data.map((item) => {
            return (
              <Slide
                image={item.url}
                h2={item.h2}
                h3={item.h3}
                idx={item.id}
                key={item.id}
                currentIndex={currentIndex}
                imageX={imageX}
              />
            );
          })}
        </SlierImages>
      </SlierContainer>
      <PrevBtn onClick={onClickPrevBtn}>
        <ButtonImg src={prevBtn} alt='prev' />
      </PrevBtn>
      <NextBtn onClick={onClickNextBtn}>
        <ButtonImg src={nextBtn} alt='next' />
      </NextBtn>
    </Wrapper>
  )
}

export default SlideBanner;