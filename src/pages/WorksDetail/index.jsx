import { Image } from "@chakra-ui/react";
import Hero from "./components/Hero";
import SiteDetails from "./components/SiteDetails";
import OtherWorks from "./components/OtherWorks";
import SiteInfo from "./components/SiteInfo";
import { useParams } from 'react-router-dom';
import { works } from "@/config/data-works";
export default function WorksDetail () {
  const { id } = useParams();
  const work = works.find((work) => work.id == id)
  
  return <>
    <Hero work={work} />
    <SiteInfo work={work} />
    <SiteDetails work={work}/>
    <OtherWorks work={work} />
  </>
}