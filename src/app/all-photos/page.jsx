import PhotoCard from "@/components/PhotoCard";


const AllPhotopage = async() => {
    const res=await fetch('https://latest-ai-nextjs.vercel.app/data.json')
    const photos=await res.json()
    console.log(photos)
    return (
        <div>
            <h2 className="text-2xl font-bold m-5">All Photos</h2>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
                {photos.map(photo=><PhotoCard key={photo.id} photo={photo}></PhotoCard>)}
            </div>
        </div>
    );
};

export default AllPhotopage;