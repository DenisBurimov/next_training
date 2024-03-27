"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import * as yup from "yup";
import { userSchema } from "../validations/UserValidations";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // try {
    //     const response = await fetch('/api/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(formData)
    //     });
    //     if (response.ok) {
    //         router.push('/dashboard'); // Redirect to dashboard upon successful login
    //     } else {
    //         console.error('Failed to login');
    //     }
    // } catch (error) {
    //     console.error('Error occurred:', error);
    // }
    console.log("handleSubmit:", JSON.stringify(formData));
  };

  return (
    <div>
      <h1 className="text-center">Login Page</h1>
      <div className="flex justify-center">
        <form className="p-5 border border-black" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-black"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-black"
              value={formData.password}
              onChange={handleChange}
            />

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="flex justify-center">
        <Link className="text-blue-700 underline" href="/">
          Home Page
        </Link>
        <Link className="text-blue-700 underline" href="/posts">
          All Posts
        </Link>
      </div>
    </div>
  );
}
