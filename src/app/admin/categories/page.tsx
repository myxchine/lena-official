import { getPhotosByCategory } from "@/server/db/queries";
import Image from "next/image";
export const dynamic = "force-dynamic";

export default async function Home() {
  const photosByCategory = await getPhotosByCategory();
  console.log(photosByCategory);

  return (
    <div className="flex flex-col p-4 w-full space-y-4">
      <h1 className="text-xl font-bold ">Categories</h1>
      <ul className="flex flex-col space-y-4">
        {photosByCategory.map((category) => (
          <li
            key={category.categoryName}
            className=" rounded-md p-4 w-full border rounded-md p-4"
          >
            <div className="flex flex-col text-left items-center w-full space-y-4">
              <div className="flex justify-between items-center w-full  bg-black/5 rounded-md p-4">
                <h2 className="capitalize w-full">{category.categoryName}</h2>

                <button className="text-2xl flex w-12 text-right">{`->`}</button>
              </div>

              <div className="flex flex-col items-center w-full ">
                <div className="flex items-center w-full grid grid-cols-2 gap-4">
                  {category.photoNames
                    .filter((photoName) => photoName !== "NULL") // Filter out 'NULL' photo names
                    .map((photoName) => (
                      <div>
                        <Image
                          key={photoName}
                          src={`/images/all/${photoName}`}
                          alt={photoName}
                          width={100}
                          height={100}
                          className="rounded aspect-square object-cover w-full"
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
