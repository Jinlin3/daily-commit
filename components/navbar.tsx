import Link from "next/link";
import SignIn from "./sign-in";
import { auth } from "@/auth";
import SignOut from "./sign-out";

export default async function Navbar() {
  const session = await auth();
  const email = session?.user?.email;
  const name = session?.user?.name;
  const display = name ? name : email;

  return (
    <header className="bg-gray-800 p-4 text-white">
      <div className="flex items-center justify-between">
        { /* Left spacer */ }
        <div className="w-1/3">
          {display ? (
            <span className="text-sm opacity-80">Signed in as {display}</span>
          ) : (
            <span className="text-sm opacity-80">Not signed in</span>
          )}
        </div>
        { /* Center title */ }
        <div className="w-1/3 text-center">
          <Link href="/" className="text-3xl font-semibold">
            Jinlin3&apos;s Blog Page
          </Link>
        </div>
        { /* Right SignIn button */ }
        <div className="w-1/3 flex justify-end">
          {email ? (
            <SignOut />
          ) : (
            <SignIn />
          )}
        </div>
      </div>
    </header>
  );
}