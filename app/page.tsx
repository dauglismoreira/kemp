import { AboutSection } from './components/ui/aboutSection';
import { BannerSection } from './components/ui/bannerSection';
import { BlogSection } from './components/ui/blogSection';
import { ContactSection } from './components/ui/contactSection';
import { PrimarySection } from './components/ui/primarySection';
import { PrimarySlider } from './components/ui/primarySlider';
import { SecondarySection } from './components/ui/secondarySection';
import { VerticalSeparate } from './components/ui/verticalSeparate';

export default function Home() {
  return (
    <main className="">
      <PrimarySlider/>
      <PrimarySection/>
      <SecondarySection/>
      <BannerSection text="A Kemp promete e faz."/>
      <AboutSection/>
      <VerticalSeparate/>
      <ContactSection/>
      <BlogSection/>
    </main>
  );
}
