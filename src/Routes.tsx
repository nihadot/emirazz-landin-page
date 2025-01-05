import { Routes as RootRouter, Route } from 'react-router';
import { Technology } from './pages/Technology';
import { About } from './pages/About';
import { Business } from "./pages/Business";
import { OurProductsPage } from "./pages/OurProductsPage";
import { OurPartnersPage } from "./pages/OurPartnersPage";
import { Sponsorship } from "./pages/Sponsorship";
import { Investment } from "./pages/Investment";
import { Startup } from "./pages/Startup";
import { Realestate } from "./pages/Realestate";
import { ScaleUp } from "./pages/ScaleUp";
import ArtPage from "./pages/Art/Art";
import BlogAll from "./pages/BlogAll/BlogAll";
import Gallery from "./pages/Gallery/Gallery";
import { BlogDetails } from "./pages/BlogDetails";
import { NewsAll } from "./pages/NewsAll";
import { News } from './pages/News';
import { ContactPage } from "./pages/ContactPage"

import { ProductPage } from "./pages/ProductPage";
import { Invention } from "./pages/Invention";
import { DeepSea } from "./pages/DeepSea"
import { AboutFounder } from "./pages/AboutFounder"
import { Home } from "./pages/HomePage"
type Props = {}

function Routes({ }: Props) {
  return (
    <RootRouter>
      <Route path='technology' element={<Technology />} />
      <Route path="about" element={<About />} />
      {/* <Route path="business" element={<Business/>} /> */}
      <Route path="business" element={<Business />} />
      <Route path="our/products" element={<OurProductsPage />} />
      <Route path="our/partners" element={<OurPartnersPage />} />
      <Route path="sponsorship" element={<Sponsorship />} />
      <Route path="investment" element={<Investment />} />
      <Route path="startup" element={<Startup />} />
      <Route path="realestate" element={<Realestate />} />
      <Route path="scaleup" element={<ScaleUp />} />
      <Route path="art" element={<ArtPage />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="blogall" element={<BlogAll />} />
      <Route path="blog" element={<BlogDetails />} />
      <Route path="newsall" element={<NewsAll />} />
      <Route path="news" element={<News />} />
      <Route path="product" element={<ProductPage />} />
      <Route path="contactus" element={<ContactPage />} />
      <Route path="invention" element={<Invention />} />
      <Route path="deepsea" element={<DeepSea />} />
      <Route path="about-founder" element={<AboutFounder />} />
      <Route index element={<Home />} />
    </RootRouter>

  )
}

export default Routes