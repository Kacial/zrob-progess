import { TopToolbar } from "@/app/components/TopToolbar";
import { Footer } from "@/app/components/Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <TopToolbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
