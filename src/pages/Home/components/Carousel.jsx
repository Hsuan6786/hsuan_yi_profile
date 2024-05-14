import {
  Image,
  Box,
  Text,
  useBreakpointValue,
  Center,
  Flex,
} from '@chakra-ui/react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import { useMediaQuery } from '@chakra-ui/react'

export default function Carousel() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const movies = [
    {
      name: 'coco',
      url: require('/public/assets/work1.png'),
    },
    {
      name: 'coco',
      url: require('/public/assets/work2.png'),
    },
    {
      name: 'coco',
      url: require('/public/assets/work3.png'),
    },
    {
      name: 'coco',
      url: require('/public/assets/work4.png'),
    },
    {
      name: 'coco',
      url: require('/public/assets/work5.png'),
    },
  ]
  const sliderRef = useRef(null)
  const settings = {
    className: 'slider',
    dots: false,
    infinite: movies.length > 3,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '60px',
        },
      },
    ],
  }
  const [framePhoneSize, setFramePhoneSize] = useState({
    width: 0,
    left: 0,
    height: 0,
  })
  // const [isLtThan576] = useMediaQuery('(min-width: 576)')
  const offsetIdx = useBreakpointValue({
    base: 0,
    sm: 1,
  })
  useEffect(() => {
    const slideElement = sliderRef?.current?.innerSlider.list.querySelector(
      `[data-index="${currentIdx + offsetIdx}"]`
    )

    if (!slideElement) return

    const resizeObserver = new ResizeObserver((entries) => {
      if (!Array.isArray(entries) || !entries.length) {
        return
      }
      for (let entry of entries) {
        const elementRect = entry.contentRect
        setFramePhoneSize({
          width: elementRect.width - 12,
          height: elementRect.height,
          left: entry.target.getBoundingClientRect().left + 6,
        })
      }
    })
    resizeObserver.observe(slideElement)
    //一定要卸载，不卸载这个，组件销毁后会一直找这个dom元素，会假死也不报错！
    return () => {
      resizeObserver.unobserve(slideElement)
    }
  }, [offsetIdx])
  return (
    <Box
      mt="3xl"
      pos="relative"
    >
      <PhoneFrameNavigation
        size={framePhoneSize}
        sliderRef={sliderRef}
        currentIdx={currentIdx}
        total={movies.length}
      />
      <Slider
        ref={sliderRef}
        className="slider"
        {...settings}
        afterChange={(newIdx) => setCurrentIdx(newIdx)}
      >
        {movies.map((movie, idx) => (
         
            <Image
              style={{display:'block'}}
              key={`slide-${idx}`}
              w="100%"
              h="100%"
              src={movie.url}
            />
        ))}
      </Slider>
    </Box>
  )
}

function PhoneFrameNavigation({ size, currentIdx, sliderRef, total }) {
  const frameHeight = 80
  return (
    <Flex
      pos="absolute"
      w={`${size.width}px`}
      h={`${size.height}px`}
      top={`0`}
      justifyContent={'center'}
      alignItems={'center'}
      left={`${size.left}px`}
      zIndex={1}
    >
      <Image
        pos="absolute"
        top="-45px"
        right="0"
        w="calc(100% - 3px)"
        h={`45px`}
        src={require('/public/assets/phone-top.png')}
      />
      <Image
        w="100%"
        h="100%"
        src={require('/public/assets/phone-middle.png')}
      />
      <Image
        pos="absolute"
        bottom={`-${frameHeight}px`}
        right="0"
        w="calc(100% - 3px)"
        h={`${frameHeight}px`}
        src={require('/public/assets/phone-bottom.png')}
      />
      <BottomArrow
        total={total}
        current={currentIdx}
        sliderRef={sliderRef}
        offset={frameHeight}
      />
    </Flex>
  )
}

function BottomArrow(props) {
  const { sliderRef, total, current, offset } = props
  return (
    <Flex
      style={{
        transform: 'translateX(-50%)',
      }}
      alignItems={'center'}
      pos="absolute"
      left={'50%'}
      bottom={{
        base: `-${offset + 16}px`,
        md: `-${offset / 2  + 20}px`,
      }}
      zIndex={1}
    >
      <Center
        ml="sm"
        w="40px"
        h="40px"
        borderRadius="100vmax"
        bg="secondary"
        color="white"
        onClick={() => sliderRef?.current?.slickPrev()}
      >
        <IoIosArrowBack />
      </Center>

      <Text
        mx="xs"
        textStyle={'body1'}
        style={{
          textWrap: 'nowrap',
        }}
      >
        {current + 1} / {total}
      </Text>
      <Center
        mr="sm"
        w="40px"
        h="40px"
        borderRadius="100vmax"
        bg="secondary"
        color="white"
        onClick={() => sliderRef?.current?.slickNext()}
      >
        <IoIosArrowForward />
      </Center>
    </Flex>
  )
}
