"use client"; // client component for interactivity
import { useState } from "react";
import Header from "./header";
import Child from "./child/page";
import { useRouter } from "next/navigation";
import Products from "./products/page";

export default function Home() {
  const router = useRouter();

  // parent state
  const [states, setStates] = useState(['Tozeur', 'Gafsa', 'Tunis']);

  async function gotoLogin() {
    router.push('/login');
  }

  async function gotoContact() {
    router.push('/contact');
  }

  return (
    <>
      <Header />

      <div className="flex gap-2 mt-4">
        <button 
          onClick={gotoLogin} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login Page
        </button>

        <button 
          onClick={gotoContact} 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Contact Page
        </button>
      </div>

<br />
<Products />
<br />

      {/* Pass the parent state to the child */}
      <Child states={states} />
    </>
  );
}
