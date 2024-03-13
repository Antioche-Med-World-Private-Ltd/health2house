import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="hero-section flex justify-center items-center h-screen bg-[#ccdbea]">
      <div className="container max-w-screen-lg mx-auto flex flex-col md:flex-row gap-10 items-center">
        <div className="text-content w-full md:w-1/2 p-10">
          <h1 className="text-5xl font-semibold mb-4 leading-tight">Medical Treatments In India</h1>
          <p className="text-xl leading-relaxed mb-6 lleading-relaxed">Made Easy and Hassle-Free with a Specialized Medical Tourism Facilitator in India.</p>
          <div className="flex items-center gap-4">
            <span className="text-lg font-medium mr-2">✓</span> Free Consultation
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg font-medium mr-2">✓</span> All-inclusive First-rate Services
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg font-medium mr-2">✓</span> Transparent Prices
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg font-medium mr-2">✓</span> Hundreds of Satisfied Patients
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg font-medium mr-2">✓</span> Best Doctors and Surgeons
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg font-medium mr-2">✓</span> Chosen by Patients from 75+ Countries
          </div>
          <Link href="#" className="btn mt-8 inline-flex items-center px-4 py-2 text-lg font-medium text-center text-white bg-blue-500 hover:bg-blue-700 rounded-md shadow-sm">
            Contact Us
          </Link>
        </div>
        <div className="image-container w-full md:w-1/2">
          <Image
            src="/medical-tourism.jpg" // Replace with your image path
            alt="https://unsplash.com/photos/girl-in-blue-jacket-holding-red-and-silver-ring-Y-3Dt0us7e0?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
            width={600}
            height={400}
            layout="responsive"
            priority // For prioritizing image loading
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
