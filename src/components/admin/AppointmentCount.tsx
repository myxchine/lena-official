import { getPatients } from "@/server/db/queries";

export const dynamic = "force-dynamic";

const PatientView: React.FC = async () => {
  const patients = await getPatients(500);
  const sum = patients.reduce((acc, patient) => acc + patient.interval, 0);

  return <div className="text-3xl font-bold">{sum}</div>;
};

export default PatientView;
