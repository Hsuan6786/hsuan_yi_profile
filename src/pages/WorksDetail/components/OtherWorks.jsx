import {
  Image,
  Card,
  CardFooter,
  Box,
  Text,
  Center,
  Flex,
  VStack,
} from '@chakra-ui/react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { skills } from '@/config/data'
import { useRef } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import CustomButton from '@/components/Button'
import {useNavigate} from 'react-router-dom'

export default function SkillCarousel() {
  const navigate = useNavigate() 
  const sliderRef = useRef(null)
  const settings = {
    className: 'slider',
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    variableWidth: true,
    arrows: false,
  }
  const works = [
    {
      year: '2023',
      image: 'project1',
      name: 'JY CHYUN Official Website',
    },
    {
      year: '2023',
      image: 'project2',
      name: 'Y·UN Design Official Website',
    },
    {
      year: '2023',
      image: 'project3',
      name: 'HENGXU',
    },
    {
      year: '2023',
      image: 'project4',
      name: 'ATC Official Website',
    },
    {
      year: '2023',
      image: 'project5',
      name: 'Goodtop Official Website',
    },
    {
      year: '2023',
      image: 'project6',
      name: 'Septemberwine Official Website',
    },
  ]
  return (
    <>
      <Flex
        pt="4xl"
        flexDirection={{ base: 'column', sm: 'row' }}
      >
        <VStack
          justifyContent={'center'}
          minW="min(320px,25%)"
          pb="4xl"
        >
          <Text
            textStyle={'h3'}
            color="secondary"
          >
            Other Works
          </Text>

          <_NavigationArrow sliderRef={sliderRef} />
        </VStack>
        <Slider
          ref={sliderRef}
          style={{
            minHeight: 0,
            minWidth: 0,
            paddingLeft: '16px',
          }}
          {...settings}
          className="slider-same-height"
        >
          {works.map((card, idx) => (
            <_Card
              key={`works-${idx}`}
              work={card}
            />
          ))}
        </Slider>
      </Flex>
      <Box mt="4xl" mb="5xl" textAlign={'center'}>
      <CustomButton
        label="All Works"
        color="accent"
        onClick={() => navigate('/works')}
        borderRadius="100vmax"
      />
      </Box>
    </>
  )
}

function _Card({ work }) {
  return (
    <Box pl={{ base: '0', sm: 'md', lg: 'xl' }}>
      <Card
        pos="relative"
        bg={{ base: 'transparent', sm: 'beige.300' }}
        w="100%"
        h="100%"
        borderRadius={24}
        variant={{ base: 'unstyled', sm: 'elevated' }}
      >
        <Box pos="relative">
          <_Badge />
          <Image
            w="100%"
            h={{ base: '460px', sm: '226px', lg: '413px' }}
            objectFit="cover"
            src={require(`/public/assets/${work.image}.png`)}
            alt={work.name}
            borderTopRadius="24"
            borderBottomRadius={{ base: '24', sm: 0 }}
          />
        </Box>

        <CardFooter
          p="lg"
          flexDir={'column'}
        >
          <Text
            textStyle={{ base: 'body1', sm: 'body2' }}
            color="dark-green"
          >
            {work.year}
          </Text>
          <Text
            textStyle={'content'}
            color="secondary"
          >
            {work.name}
          </Text>
        </CardFooter>
      </Card>
    </Box>
  )
}

function _Badge() {
  return (
    <Flex
      pos="absolute"
      top={{ base: 'calc(100% - 88px - 16px)', sm: '20px' }}
      left={{ base: 'calc(100% - 88px - 16px)', sm: `-${'xl'}` }}
      flexDir={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      w="88px"
      h="88px"
      bg="accent"
      borderRadius={'100vmax'}
    >
      <Text
        textStyle={'content'}
        color="white"
      >
        UI/UX
      </Text>
      <Text
        textStyle="body2"
        color="white"
      >
        Design
      </Text>
    </Flex>
  )
}

function _NavigationArrow(props) {
  const { sliderRef } = props
  return (
    <Flex alignItems={'center'}>
      <Center
        mr="sm"
        w="40px"
        h="40px"
        borderRadius="100vmax"
        bg="secondary"
        color="white"
        onClick={() => sliderRef?.current?.slickPrev()}
      >
        <IoIosArrowBack />
      </Center>

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
