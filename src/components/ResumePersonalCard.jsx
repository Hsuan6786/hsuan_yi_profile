import {
  Card,
  Stack,
  CardBody,
  Image,
  Heading,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function PersonalCard({children}) {
  return (
    <Card
      w="min(938px,90%)"
      mt="4xl"
      mx="auto"
      px={{base: 'lg', sm: '3xl'}}
      py="2xl"
      borderRadius={'md'}
      direction={{ base: 'column', sm: 'row' }}
      bg="white"
      _before={useBreakpointValue({
        base: {content: `""`},
        sm: {
          content: `""`,
          zIndex: -1,
          position: 'absolute',
          borderRadius: 'md',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          bg: 'beige.300',
          transform: 'rotate(-4.57deg)',
        }
      })}
    >
      <Image
        objectFit="contain"
        maxW={{ base: '100%', sm: '267px' }}
        src="assets/hsuan-avatar.svg"
        alt="hsuan"
      />

      <Stack
        flex="1"
        gap="0"
      >
        <CardBody p={{base: 0, sm: 'lg'}}>
          {children}
          {/* <Heading textStyle={'h3'}>Information</Heading>
          <HStack>
            <Text>姓名</Text>
            <Text>黃宣頤</Text>
          </HStack>
          <HStack>
            <Text>Mail</Text>
            <Text>hsuan88815@gmail.com</Text>
          </HStack>
          <SocialMediaLinks
            py="md"
            socialMedias={['104', 'cakeresume', 'mail']}
          />
          <InputSendEmail /> */}
        </CardBody>
      </Stack>
    </Card>
  )
}
