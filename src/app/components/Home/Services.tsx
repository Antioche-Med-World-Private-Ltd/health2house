import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ServiceItem {
  svgUrl: StaticImageData;
  title: string;
  excerpt: string;
}

interface Props {
  title: string;
  svgList: ServiceItem[];
}


const Services: React.FC<Props> = ({ title, svgList }) => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {svgList.map((item, index) => (
          <div key={index} className="group cursor-pointer hover:bg-gray-100 rounded-lg p-4 transition duration-300 ease-in-out">
            <div className="flex justify-center mb-2">
              <Image src={item.svgUrl} alt={item.title} className="h-12 w-12 mx-auto" width={200} height={200} />
            </div>
            <h3 className="text-center text-lg font-medium text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
