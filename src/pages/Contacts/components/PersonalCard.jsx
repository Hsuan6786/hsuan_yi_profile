import {
  Card,
  Stack,
  CardBody,
  Box,
  Heading,
  Text,
  HStack,
} from '@chakra-ui/react'
import SocialMediaLinks from '@/components/SocialMediaLinks'
import InputSendEmail from '@/components/InputSentEmail'
import ResumePersonalCard from '@/components/ResumePersonalCard'

export default function PersonalCard() {
  return (
    <ResumePersonalCard w="min(938px,95%)">
      <Box
        pt={{ base: '2xl', sm: 'xl' }}
        textStyle={'h3'}
      >
        Information
      </Box>
      <HStack pt="xl">
        <Text  textStyle='content'>姓名</Text>
        <Text  textStyle='content'>黃宣頤</Text>
      </HStack>
      <HStack>
        <Text  textStyle='content'>Mail</Text>
        <Text  textStyle='content'>hsuan88815@gmail.com</Text>
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
  )
}
