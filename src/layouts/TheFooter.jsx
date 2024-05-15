import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  VStack,
  Stack,
  Divider,
  useBreakpointValue,
  HStack,
} from '@chakra-ui/react'

import SocialMediaLinks from '../components/SocialMediaLinks'
import InputSentEmail from '../components/InputSentEmail'
import {useNavigate} from 'react-router-dom'
import ButtonBackTop from '@/components/ButtonBackTop'
const packageJson = require('../../package.json')

const version = packageJson.version

export default function TheFooter() {
  return (
    <Box pt="5xl">
      
      <ButtonBackTop/>
      <Image
        display={{ base: 'none', sm: 'block' }}
        mx="auto"
        w="min(880px, 80%)"
        src="assets/illustration-gacha-opened.svg"
      />
      <VStack
        pos="relative"
        wrap={'nowrap'}
        minH={'440px'}
        mt={{ base: 'lg', sm: '-128px' }}
        justifyContent={'center'}
        zIndex={1}
      >
        <Image
          zIndex={-1}
          pos="absolute"
          w="100%"
          h="100%"
          src={useBreakpointValue({
            base: 'assets/bg-footer-mobile.png',
            sm: 'assets/bg-footer.png',
          })}
        />
        <VStack mt={{base: '4xl', sm: 'auto'}} spacing="2xl" >
          <_Menu />
          <InputSentEmail
            display={{ base: 'none', sm: 'block' }}
            px="2xl"
          />
          <SocialMediaLinks />
          <Box
          textAlign={'center'}
          pb={{ base: '2xl', sm: 'md' }}
        >
          <HStack
            w={{ base: '65%', sm: '100%' }}
            color="white"
            mx={'auto'}
          >
            <Text>Design By：Hsuan Yi</Text>
            <Divider orientation="vertical" />
            <Text>Code By ：Ting Yu Chen</Text>
          </HStack>
          <Text color="#919191">version {version}</Text>
        </Box>
        </VStack>
       
      </VStack>
    </Box>
  )
}

function _Menu() {
  const navigate = useNavigate() 
  const menu = [
    {
      label: 'Home',
      to: '/',
    },
    {
      label: 'Works',
      to: 'works',
    },
    {
      label: 'Resume',
      to: 'resume',
    },
    {
      label: 'Contacts',
      to: 'contacts',
    },
  ]
  function navigateTo (item) {
    navigate(item.to)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Stack direction={{ base: 'column', sm: 'row' }}>
      <Image
        src="assets/logo-light.svg"
        mr="xl"
      />
      {menu.map((item, idx) => (
        <Button
          key={`foot-menu-${idx}`}
          color="white"
          variant="link"
          px="md"
          mr="xs"
          onClick={()=> navigateTo(item)}
        >
          {item.label}
        </Button>
      ))}
    </Stack>
  )
}
