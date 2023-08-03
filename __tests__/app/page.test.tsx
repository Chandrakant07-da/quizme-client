import React from "react";
import { render, screen , waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";
import mockRouter from 'next-router-mock';
jest.mock('next/navigation', () => require('next-router-mock'));
beforeAll(()=>{
  mockRouter.push('/');
})
describe("Home", () => {
  test("should render properly", async () => {
    render(<Home />);   
    const myElement = await  screen.getByTestId('main-container');
    // expect(myElement).toHaveTextContent(
    //   "Do you have what it takes to become the Quiz master?"
    // );
    expect(myElement).toHaveClass('text-center');
  });

  test("should have properties properly", async () => {
    render(<Home />);   
    const myElement = await  screen.getByTestId('mainpage-heading');
    expect(myElement).toHaveTextContent(
      "Do you have what it takes to become the Quiz master?"
    );
    expect(myElement).toHaveClass('text-white p-4');
  });

  test("button for name submission should be enabled", async () => {
    render(<Home />);   
    const myElement = await  screen.getByTestId('name-submit-btn');
    expect(myElement).toBeEnabled();
  });
  test("image should have alt text", async () => {
    render(<Home />);   
    // const myElement = await  screen.getByTestId('main-image');
    const imageElement = screen.getByAltText('home-page');
    expect(imageElement).toBeInTheDocument();

  });

});
