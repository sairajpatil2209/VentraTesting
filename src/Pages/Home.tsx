import Hero from '../Components/Hero'
import Features from '../Components/Features';
import CTA from '../Components/CTA';
import PageTransition from "../Components/motion/PageTransition";

export default function Home() {
  return (
    <>
    <PageTransition>
      <Hero />
      <Features />
      <CTA />
      </PageTransition>
    </>
  );
}
