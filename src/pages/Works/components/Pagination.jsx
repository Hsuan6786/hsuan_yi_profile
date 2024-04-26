import { Box, HStack,Text } from '@chakra-ui/react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

export default function Pagination() {
  return (
    <HStack justifyContent={{base: 'space-between', sm: 'center'}}>
      <BsArrowLeft />
      <Box
        w="40px"
        h="40px"
        mx='90px'
        lineHeight={'40px'}
        bg="black"
        color="white"
        borderRadius={'100vmax'}
        textAlign={'center'}
        textStyle={'body1'}
      >
        1
      </Box>
      <BsArrowRight />
    </HStack>
  )
}
