
import {
  Center,
  Flex,
} from '@chakra-ui/react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'


export default function CarouselNavigation(props) {
  const { sliderRef, children, ...rest } = props
  return (
    <Flex {...rest} alignItems={'center'}>
      <Center
        mr="sm"
        w="40px"
        h="40px"
        borderRadius="100vmax"
        bg="secondary"
        color="white"
        onClick={() => sliderRef?.current?.slickPrev()}
        cursor={'pointer'}
        _hover={{bg: 'beige.400'}}
      >
        <IoIosArrowBack />
      </Center>
      { children }
      <Center
        mr="sm"
        w="40px"
        h="40px"
        borderRadius="100vmax"
        bg="secondary"
        color="white"
        onClick={() => sliderRef?.current?.slickNext()}
        cursor={'pointer'}
        _hover={{bg: 'beige.400'}}
      >
        <IoIosArrowForward />
      </Center>
    </Flex>
  )
}