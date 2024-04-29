import { Image, Box, Container, Center, Text, Stack } from '@chakra-ui/react'
import GachaAnimation from './GachaAnimation'
import Button from '@/components/Button'

export default function Hero() {
  return (
    <Box pos="relative"  pb="5xl">
      <Image
        pos="absolute"
        top="0"
        zIndex="-1"
        src="assets/curve.svg"
      />
      <Stack direction={['column', 'row']}>
        <Center
          flex={1}
          justifyItems={'center'}
          alignItems={'center'}
        >
          <Container maxW={'300px'}>
            <Text fontSize={'xl'}>I’m</Text>
            <Box
              textStyle="h1"
              textColor={'secondary'}
              lineHeight={.8}
              pb="xl"
            >
              Hsuan!
            </Box>
            <Text
              mt={'xs'}
              textStyle={'content'}
              textColor={'dark-green'}
            >
              1996年生，台灣桃園人，兩年的UI/UX設計實務經驗，擅長以使用者為出發點進行思考，能獨立從需求探討、規劃流程、客戶溝通、程式溝通設計草稿到最後精稿規格的產出，並具備設計互動性介面的能力。
            </Text>
            <Button
              mt="xl"
              label="Resume"
              color="accent"
              variant="outline"
              rounded={true}
            />
          </Container>
        </Center>
      
          <GachaAnimation />
     
      </Stack>
    </Box>
  )
}
