import React from "react";
import Sectionone from "../components/home/sectionone";
import Sectiontwo from "../components/home/sectiontwo";
import Footer from "../components/home/footer";

export default function Home() {
    return (
        <>
            <Sectionone btn={"bird btn"}/>
            <Sectiontwo/>
            <Footer/>
        </>
    )
}

