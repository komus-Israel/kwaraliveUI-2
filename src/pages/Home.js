import React from 'react'
import Topbar from "../components/Topbar";
import Landing from "../components/Landing";
import Business from "../components/Business";
import AppDownload from "../components/AppDownload";
import Footer from "../components/Footer";
import Svg from '../components/Svg';
import Newsletter from '../components/Newsletter';
import Getstarted from '../components/Getstarted';
import Contact from '../components/Contact';


export default function Home() {
    return (
        <div>
            <Landing />
            <Svg />
            <Business />
            <Getstarted />
            <AppDownload />
            <Contact />
            <Newsletter />
            <Footer />
        </div>
    )
}
