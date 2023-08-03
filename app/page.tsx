"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
// Components
import Button from "@/components/Button/Button";
// Homepage image
import HomepageImage from "assets/home-pic.png";
import Table from "@/components/table/Table";
import TableData from "@/types/table";

const Home = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [currentUser, setCurrentuser] = useState("");
  const [tableInput, setTableInput] = useState([{ name: "", score: 0 }]);
  const handleButtonClick = () => router.push("/quiz");
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setShowButton(true);

    localStoreHandle();
    // Do your work with submitted name
    // console.log("User Name Submitted :", userName);
    setCurrentuser(userName);
  };

  function localStoreHandle() {
    // Deleting the item with key 'ally-supports-cache' from localStorage
    localStorage.removeItem('ally-supports-cache');
    const existName = localStorage.getItem(userName);
    if (existName !== null) {
      // setting current-user
      const data = userName;
      const dataString = JSON.stringify(data);
      localStorage.setItem("current-user", dataString);
    } else {
      // setting username with score value
      const dataLocal = {
        score: [0],
      };
      const dataString = JSON.stringify(dataLocal);
      localStorage.setItem(userName, dataString);
      // setting current-user
      const data = userName;
      const dataStr = JSON.stringify(data);
      localStorage.setItem("current-user", dataStr);
    }

    getUserData();
  }
  const getUserData = () => {
    // Get the total number of key-value pairs stored in localStorage
    const totalItems = localStorage.length;
    // Initialize an empty object to store all data
    const allData: { [key: string]: string } = {};
    // Loop through each key and get its associated value
    for (let i = 0; i < totalItems; i++) {
      const key: any = localStorage.key(i);
      const value: any = localStorage.getItem(`${key}`);
      allData[key] = JSON.parse(`${value}`); // Parse the JSON string back to an object
    }

    // console.log(allData);
    if (allData) {
      try {
        // Extract current-user value from the input
        const currentUser = allData["current-user"];
        // Convert other properties to the desired format and store in the data array
        const allUserData = Object.keys(allData)
          .filter((key) => key !== "current-user")
          .map((name) => ({
            name,
            score: (allData[name] as any)?.score[0], // Type assertion here
          }));

        // // Output the results
        // console.log(currentUser);
        // console.log(allUserData);

        // Setting the output into state
        setCurrentuser(currentUser);
        setTableInput(allUserData);
      } catch (error) {
        return console.log(error);
      }
    }
  };
  useEffect(() => {
    getUserData();
  }, [currentUser]);

  const tempData: TableData = {
    rows: tableInput,
  };

  return (
    <>
      <div data-testid="main-container" className="text-center">
        <h3 data-testid="mainpage-heading" className="text-white p-4">
          Do you have what it takes to become the Quiz master?
        </h3>
        <Image
          className="max-w-[700px] w-full rounded-[10px]"
          src={HomepageImage}
          alt="home-page"
        />
        <p id="front-msg" className="text-[#9F50AC] pt-2 pb-2 text-[20px]">
          Submit your name to start quiz..!{" "}
        </p>
        <section className="text-[20px] rounded-[10px] text-black pt-4 p-2 border-[4px]-black">
          <form onSubmit={handleSubmit}>
            {/* Input field */}
            <input
              type="text"
              placeholder="Enter your name..."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            {/* Submit button */}
            <button data-testid='name-submit-btn' className="bg-[#9F50AC] select-none font-bold h-[30px] min-w-[80px] rounded-[3px] border-[4px]-black text-white hover:bg-sky-700">
              Submit
            </button>
          </form>
          <button
            className="bg-[#7b9e39] select-none h-[30px] min-w-[80px] rounded-[3px] text-black border-[4px]-black hover:bg-sky-700"
            onClick={() => {
              getUserData();
              setShowTable(true);
            }}
          >
            Track User
          </button>
        </section>

        {showButton ? (
          <Button text="Start Quiz" onClick={handleButtonClick} />
        ) : null}
        {currentUser ? (
          <p className="text-[20px] bg-[#f2bfca] rounded-[10px] text-black pt-3 pb-2 pr-2 width-[40%]">
            Current User is : {currentUser}
          </p>
        ) : null}
        {showTable ? <Table tableData={tempData} /> : null}
      </div>
    </>
  );
};

export default Home;
