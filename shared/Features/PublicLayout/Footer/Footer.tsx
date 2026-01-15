import BrandSection from "./components/BrandSection";
import SocialLinks from "./components/SocialLinks";
import LoginButtonSection from "./components/LoginButtonSection";
import Divider from "./components/Divider";
import BottomSection from "./components/BottomSection";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-secondary/10 to-secondary/20  backdrop-blur-xl">
      <div className="container px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <BrandSection />
          <div className="space-y-8">
            {/* <SocialLinks /> */}
            <LoginButtonSection />
          </div>
        </div>
        <Divider />
        <BottomSection />
      </div>
    </footer>
  );
}
