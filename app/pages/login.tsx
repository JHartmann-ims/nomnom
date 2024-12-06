"use client";

import { useState } from "react";
import { createClient } from "../../utils/supabase/client";
import { login, signup } from '../login/actions'

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);



  return (
    <div className="w-full h-screen relative bg-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-[400px] h-[700px] rounded-md p-4">
        <h1>{isSignUp ? "Sign Up" : "Sign In"}</h1>
        {error && <p className="text-red-500">{error}</p>}
        {message && <p className="text-green-500">{message}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 my-2 text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 my-2 text-black"
        />
        <button
          onClick={async (e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append("email", email);
            formData.append("password", password);
            if (isSignUp) {
              await signup(formData);
            } else {
              await login(formData);
            }
          }}
          className="w-full p-2 bg-blue-500 my-2"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="w-full p-2 bg-gray-500 my-2"
        >
          {isSignUp ? "Switch to Sign In" : "Switch to Sign Up"}
        </button>
      </div>
    </div>
  );
}
