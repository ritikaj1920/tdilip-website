import SEO from '../../components/atoms/seo';
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
      <SEO
        path="/"
        description="Official website of T. Dilip (Tirumala Dilip Kumar), Fielding Coach of the Indian Senior Men's Cricket Team. Four-time ICC trophy winner. Explore his journey, achievements, gallery, and Helping Hands initiative."
      />
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
