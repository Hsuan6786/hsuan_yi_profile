import { Image, Box, Text, useBreakpointValue, Center, Flex } from '@chakra-ui/react'
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
      url: require('/public/assets/work1.png'),
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
					centerPadding: "60px",
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
	  const offsetIdx = useBreakpointValue(
    {
      base: 0,
      sm: 1,
    },
  )
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
          width: elementRect.width,
          height: elementRect.height,
          left: entry.target.getBoundingClientRect().left,
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
          <Box key={`slide-${idx}`}>
            <Image
              w="100%"
              h="100%"
              src={movie.url}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

function PhoneFrameNavigation({ size, currentIdx, sliderRef, total }) {
  return (
    <Flex
      pos="absolute"
      w={`${size.width}px`}
      h={{
        base: `${size.height + 135}px`,
        md: `${size.height + 120}px`,
        xl: `${size.height + 130}px`,
      }}
      top={`-50px`}
      justifyContent={'center'}
      alignItems={'center'}
      left={`${size.left}px`}
      zIndex={1}
    >
      <Image
        w="100%"
        h="100%"
        src="assets/base-phone.png"
      />
      <BottomArrow
        total={total}
        current={currentIdx}
        sliderRef={sliderRef}
      />
    </Flex>
  )
}

function BottomArrow(props) {
  const { sliderRef, total, current } = props
  return (
    <Flex
      style={{
        transform: 'translateX(-50%)',
      }}
      alignItems={'center'}
      pos="absolute"
      left={'50%'}
      bottom={{
        base: `-50px`,
        md: `30px`,
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
