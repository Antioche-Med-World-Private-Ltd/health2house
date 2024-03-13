import React from 'react';

const VideoTextSection = () => {
  return (
    <section className="flex flex-col md:flex-row md:items-center">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        {/* Video container */}
        <div className="relative overflow-hidden w-full h-64 md:h-96">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/VIDEO_ID" // Replace with your video URL
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="w-full px-4 py-8 md:w-1/2 md:px-8 md:py-12">
        {/* Text content */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">My trip to India went beyond my expectations</h2>
        <p className="text-gray-600 leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vestibulum, blandit quam vitae, semper dui. Maecenas et orci id risus venenatis laoreet. Nulla vitae elit libero. Nulla facilisi eros in odio tristique fringilla. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </p>
      </div>
    </section>
  );
};

export default VideoTextSection;
