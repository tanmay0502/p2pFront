import Image from 'next/image'
import Navbar from '@/components/navbar/navbar'
import Page1 from '@/components/pages/page1'
import Footer from '@/components/footer/footer'
import Range from '@/components/pages/range'
import OurProd from '@/components/pages/ourProd'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Page1 />
      <Range />
      <OurProd />
      <Footer/>
    </div>
  )
}
