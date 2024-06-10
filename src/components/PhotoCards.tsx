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
            loading={index > 5 ? "lazy" : index < 2 ? "eager" : undefined} // Lazy loading for index > 5, eager loading for index < 2, undefined otherwise
            priority={index < 2} // Set priority to true for index < 2
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoCards;
