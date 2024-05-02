import ButtonBackTopMobile from './Mobile'
import ButtonBackTopDesktop from './Desktop'
import { useBreakpointValue } from '@chakra-ui/react'

export default function ButtonBackTop() {
  return (
    <>
      {useBreakpointValue({
        base: <ButtonBackTopMobile />,
        sm: <ButtonBackTopDesktop />,
      })}
    </>
  )
}
