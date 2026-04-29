import Image from "next/image";

const PhotoDetailsPage = async ({ params }) => {
  const { id } =await params;

  const res = await fetch("https://latest-ai-nextjs.vercel.app/data.json"
    
  );
  const photos = await res.json();

  const photo = photos.find((p) => p.id == id);

  if (!photo) {
    return <h2 className="text-center mt-10">Photo not found</h2>;
  }

  return (
    <div className="max-w-5xl mx-auto p-5">
      <div className="grid md:grid-cols-2 gap-6 border rounded-xl shadow-lg p-5">

        {/* Image */}
        <div>
          <Image
            src={`${photo.imageUrl}?w=800&auto=format&fit=crop`}
            alt={photo.title}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-3">{photo.title}</h2>

            <p className="text-gray-600 mb-4">{photo.prompt}</p>

            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Category:</span> {photo.category}</p>
              <p><span className="font-semibold">Model:</span> {photo.model}</p>
              <p><span className="font-semibold">Resolution:</span> {photo.resolution}</p>
              <p><span className="font-semibold">Created:</span> {new Date(photo.createdAt).toLocaleDateString()}</p>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {photo.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-200 px-2 py-1 rounded text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-5 mt-5 text-lg font-semibold">
            <p>❤️ {photo.likes}</p>
            <p>⬇️ {photo.downloads}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsPage;