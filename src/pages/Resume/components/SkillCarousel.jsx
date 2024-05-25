import {
  Image,
  Card,
  CardBody,
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
import CarouselNavigation from '@/components/CarouselNavigation'

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
    autoplay: true,
  }

  return (
    <Flex
      className='skills'
      pt="4xl"
      flexDirection={{ base: 'column', sm: 'row' }}
    >
      <VStack
        justifyContent={'center'}
        minW="min(320px,25%)"
        pb="4xl"
      >
        <Text textStyle={'h2'}>Skills</Text>
        <Text
          mb="xl"
          color="beige.400"
          textStyle={'content'}
        >
          技能
        </Text>
        <CarouselNavigation sliderRef={sliderRef} />
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
        {skills.map((card, idx) => (
          <_Card
            key={`skill-${idx}`}
            card={card}
          />
        ))}
      </Slider>
    </Flex>
  )
}

function _Card({ card }) {
  return (
    <Card
      pos="relative"
      w={{ base: '80vw', sm: '60vw', md: '45vw', lg: 'min(336px, 25vw)' }}
      h="100%"
      px="xl"
      py="2xl"
      mx={{ base: 'lg', sm: 'xl' }}
      role="group"
    >
      <Box
        zIndex={-1}
        bg="beige.300"
        top="0"
        left="0"
        transform="0"
        pos="absolute"
        w="100%"
        h="100%"
        borderRadius="16px"
        transition={'transform .1s ease-in'}
        _groupHover={{ top: '-2px', transform: 'rotate(6deg)' }}
      />
      <CardBody p="0">
        <Text
          pb="md"
          textStyle="h4"
        >
          {card.title}
        </Text>
        <List spacing={3}>
          {card.skills.map((s, index) => (
            <ListItem
              key={`skill-${index}`}
              color="accent"
              display={'flex'}
            >
              <SvgIcon name="star" />
              <Text
                pl="xs"
                textStyle={'body1'}
                color="dark-green"
              >
                {s}
              </Text>
            </ListItem>
          ))}
        </List>
      </CardBody>
      <Divider
        my="2xl"
        borderBottomWidth="2px"
        color="beige.300"
      />

      <CardFooter p="0">
        <Text
          mr="md"
          textStyle={'content'}
          color="beige.400"
          opacity={(card.tools || []).length ? 1 : 0}
        >
          Tools
        </Text>
        {card.tools?.map((tool, idx) => (
          <Image
            mr="xs"
            w="24px"
            key={`tool-${idx}`}
            src={`assets/icon-${tool}.svg`}
          />
        ))}
      </CardFooter>
    </Card>
  )
}
