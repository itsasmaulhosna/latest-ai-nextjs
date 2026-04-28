import React from 'react';
import PhotoCard from './PhotoCard';

const TopGeneration =async () => {
    const res=await fetch('https://latest-ai-nextjs.vercel.app/data.json')
    const photos=await res.json();
    const topPhotos=photos.slice(2,10)
    console.log(topPhotos)
    return (
        <div className="max-w-7xl mx-auto px-6 mt-10">
      <h2 className="text-3xl font-bold mb-6">Top Generation</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {topPhotos.map(photo=><PhotoCard key={photo.id} photo={photo}/>)}
      </div>
    </div>

    );
};

export default TopGeneration;