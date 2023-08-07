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
import { storeLocalData, getUserData } from "@/helper/quiz_helper";
import { register } from "@/public/swDev";

const Home = () => {

  useEffect(() => {
    register()
  }, []);

  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [currentUser, setCurrentuser] = useState("");
  const [tableInput, setTableInput] = useState([{ name: "", score: 0 }]);
  const handleButtonClick = () => router.push("/quiz");
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setShowButton(true);
    const {currentUser} = await storeLocalData(userName)
    setCurrentuser(currentUser);
  };
  const trackButtonHandler =()=>{
    const allUserData = getUserData();
    if(allUserData){
      const dataForTable = allUserData.userDetail
      setCurrentuser(allUserData.currentUser)
      setTableInput(dataForTable)
    }
  }
  useEffect(() => {
   const initUserData = getUserData();
   if(initUserData){
    const dataForTable = initUserData.userDetail
    setCurrentuser(initUserData.currentUser)
    setTableInput(dataForTable)
  }
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
              trackButtonHandler();
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
