import React from "react";
import Tier2 from "../components/Tier2";
import Tier1 from "../components/Tier1";
import Tier3 from "../components/Tier3";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Plans = () => {

    return (
        <div>
            <Navbar />
            <Tier1 />
            <Tier2 />
            <Tier3 />
            <Footer />

        </div>
    )

}

export default Plans;