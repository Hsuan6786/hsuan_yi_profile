import HeroSection from './components/HeroSection'
import SkillCarousel from './components/SkillCarousel'
import WorkExperience from './components/WorkExperience'
import PersonalCard from '../Resume/components/PersonalCard'
import ContactsSection from '@/components/ContactsSection'
import { Box } from '@chakra-ui/react'

export default function Resume() {
  return (
    <>
      <HeroSection />
      <SkillCarousel />
      <WorkExperience />
      <PersonalCard />
      <Box px="lg">
        <ContactsSection />
      </Box>
    </>
  )
}
