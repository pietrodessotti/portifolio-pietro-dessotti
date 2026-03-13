import { HeroSection } from '@/components/sections/HeroSection'
import { WhatIDoSection } from '@/components/sections/WhatIDoSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { TechnicalSkillsSection } from '@/components/sections/TechnicalSkillsSection'
import { EngineeringPrinciplesSection } from '@/components/sections/EngineeringPrinciplesSection'
import { ArticlesPreviewSection } from '@/components/sections/ArticlesPreviewSection'
import { CaseStudiesPreviewSection } from '@/components/sections/CaseStudiesPreviewSection'
import { ContactCTASection } from '@/components/sections/ContactCTASection'
import { CharacterReveal } from '@/components/ui/CharacterReveal'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatIDoSection />
      <ExperienceSection />
      <TechnicalSkillsSection />
      <CharacterReveal
        message={"Plot twist: you can make this site yours.\nClick me to change the accent color! ✨"}
      />
      <EngineeringPrinciplesSection />
      <ArticlesPreviewSection />
      {/* <CaseStudiesPreviewSection /> */}
      <ContactCTASection />
    </>
  )
}
