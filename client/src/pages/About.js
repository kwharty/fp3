import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DeveloperCard from "../components/DeveloperCard";
import developers from "../developers.json";
import BrandStatement from "../components/BrandStatement";
// import Tier1 from "../components/Tier1";


///P-CODE TO WORK///

const About = () => {
  return (

    <div>
      <Navbar />
      <BrandStatement />
      {developers.map(developer => (
        <DeveloperCard
          id={developer.id}
          key={developer.id}
          image={developer.image}
          name={developer.name}
          about={developer.about}
          contact={developer.contact}
        />
      ))}
      <Footer />
    </div>
  );
}

export default About;
