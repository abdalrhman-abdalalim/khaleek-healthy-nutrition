import BrandSection from "./components/BrandSection";
import SocialLinks from "./components/SocialLinks";
import LoginButtonSection from "./components/LoginButtonSection";
import Divider from "./components/Divider";
import BottomSection from "./components/BottomSection";

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-foreground/10">
      <div className="container px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <BrandSection />
          <div className="space-y-8">
            <SocialLinks />
            <LoginButtonSection />
          </div>
        </div>
        <Divider />
        <BottomSection />
      </div>
    </footer>
  );
}
