import { Image, Box, Container, Center, Text } from '@chakra-ui/react'
import Carousel from './Carousel'
import TitleSection from '@/components/TitleSection'

export default function Works() {
  return (
    <Box pos="relative" pb="5xl">
      <Image
        pos="absolute"
        top="10%"
        left="10%"
        zIndex="-1"
        width="268px"
        display={{ base: 'none', lg: 'block' }}
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
          <TitleSection
            heading={'Works'}
            title={'作品'}
            mb="xl"
            content="將創意轉化為實用的設計解決方案，熟練掌握各種設計工具和技術，創建原型以及與團隊合作推動產品開發，過程中不斷追求學習和成長，保持對行業趨勢的敏感性。"
            viewBtn={true}
            viewBtnLink={'/works'}
          />
        </Container>
      </Center>

      <Image
        pos="absolute"
        top="5%"
        right="0"
        zIndex="-1"
        h={{ base: '227px', sm: '500px' }}
        src='assets/semicircle.svg'
      />

      <Carousel />
    </Box>
  )
}
