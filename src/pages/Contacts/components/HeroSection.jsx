import {
  Text,
} from '@chakra-ui/react'
import Hero from '@/components/Hero'

export default function HeroSection() {
  return (
    <Hero
      title="Contacts"
      svgImage="illustration_contact_in_egg"
    >
      <Text
        pt="xl"
        textStyle={'content'}
      >
        UI / UX 相關工作機會積極尋找中。
        <br />
        如有任何工作相關、合作諮詢的需求
        <br />
        歡迎來信與我聯絡！
      </Text>
    </Hero>
  )
}
