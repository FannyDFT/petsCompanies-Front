import Footer from "./Footer";
import Onglet from "./Onglet";

type DashBoardLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: DashBoardLayoutProps) {
  return (
    <div>
      <Onglet />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
