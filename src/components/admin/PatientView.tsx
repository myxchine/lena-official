import { getPatients } from "@/server/db/queries";
import PatientList from "@/components/admin/ui/PatientList";
export const dynamic = "force-dynamic";

interface PatientViewProps {
  limit: number;
  filter: string;
}

const PatientView: React.FC<PatientViewProps> = async ({ limit, filter }) => {
  const patients = await getPatients(limit);
  const filteredPatients = patients.filter((patient) => patient.interval === 3);
  
  return (
    <div>
      <PatientList
        
        patients={filter === "all" ? patients : filteredPatients}
      />
    </div>
  );
};

export default PatientView;
