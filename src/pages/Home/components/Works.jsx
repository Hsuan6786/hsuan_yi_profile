import { Image, Box, Container, Center, Text } from '@chakra-ui/react'
import Button from '@/components/Button'
import Carousel from './Carousel'

export default function Works() {
  return (
    <Box pos="relative">
      <Image
        pos="absolute"
        top="10%"
        left="10%"
        zIndex="-1"
				display={{base: 'none', lg:'block'}}
        src="assets/laptop.svg"
      />

      <Center
        pb="5xl"
        flex={1}
        textAlign={'center'}
        justifyItems={'center'}
        alignItems={'center'}
      >
        <Container maxW={'360px'}>
          <Box
            textStyle="h1"
            textColor={'secondary'}
          >
            Works
          </Box>
          <Text fontSize={'xl'}>作品</Text>
          <Text
            mt={'xs'}
            textStyle={'content'}
            textColor={'dark-green'}
          >
            將創意轉化為實用的設計解決方案，熟練掌握各種設計工具和技術，創建原型以及與團隊合作推動產品開發，過程中不斷追求學習和成長，保持對行業趨勢的敏感性。
          </Text>
          <Button
            mt="xl"
            label="View More"
            color="accent"
            rounded={true}
          />
        </Container>
      </Center>

      <Image
        pos="absolute"
        top="5%"
        right="0"
        zIndex="-1"
				h={{base: '227px', sm: '500px'}}
        src="assets/semicircle.svg"
      />

      <Carousel />
    </Box>
  )
}
