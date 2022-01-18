import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
const SignUp = () => {
  const { signup } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
    router.push('/');
  };

  return (
    <>
      <div className="flex flex-wrap justify-center  mt-10">
        <h1 className="font-bold  text-5xl text-gray-700">Sign Up Page</h1>
      </div>
      <div className="flex flex-wrap justify-center mt-20">
        <form className="flex flex-wrap flex-col items-center w-11/12 max-w-xl justify-center  shadown-md bg-blue-500 rounded px-8 pt-6 pb-8 mb-4">
          <div className="px-2 pt-3 w-11/12 ">
            <label className=" block text-grey-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className=" w-full border-2"
            ></input>
          </div>
          <div className="px-2 pt-3 w-11/12">
            <label className="block text-grey-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="w-full border-2"
            ></input>
          </div>
          <div className="flex justify-center px-2 pt-3 w-11/12 ">
            <button
              className=" text-grey-700 text-sm  font-bold mt-6 border-2 bg-orange-400 hover:bg-orange-700 rounded-3xl font-bold  p-4"
              type="submit"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
          <div className="flex  whitespace-nowrap mt-2 flex-nowrap">
            <h1 className=" text-gray-800  text-xl ">
              Already have an account?
            </h1>
            <Link href="./signin">
              <span className="text-orange-300 hover:text-orange-600 text-xl ml-2 hover:cursor-pointer font-bold  ">
                Sign In
              </span>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
