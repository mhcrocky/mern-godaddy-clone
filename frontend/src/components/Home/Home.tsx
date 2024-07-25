
import Layout from "../../layout";
import FooterSection from "./Footer";

import HeroSection from "./Hero";
import SearchSection from "./Search";
import SuccessSection from "./Success";
import TemplateSection from "./Template";


const Home = () => {

  return (
    <Layout>
      <div className="bg-white">
        <SearchSection />
        <HeroSection />
        <SuccessSection />
        <TemplateSection />
        <FooterSection />
      </div>
    </Layout>
  );
};

export default Home;
