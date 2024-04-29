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
import InputSendEmail from '../components/InputSentEmail'
const packageJson = require('../../package.json');

const version = packageJson.version;


export default function TheFooter() {
  return (
    <Box pt="5xl">
      <Image
        display={{ base: 'block', sm: 'none' }}
        w="100px"
        mx="auto"
        mb="xl"
        src="assets/illustration_go-back-top.svg"
      />
      <Image
        display={{ base: 'none', sm: 'block' }}
        mx="auto"
        w="min(880px, 80%)"
        src="assets/illustration-gacha-opened.svg"
      />
      <Flex
        pos="relative"
        wrap={'nowrap'}
        minH={'440px'}
        mt={{ base: '0', sm: '-128px' }}
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
        <VStack mt="5xl">
          <_Menu />
          <InputSendEmail
            display={{ base: 'none', sm: 'block' }}
            mt="2xl"
          />
          <SocialMediaLinks mt="2xl" />
          <HStack
            w={{base: '65%',sm: '100%'}}
            mt="auto"
            color="white"
            pb={{ base: '2xl', sm: 'md' }}
          >
            <Text>Design By：Hsuan Yi</Text>
            <Divider orientation="vertical" />
            <Text>Code By ：Ting Yu Chen</Text>
          </HStack>
          <Text>version {version}</Text>
        </VStack>
      </Flex>
    </Box>
  )
}

function _Menu() {
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
        >
          {item.label}
        </Button>
      ))}
    </Stack>
  )
}
