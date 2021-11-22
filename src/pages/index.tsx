import { NextPage } from "next";
import { Text, Hamburger } from "~/components";
import { Hero } from "~/sections";

const HomePage: NextPage = () => {
  return (
    <>
    <Hamburger />
    <Hero />
    </>
  );
};

export default HomePage;
