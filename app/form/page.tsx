import Link from "next/link";
import { userSchema } from "../validations/UserValidations";

export default function LoginForm() {
  return (
    <div>
      <h1 className="text-center">Login Page</h1>
      <div className="flex justify-center">
        <form className="p-5 border border-black">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="border border-black" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" className="border border-black" />

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
