import Image from 'next/image'
import Navbar from '@/components/navbar/navbar'
import Page1 from '@/components/pages/page1'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Page1 />
    </div>
  )
}
