import Image from "next/image";

const PhotoCards = ({ data }: { data: string[] }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 p-2">
      {data.map((url, index) => (
        <div key={index} className="w-full">
          <Image
            src={url}
            alt={`Image ${index + 1}`}
            width={400}
            height={600}
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoCards;
