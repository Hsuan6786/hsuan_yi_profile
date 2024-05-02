import {
  Card,
  Stack,
  CardBody,
  Box,
  Image,
  Text,
  HStack,
} from '@chakra-ui/react'
import SocialMediaLinks from '@/components/SocialMediaLinks'
import InputSendEmail from '@/components/InputSentEmail'
import ResumePersonalCard from '@/components/ResumePersonalCard'

export default function PersonalCard() {
  return (
    <Box>
      <Image
        display={{ base: 'none', sm: 'block' }}
        pos="absolute"
        right="0"
        zIndex={1}
        w={'min(310px, 20vw)'}
        src="assets/illustration_resume_paper-airplane.png"
      />
      <ResumePersonalCard w="min(938px,95%)">
        <Box
          pt={{ base: '2xl', sm: 'xl' }}
          textStyle={'h3'}
        >
          Information
        </Box>
        <HStack pt="xl">
          <Text textStyle="content">姓名</Text>
          <Text textStyle="content">黃宣頤</Text>
        </HStack>
        <HStack>
          <Text textStyle="content">Mail</Text>
          <Text textStyle="content">hsuan88815@gmail.com</Text>
        </HStack>
        <SocialMediaLinks
          py="xl"
          justifyContent="flex-start"
          socialMedias={['104', 'cakeresume', 'mail']}
        />
        <InputSendEmail
          btnattr={{
            alignSelf: { base: 'center', sm: 'unset' },
          }}
          mb={{ base: '0', sm: 'xl' }}
        />
      </ResumePersonalCard>
    </Box>
  )
}
