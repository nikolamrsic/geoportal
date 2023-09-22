
import { Navbar } from "../landing_page_components/Navbar"
import { Hero } from "../landing_page_components//Hero"
import { SectionOne } from "../landing_page_components/SectionOne"
import { SectionTwo } from "../landing_page_components/SectionTwo"
import { SectionThree } from "../landing_page_components/SectionThree"
import { ReactElement } from "react"
export const LandingPage = (): ReactElement => {
    return (
        <>
            <Navbar></Navbar>
            <Hero />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </>
    )
}