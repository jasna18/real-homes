<script setup>
const { apartments, communities } = useSiteData()
</script>

<template>
  <div>
    <HeroSlider />
    <ProjectsGrid
      id="apartments"
      eyebrow="Residential Apartments"
      :projects="apartments"
    />
    <ProjectsGrid
      id="communities"
      eyebrow="Residential Communities"
      :projects="communities"
      soft
    />
    <OurStory />
    <InvestmentBenefits />
    <GlobalPresence />
    <CompanyStats />
    <StoriesSection />
    <!-- <AppPromo /> -->
  </div>
</template>
