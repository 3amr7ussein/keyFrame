import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { AuthProvider, useAuth } from '../context/AuthContext';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { currentUser, logout } = useAuth();

  const handleSignOut = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <div>
      <header className="flex-none relative z-50 text-sm leading-6 font-medium ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-5 bg-blue-500">
        <nav className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 whitespace-nowrap ">
            <div className="col-span-10"></div>

            <div className="mx-6 text-xl">
              <Link href="signup">Sign Up</Link>
            </div>
            <div className="mx-6 text-xl">
              {currentUser ? (
                <span className="hover:cursor-pointer" onClick={handleSignOut}>
                  Logout
                </span>
              ) : (
                <Link href={'./signin'} className="mx-6 my-6">
                  Sign In
                </Link>
              )}{' '}
            </div>
          </div>
        </nav>
      </header>
      <div>
        <h1 className="text-6xl  font-bold  text-center mx-40 my-20">
          Welcome{' '}
          {currentUser ? (
            <span>{currentUser.email}</span>
          ) : (
            <span>No Body</span>
          )}
        </h1>
      </div>
    </div>
  );
}
