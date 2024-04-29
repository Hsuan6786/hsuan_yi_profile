import { Box, Image, Text, VStack } from '@chakra-ui/react'
import TitleSection from '@/components/TitleSection'
import SocialMediaLinks from '@/components/SocialMediaLinks'

export default function Contacts() {
  return (
    <VStack
      pos="relative"
      pt="auto"
    >
      <Image
        pos="absolute"
        display={{ base: 'none', sm: 'block' } }
        w="min(358px, 20vw)"
        left="0"
        top="35%"
        src="assets/illustration_random-arrow.svg"
      />
      <Image
        pos="absolute"
        display={{ base: 'none', sm: 'block' } }
        w="min(196px, 25vw)"
        right="5%"
        top="40%"
        src="assets/illustration_paper-airplane.svg"
      />

      <TitleSection
        heading={'Contacts'}
        title={'聯絡資訊'}
        viewBtn={false}
      >
        <Box
          slot="after"
          mt="xl"
          borderRadius={'50%'}
          bg="beige.300"
          py="3xl"
          px="4xl"
          textAlign={'center'}
        >
          <Text textStyle={'content'}>
            如有任何工作相關、合作諮詢的需求
            <br />
            歡迎來信與我聯絡！
          </Text>
          <SocialMediaLinks mt="xl" />
        </Box>
      </TitleSection>
    </VStack>
  )
}
