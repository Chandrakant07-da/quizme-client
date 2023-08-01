"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
// Components
import Button from "@/components/Button/Button";
// Homepage image
import HomepageImage from "assets/home-pic.png";

import { getSubjects } from "./quiz/page";


const Home = (props:any) => {
  console.log("Prop data", props);
  const router = useRouter();

  const handleButtonClick = (subject:string) => {
    const subData = getSubjects();
    console.log("subData", subData);

    console.log("subject from user button clicked :",subject)

    localStorage.setItem('subject', JSON.stringify(subject));
    router.push('/quiz');
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
      <p className="text-[#9F50AC] pt-2 pb-8 text-[30px]">
        Click on the subject to start the Quiz..!
      </p>
      <div className="flex justify-between">
        <Button text="SQL" onClick={()=>handleButtonClick("SQL")} />
        <Button text="MongoDB" onClick={()=>handleButtonClick("MongoDB")} />
        <Button text="JavaScript" onClick={()=>handleButtonClick("JavaScript")} />
        <Button text="HTML and CSS" onClick={()=>handleButtonClick("HTML and CSS")} />
        <Button text="DSA" onClick={()=>handleButtonClick("DSA")} />
      </div>
    </div>
  );
};

export function GetStaticProps() {
  
  const subjectList = async ()=>{
    const url = `http://localhost:4000/subject-list`
    const response = await fetch(url,{method:'GET'})
    const data = await response.json();
    const subject = await data.response.slice(4, 9);
    return subject
  }
  
  return {
    props: {
      subjectList,
    },
  };
}

export default Home;
