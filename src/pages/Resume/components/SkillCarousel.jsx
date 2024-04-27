import {
  Image,
  Card,
  CardBody,
  Stack,
  Heading,
  CardFooter,
  Divider,
  Box,
  Text,
  Center,
  Flex,
  List,
  ListItem,
  ListIcon,
  VStack,
} from '@chakra-ui/react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { skills } from '@/config/data'
import { useRef } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import SvgIcon from '@/components/SvgIcon'

export default function SkillCarousel() {
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

  return (
    <Flex pt="4xl" flexDirection={{base: 'column', sm: 'row'}}>
      <VStack
        justifyContent={'center'}
        minW="min(320px,25%)"
        pb='4xl'
      >
        <Heading>Skills</Heading>
        <Text>技能</Text>
        <_NavigationArrow sliderRef={sliderRef} />
      </VStack>
      <Slider
        ref={sliderRef}
        style={{
          minHeight: 0,
          minWidth: 0,
          paddingLeft: '16px'
        }}
        {...settings}
        className="slider-same-height"
      >
        {skills.map((card, idx) => (
          <_Card
            key={`skill-${idx}`}
            card={card}
          ></_Card>
        ))}
      </Slider>
    </Flex>
  )
}

function _Card({ card }) {
  return (
    <Card
      w={{base: '75vw', sm: '55vw', md: '45vw', lg: 'min(336px, 25vw)'}}
      h="100%"
      px="xl"
      py="2xl"
    >
      <CardBody>
        <Heading
          pb="md"
          textStyle="h4"
        >
          {card.title}
        </Heading>
        <List spacing={3}>
          {card.skills.map((s,index) => (
            <ListItem
              key={`skill-${index}`}
              color="accent"
              display={'flex'}
            >
              <SvgIcon name="star" />
              <Text
                pl="xs"
                color="dark-green"
              >
                {s}
              </Text>
            </ListItem>
          ))}
        </List>
      </CardBody>
      <Divider />
      <CardFooter></CardFooter>
    </Card>
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