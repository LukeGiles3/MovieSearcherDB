import React from "react";
import { auth } from "../../firebase";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <button
        primary
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign out
      </button>
    </div>
  );
}
