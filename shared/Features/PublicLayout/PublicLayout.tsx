import { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

interface IProps {
  children: ReactNode;
}
const PublicLayout = ({ children }: IProps) => {
  return (
    <div className="bg-background">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default PublicLayout;
