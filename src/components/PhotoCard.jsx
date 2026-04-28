import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { GoHeart } from "react-icons/go";

const PhotoCard = ({ photo }) => {
  return (
    <Card className="overflow-hidden rounded-lg shadow-md">
      
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={photo.imageUrl}
          alt={photo.title}
          fill
          className="object-cover"
        />
        <Chip size="sm" className="absolute top-2 right-2">{photo.category}</Chip>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        
        <h3 className="font-semibold text-lg">
          {photo.title}
        </h3>

        <p className="text-sm text-gray-500">
          {photo.category}
        </p>

        {/* Stats */}
        <div className="flex justify-between items-center pt-2 text-sm text-gray-600">
          
          {/* Likes */}
          <div className="flex items-center gap-2">
            <GoHeart className="text-red-500" />
            <span>{photo.likes}</span>
          </div>

          {/* Downloads */}
          <div className="flex items-center gap-2">
            <FaRegArrowAltCircleDown />
            <span>{photo.downloads}</span>
          </div>

        </div>

      </div>
      <Button variant="outline" className="w-full">View</Button>
    </Card>
  );
};

export default PhotoCard;