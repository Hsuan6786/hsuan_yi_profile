import {
  Box,
  Badge,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import InputOpenLink from './InputOpenLink'
export default function Hero() {
  const badges = ['形象網站設計', '2023', 'UI / UX Design', 'RWD']
  return (
    <Stack
      mx="auto"
      pt="2xl"
      w={{ base: '100%', sm: 'min(938px, 83.33%)' }}
      flexDir={{ base: 'column', sm: 'row' }}
      spacing={'lg'}
    >
      <VStack
        flex={1}
        spacing={'md'}
        alignItems={'flex-start'}
        justifyContent={'flex-start'}
      >
        <Text
          textStyle="body1"
          color="accent"
        >
          UI / UX Design Project
        </Text>
        <Text fontSize="48px">JY CHYUN Official Website</Text>
        <HStack>
          {badges.map((badge) => (
            <Badge
              pa="sm"
              borderRadius={'90'}
              color="dark-green"
              bg="beige.300"
            >
              {badge}
            </Badge>
          ))}
        </HStack>
        <InputOpenLink link="https://www.jychyun.com.tw/" />
      </VStack>
      <Box flex="1">
        <Image src={require('/public/assets/works-JY_CHYUN.png')} />
      </Box>
    </Stack>
  )
}
