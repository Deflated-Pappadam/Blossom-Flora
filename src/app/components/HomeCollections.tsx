import Image from "next/image";
import Link from "next/link";
import React from "react";

type CollectionProps = {
  url: string;
  name: string;
  id?: string;
};

function HomeCollections(props: CollectionProps) {
  const content = (
    <div className="group relative overflow-hidden  bg-gray-100 aspect-square cursor-pointer">
      {/* Image */}
      <Image
        width={400}
        height={400}
        src={props.url}
        alt={props.name}
        className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-end p-6">
        <div className="transform translate-y-4 transition-all duration-500 group-hover:translate-y-0">
          <h3 className="text-white font-medium text-lg leading-tight opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {props.name}
          </h3>
          <p className="text-white/80 text-sm mt-1 opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100">
            View Details
          </p>
        </div>
      </div>
      
      {/* Subtle Border */}
      <div className="absolute inset-0  ring-1 ring-inset ring-black/10" />
    </div>
  );

  // If ID is provided, wrap with Link for navigation
  if (props.id) {
    return (
      <Link href={`/item/${props.id}`} className="block">
        {content}
      </Link>
    );
  }

  return content;
}

export default HomeCollections;