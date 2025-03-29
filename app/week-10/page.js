"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function HomePage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="container">
      {/* title */}
      <h1 className="text-3xl font-bold text-center mb-8">Shopping List App</h1>

      {!user ? (
        <button onClick={gitHubSignIn}>Login with GitHub</button>
      ) : (
        <>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={firebaseSignOut}>Logout</button>

          <div className="mt-4">
            <Link href="/week-10/shopping-list">Go to Shopping List</Link>
          </div>
        </>
      )}
    </div>
  );
}
