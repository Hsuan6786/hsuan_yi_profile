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
import Resume from '/public/assets/huang-hsuan-yi_ resume.pdf'

export default function HeroSection() {
  function downloadPdfResume() {
    const el = document.createElement('a')
    el.setAttribute('href', Resume)
    el.setAttribute('download', 'huang-hsuan-yi_ resume.pdf');
    el.style.display = 'none'
    document.body.appendChild(el)
    el.click()
    document.body.removeChild(el);
  }
  return (
    <Hero
      title="Resume"
      svgImage="illustration-gacha_cat"
    >
      <Text
        pt="xl"
        textStyle={'content'}
        color="dark-green"
      >
        擁有超過30個專案設計經驗，將創意轉化為實用的設計解決方案。熟練掌握各種設計工具和技術，並持續提升自我，保持對行業趨勢的敏感性。
      </Text>
      <Button
        mt="xl"
        label="Download Resume"
        color="accent"
        variant="outline"
        rounded={true}
        onClick={()=> downloadPdfResume()}
      />
    </Hero>
  )
}
