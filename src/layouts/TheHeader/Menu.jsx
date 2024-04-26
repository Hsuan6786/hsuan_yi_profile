import { Flex, Box, Image, Text } from '@chakra-ui/react'
import SocialMediaLinks from '@/components/SocialMediaLinks'
import {useNavigate} from 'react-router-dom'

export default function Menu({ menus }) {  
  return (
    <Flex gridGap="xs">
      {menus.map((menu,idx) => (
        <_MenuItem key={`menu-${idx}`} menu={menu} />
      ))}

      <SocialMediaLinks
        ml="xl"
        socialMedias={['104', 'cakeresume', 'mail']}
        size="24px"
      />
    </Flex>
  )
}

function _MenuItem({ menu }) {
  const  navigate = useNavigate() 

  return (
    <Box
      display="flex"
      alignItems="center"
      role="group"
      cursor={'pointer'}
      onClick={(()=> navigate(menu.to))}
    >
      <Box
        w="16px"
        h="16px"
        pr="xxs"
      >
        <Image
          boxSize={0}
          _groupHover={{ width: 'unset !important', height: 'unset' }}
          src="assets/star.svg"
        />
      </Box>
      <Text>{menu.label}</Text>
    </Box>
  )
}
