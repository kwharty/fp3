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
      id={developers.id}
      key={developers.id}
      image={developers.image}
      name={developers.name}
      about={developers.about}
      message={developers.message}
      contact={developers.contact}
      />
      ))}
      <Footer />
    </div>
  );
}

export default About;
      