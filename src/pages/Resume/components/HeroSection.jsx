import {
  Image,
  Box,
  Container,
  Breadcrumb,
  Text,
  VStack,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import Button from '@/components/Button'
import  Hero  from '@/components/Hero'

export default function HeroSection() {
  return (
    <Hero
      title="Resume"
      svgImage="illustration-gacha_cat"
    >
      <Text
        pt="xl"
        textStyle={'content'}
      >
        擁有超過30個專案設計經驗，將創意轉化為實用的設計解決方案。熟練掌握各種設計工具和技術，並持續提升自我，保持對行業趨勢的敏感性。
      </Text>
      <Button
        mt="xl"
        label="Download Resume"
        color="accent"
        variant="outline"
        rightIcon={true}
        rounded={true}
      />
    </Hero>
  )
}
