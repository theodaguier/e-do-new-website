import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth[...nextauth]/[...nextauth]/route";
import { Toaster } from "sonner";
import { Nav } from "./dashboard/nav";

interface ProtectedLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

// const session = await getServerSession(authOptions);

// if (!session || !session.user?.email) {
//   return <div>This is protected and you do not have access to it.</div>;
// }

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  return (
    <div className="w-full flex ">
      <Nav />
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
}
