import dynamic from 'next/dynamic'
import Header from '@/components/ui/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Footer from '@/components/ui/Footer'

const Projects    = dynamic(() => import('@/components/sections/Projects'))
const Experience  = dynamic(() => import('@/components/sections/ExpSkills').then(m => ({ default: m.Experience })))
const Skills      = dynamic(() => import('@/components/sections/ExpSkills').then(m => ({ default: m.Skills })))
const Testimonials = dynamic(() => import('@/components/sections/Social').then(m => ({ default: m.Testimonials })))
const WhyMe       = dynamic(() => import('@/components/sections/Social').then(m => ({ default: m.WhyMe })))
const Contact     = dynamic(() => import('@/components/sections/Contact'))

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <WhyMe />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
