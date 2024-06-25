import { getPhotosFromCategory } from "@/server/db/queries";
import { CategoryView } from "@/components/CategoryView";

export const dynamic = "force-dynamic";

interface CategoryPageProps {
  params: { category: string };
}
export default async function Category({ params }: CategoryPageProps) {
  const data = await getPhotosFromCategory(params.category);
  return (
    <div>
      <CategoryView categories={data[0]} />
    </div>
  );
}
