import { Flex, Box, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import MenuMobile from './MenuMobile'
import Menu from './Menu'
import {useNavigate} from 'react-router-dom'

export default function TheHeader() {
  const navigate = useNavigate() 
  const menus = [
    {label: 'Home', to:'/'},
    {label: 'Works', to:'works'},
    {label: 'Resume', to:'resume'},
    {label: 'Contacts', to:'contacts'},
  ]
  return (
    <Flex
      bg="beige.100"
      py="md"
      px="xxl"
      justify="space-between"
    >
      <Image
        src="/public/assets/logo.svg"
        alt="I am Hsuan"
        cursor={'pointer'}
        onClick={()=> navigate('/')}
      />

      {useBreakpointValue({
        base: <MenuMobile menus={menus} />,
        sm: <Menu menus={menus} />,
      })}
    </Flex>
  )
}
