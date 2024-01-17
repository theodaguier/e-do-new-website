import { Header } from "../ui/layout/header";
import Cookies from "../ui/cookies";
import { Container } from "@/components/container";
import { SplashScreen } from "../splash-screen";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Cookies />

      {/* <SplashScreen /> */}
    </>
  );
}
