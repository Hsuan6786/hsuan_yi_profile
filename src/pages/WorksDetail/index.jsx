import { Image } from "@chakra-ui/react";
import Hero from "./components/Hero";
import SiteDetails from "./components/SiteDetails";
import OtherWorks from "./components/OtherWorks";
import SiteInfo from "./components/SiteInfo";
import { useParams } from 'react-router-dom';
import { works } from "@/config/data-works";
import { useEffect, useState } from "react";


export default function WorksDetail () {
  const { id } = useParams();
  const [work, setWork] = useState({
    id: null,
    name: '',
    designIn: '',
    tags: [''],
    websiteLink: '',
    designInfo: {
      role: [''],
      tools: [''],
      responsibilities: [''],
      teamSize: 0,
    },
    projectInfo: {
      customerBackground:
        '',
      productPurpose: {
        title: '',
        content: [],
      },
      designConcept:
        '',
    },
    thumbnailPath: '',
    heroImagePath: '',
    projectSnapShotPath: '',
  })

  useEffect(()=> {
    const work =  works.find((work) => work.id == id)
    if(!work) return
    setWork(()=> work)
  }, [id])
  
  return <>
    <Hero work={work} />
    <SiteInfo work={work} />
    <SiteDetails work={work}/>
    <OtherWorks work={work} />
  </>
}