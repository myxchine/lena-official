import { countPatients } from "@/server/db/queries";

export const dynamic = "force-dynamic";

const PatientView: React.FC = async () => {
  const count = await countPatients();
  return <div className="text-3xl font-bold">{count[0].count}</div>;
};

export default PatientView;
