import Footer from '../../components/reusable/Footer/Footer'
import { Header } from '../../components/reusable/Headers'
import { useEffect, useState } from 'react'
import SplashScreen from '../../components/splash/SplashScreen'
import {
  TechnologyRealEstateInvention,
  EmiraazInnovationExcellence,
  EmpoweringBusinessOpportunities,
  DiscoverInnovativeProducts,
  ExploreWorldOfArt,
  EmiraazTechnologyInnovation,
  EmiraazRealEstate,
  ExploreLatestBlogPosts,
  VisualChronicles,
  WhatsNewAtEmiraaz,
  ScaleUpYourBusiness
} from '../../components/Home'

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 600)

  }, [])
  return (
    <>

      {loading ?

        <SplashScreen />
        : <main className="m-auto  max-w-[1680px] w-full">
          <Header />
          <TechnologyRealEstateInvention />
          <EmiraazInnovationExcellence />
          <EmpoweringBusinessOpportunities />
          <DiscoverInnovativeProducts />
          <ScaleUpYourBusiness />
          <ExploreWorldOfArt />
          <EmiraazTechnologyInnovation />
          <EmiraazRealEstate />
          <WhatsNewAtEmiraaz />
          <ExploreLatestBlogPosts />
          <VisualChronicles />
          <Footer />
        </main>}
    </>
  )
}

export default Home