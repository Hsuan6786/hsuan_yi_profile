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
import { useNavigate } from 'react-router-dom'
import SvgIcon from '@/components/SvgIcon'
import { works } from '@/config/data-works.js'
import CarouselNavigation from '@/components/CarouselNavigation'

const profileWorks = JSON.parse(
  JSON.stringify(works.slice(0, works.length - 1))
)

export default function Carousel() {
  const navigate = useNavigate()
  const [currentIdx, setCurrentIdx] = useState(0)

  const sliderRef = useRef(null)
  const settings = {
    className: 'slider',
    dots: false,
    infinite: profileWorks.length > 3,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
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
        total={profileWorks.length}
      />
      <Slider
        ref={sliderRef}
        className="slider"
        {...settings}
        afterChange={(newIdx) => setCurrentIdx(newIdx)}
      >
        {profileWorks.map((work, idx) => (
          <Box
            key={`works-${idx}`}
            pos="relative"
            w="100%"
            h="100%"
            cursor={'pointer'}
            onClick={() => navigate(`/works/${work.id}`)}
            role="group"
          >
            <HoverLayout />
            {work.carouselPath && (
              <Image
                style={{ display: 'block' }}
                key={`slide-${idx}`}
                w="100%"
                h="100%"
                src={work.carouselPath}
              />
            )}
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

function PhoneFrameNavigation({ size, currentIdx, sliderRef, total }) {
  const navigate = useNavigate()
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
      cursor={'pointer'}
      role="group"
    >
      <HoverLayout
        w="90%"
        onClick={() =>
          navigate(`/works/${(profileWorks[currentIdx + 1] || {}).id}`)
        }
      />
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
    <CarouselNavigation
      style={{
        transform: 'translateX(-50%)',
      }}
      pos="absolute"
      left={'50%'}
      bottom={{
        base: `-${offset - 20}px`,
        md: `-${offset / 2 + 20}px`,
      }}
      zIndex={1}
      sliderRef={sliderRef}
    >
      <Text
        mr="sm"
        textStyle={'body1'}
        style={{
          textWrap: 'nowrap',
        }}
      >
        {current + 1} / {total}
      </Text>
    </CarouselNavigation>
  )
}

function _BottomArrow(props) {
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
        base: `-${offset - 20}px`,
        md: `-${offset / 2 + 20}px`,
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
        cursor={'pointer'}
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
        cursor={'pointer'}
        onClick={() => sliderRef?.current?.slickNext()}
      >
        <IoIosArrowForward />
      </Center>
    </Flex>
  )
}

function HoverLayout(props) {
  return (
    <Box
      zIndex={'1'}
      pos="absolute"
      display={'none'}
      w="100%"
      h="100%"
      bg="rgba(0, 0, 0, 0.4)"
      _groupHover={{ display: 'block' }}
      {...props}
    >
      <Box
        pos="absolute"
        left="50%"
        top="50%"
        transform={'translate(-50%, -50% )'}
        zIndex={'1'}
        as="button"
        py="sm"
        px="xl"
        textStyle={'body1'}
        bg="accent"
        color="white"
        borderRadius="100vmax"
      >
        Visit
        <br />
        More
        <br />
        <SvgIcon name="arrow_open" />
      </Box>
    </Box>
  )
}
