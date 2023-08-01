"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
// Components
import Button from "@/components/Button/Button";
// Homepage image
import HomepageImage from "assets/home-pic.png";

const Home = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [showButton, setShowButton] = useState(false)
  const handleButtonClick = () => router.push("/quiz");
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setShowButton(true);
 
    // Do your work with submitted name
    console.log("User Name Submitted :", userName);
  };
  return (
    <div className="text-center">
      <p className="text-white p-4">
        Do you have what it takes to become the Quiz master?
      </p>
      <Image
        className="max-w-[700px] w-full rounded-[10px]"
        src={HomepageImage}
        alt="home-page"
      />
      <p className="text-[#9F50AC] pt-2 pb-2 text-[20px]">
        Submit your name to start quiz..!{" "}
      </p>
      <p className="text-[20px] rounded-[10px] text-black pb-2  pr-2">
        <form onSubmit={handleSubmit}>
          {/* Input field */}
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {/* Submit button */}
          <button className="bg-[#9F50AC] select-none font-bold h-[30px] min-w-[80px] rounded-[10px] text-white hover:bg-sky-700">
            Submit
          </button>
        </form>
      </p>
      {
      showButton ?
      <Button text="Start Quiz" onClick={handleButtonClick} /> : null
      }
    </div>

  );
};

export default Home;
