import {
  Card,
  Stack,
  CardBody,
  Image,
  Heading,
  Text,
  HStack,
} from '@chakra-ui/react'
import SocialMediaLinks from '@/components/SocialMediaLinks'
import InputSendEmail from '@/components/InputSentEmail'
import ResumePersonalCard from '@/components/ResumePersonalCard'

export default function PersonalCard() {
  return (
    <ResumePersonalCard>
      <Heading pt={{base: '2xl', sm: 0}} textStyle={'h3'}>Information</Heading>
      <HStack pt="xl">
        <Text>姓名</Text>
        <Text>黃宣頤</Text>
      </HStack>
      <HStack>
        <Text>Mail</Text>
        <Text>hsuan88815@gmail.com</Text>
      </HStack>
      <SocialMediaLinks
        py="xl"
        justifyContent='flex-start'
        socialMedias={['104', 'cakeresume', 'mail']}
      />
      <InputSendEmail
        buttonProps={{
          alignSelf: { base: 'center', sm: 'unset' },
        }}
      />
    </ResumePersonalCard>
  )
}
