import { About } from '@/components/about';
import { Blog } from '@/components/blog';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { Projects } from '@/components/projects';
import { SectionDivider } from '@/components/section-divider';
import { Services } from '@/components/services';
import { Testimonials } from '@/components/testimonials';
import { ThemeToggle } from '@/components/theme-toggle';
import { WhyHireMe } from '@/components/why-hire-me';

const HomePage = () => {
  return (
    <>
      <div className="container flex flex-col items-center">
        <Header />
        <main id="main-content">
          <Intro />
          <SectionDivider />
          <WhyHireMe />
          <About />
          <Services />
          <Experience />
          <Projects />
          <Blog />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
      <ThemeToggle className="bg-background hidden sm:fixed sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
};

export default HomePage;
