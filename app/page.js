import Banner from "./homePageComponents/Banner";
import About from "./homePageComponents/About";
import Info from "./homePageComponents/Info";
import HowDoesItWork from "./homePageComponents/HowDoesItWork";


export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Banner />
      <About />
      <Info />
      <HowDoesItWork />
    </main>
  );
}
