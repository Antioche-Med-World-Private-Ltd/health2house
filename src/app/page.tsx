import Image, { StaticImageData } from "next/image";
import HeroSection from "./components/Home/HeroSection";
import HeroSection2 from "./components/Home/HeroSection2";
import PackagesCards from "./components/Home/PackagesCards";
import VideoTextSection from "./components/common/VideoTextSection";
import { InfiniteMovingCardsDemo } from "./components/common/InfiniteMovingCardsDemo";
import Services from "./components/Home/Services";
import webguideImage from '../../public/webguide.png';
import Cta from "./components/common/Cta";



export default function Home() {

  // Define the type for a single service item
interface ServiceItem {
  svgUrl: StaticImageData;
  title: string;
  excerpt: string;
}
  const svgList: ServiceItem[] = [
    {
      svgUrl: webguideImage,
      title: 'Online Consultation',
      excerpt: 'Free online consultation provided by our experts to help you with all you need to know about your procedure and travel.'
    },
    {
      svgUrl: webguideImage,
      title: 'Travel Arrangements',
      excerpt: 'Have everything you need for your travel arranged by us, including your visa, hotel, and more.'
    },
    {
      svgUrl: webguideImage,
      title: 'Airport Pick-up & Transportation',
      excerpt: 'Private guide and interpreter, airport pick-up, and door-to-door city transportation provided to you upon arrival.'
    },
    {
      svgUrl: webguideImage,
      title: 'VIP Hospitals & Clinics',
      excerpt: 'Receive your surgery and treatment at upscale clinics and hospitals with first-class services and professional staff.'
    },
    {
      svgUrl: webguideImage,
      title: '24/7 Assistance',
      excerpt: 'Throughout your stay our trained support team is at your service every moment throughout your stay to assist you with anything including your recovery after surgery.'
    },
    {
      svgUrl: webguideImage,
      title: 'Follow-up',
      excerpt: 'Stay in touch with us for as long as you wish to ask your questions about your recovery and get follow-up medical advice.'
    }
    // ... other items in the list
  ];
  return (
    <>
    {/* <HeroSection/> */}
    <HeroSection2/>
    <PackagesCards/>
    <VideoTextSection/>
    <InfiniteMovingCardsDemo/>
    <Services title="Our Services" svgList={svgList}/>
    <Cta/>
    </>
  );
}


