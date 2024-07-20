import Image from "next/image";
import Banner from "./homePageComponents/Banner";
import About from "./homePageComponents/About";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
    </main>
  );
}
