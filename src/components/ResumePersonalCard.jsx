import {
  Card,
  Stack,
  CardBody,
  Image,
  Heading,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function PersonalCard({ children, imageWidth,...rest }) {
  return (
    <Card
      mt="4xl"
      mx="auto"
      px={{ base: 'lg', sm: '3xl' }}
      py="2xl"
      borderRadius={'md'}
      direction={{ base: 'column', sm: 'row' }}
      justifyContent='center'
      bg="white"
      _before={useBreakpointValue({
        base: { content: `""` },
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
        },
      })}
      {...rest}
    >
      <Image
        objectFit="contain"
        w={imageWidth}
        src="assets/hsuan-avatar.svg"
        alt="hsuan"
      />

      <Stack
        gap="0"
      >
        <CardBody p={{ base: 0, sm: 'lg' }}>{children}</CardBody>
      </Stack>
    </Card>
  )
}
