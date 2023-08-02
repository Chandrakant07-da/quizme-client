import Image from "next/image";
import { Quicksand } from "next/font/google";
// Logo
import Logo from "@/assets/react-quiz-logo.svg";
import "./globals.css";
import "../public/manifest.json";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata = {
  title: "QuizMe ! ",
  description: "Become the quiz master!",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#ad7ef3" />
        {/* Add any other meta tags, styles, or scripts here */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Quiz application" />
      </head>
      <body className="bg-[#2b2737] p-4">
        <main
          className={`${quicksand.variable} font-quicksand max-w-[900px] w-full m-auto flex flex-col items-center`}
        >
          <Image className="h-[80px] sm:h-full" src={Logo} alt="logo" />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
