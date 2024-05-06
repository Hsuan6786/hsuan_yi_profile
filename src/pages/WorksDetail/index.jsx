import { Image } from "@chakra-ui/react";
import Hero from "./components/Hero";
import SiteDetails from "./components/SiteDetails";
import OtherWorks from "./components/OtherWorks";
import SiteInfo from "./components/SiteInfo";

export default function WorksDetail () {
  return <>
    <Hero />
    <SiteInfo />
    <SiteDetails/>
    <OtherWorks />
  </>
}