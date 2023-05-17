"use client";

import { signOut, useSession } from "next-auth/react";

const App = () => {
  const session = useSession();

  return (
    <div>
      <div>App!</div>
      <button
        onClick={() => signOut()}
        disabled={session?.status !== "authenticated"}
        title={
          session?.status !== "authenticated" ? "Log in first!" : "Log out"
        }
      >
        Logout
      </button>
    </div>
  );
};

export default App;
