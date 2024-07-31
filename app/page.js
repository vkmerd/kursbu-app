import Banner from "./homePageComponents/Banner";
import About from "./homePageComponents/About";
import Info from "./homePageComponents/Info";
import HowDoesItWork from "./homePageComponents/HowDoesItWork";
import EducationTabContainer from "./homePageComponents/EducationTabContainer";
import StudentAndTeacher from "./homePageComponents/StudentAndTeacher";
import Faq from "./homePageComponents/Faq";
import Companys from "./homePageComponents/Companys";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Header />
        <Banner />
        <HowDoesItWork />
        <EducationTabContainer />
        <Info />
        <Companys />
        <StudentAndTeacher />
        <Faq />
      <Footer />
    </main>
  );
}
