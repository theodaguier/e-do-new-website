import { Header } from "../ui/layout/header";
import Cookies from "../ui/cookies";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Cookies />
    </div>
  );
}
