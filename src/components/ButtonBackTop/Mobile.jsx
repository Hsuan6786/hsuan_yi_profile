import { Box, Image } from '@chakra-ui/react'

export default function ButtonBackTopMobile() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <Image
      onClick={() => scrollToTop()}
      mx="auto"
      src="assets/back-to-top_mobile.svg"
    />
  )
}
