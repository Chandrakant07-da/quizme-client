// Utils
import { shuffleArray } from '@/utils/arrayUtils';
// Components
import Quiz from './Quiz';
// Types
import { Difficulty, QuestionsState, Question } from '@/types/quiz';

const TOTAL_QUESTIONS = 10;

// let queryData:string|null
// if (typeof window !== "undefined") {
//   queryData= JSON.parse(localStorage.getItem('subject')) || "";
//   console.log("Query Data :", queryData);
// }


export  const getSubjects = async ()=>{
  const url = `http://localhost:4000/subject-list`
  const data = await (await fetch(url,{method:'GET'})).json();
  const response = await data.response;
  const subject = await response.slice(4, 9);
  return subject
}

// export  const getQuestionBySubject = async (querySubject:string="SQL")=>{
//   const url = `http://localhost:4000/subject`
//   const data = await (await fetch(url,{method: "POST",
//   body:{
//       subject:querySubject
//   }})).json();
//   const response = await data.response;
//   const subject = await response
//   return subject
// }

const getQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionsState> => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

  const data = await (await fetch(endpoint, { cache: 'no-store' })).json();

  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
  }));
};

const Home = async () => {
  const questions = await getQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
//  const questionList = getQuestionBySubject();
//  console.log("QuetionList:",questionList); 
  return <Quiz questions={questions} totalQuestions={TOTAL_QUESTIONS} />;
};

export default Home;
