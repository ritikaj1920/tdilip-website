import Hero from '../../components/organisms/hero';
import Stats from '../../components/organisms/stats';
import About from '../../components/organisms/about';
import MedalSection from '../../components/organisms/medal-section';
import AchievementTicker from '../../components/organisms/achievement-ticker';
import InstagramFeed from '../../components/organisms/instagram-feed';
import TwitterFeed from '../../components/organisms/twitter-feed';
import Gallery from '../../components/organisms/gallery';
import Testimonials from '../../components/organisms/testimonials';
import Partners from '../../components/organisms/partners';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <AchievementTicker />
      <About />
      <MedalSection />
      <InstagramFeed />
      <TwitterFeed />
      <Gallery />
      <Testimonials />
      <Partners />
    </>
  );
}
