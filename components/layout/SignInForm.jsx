"use client";

import { registerUser } from "@/signInAction";

export function SignInForm() {
  return (
    <form action={registerUser}>
      <button>Sign In</button>
    </form>
  );
}
