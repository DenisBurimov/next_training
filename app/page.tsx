import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { AuthComponent } from "./components/session";

export default async function Home() {
  const session = await getServerSession(options);
  return <AuthComponent session={session} />;
}
