import { Patient } from "@/types";

interface PatientProps {
  patients: Patient[];
  sum: number;
}

export default function PatientList({ patients }: PatientProps) {
  return (
    <div className=" border border-gray-300 rounded-lg overflow-hidden">
      <table className="table-auto w-full space-y-4 border border-gray-300 p-4 rounded-lg overflow-hidden">
        <thead className="border-b border-gray-300 p-4 rounded-t-lg">
          <tr className="text-left text-sm text-black/50 hover:bg-gray-100 cursor-pointer">
            <th className="p-4 font-normal">Patients </th>
            <th className="p-4 font-normal">File</th>
            <th className="p-4 font-normal">Interval </th>
            <th className="p-4 font-normal">Season</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr
              key={patient.id}
              className="text-left border-b pb-4 overflow-hidden text-sm hover:bg-gray-100 cursor-pointer"
            >
              <td className="p-4 w-1/3 ">{patient.name}</td>
              <td className="p-4 text-black\10 w-1/3">soon</td>
              <td className="p-4 w-1/3">{patient.interval}</td>
              <td className="p-4 w-1/3">
                <ul className="flex space-x-2 text-black/50 justify-start">
                  {patient.season &&
                    patient.season.map((season, idx) => (
                      <li key={idx} className="bg-gray-100 p-1 px-2 rounded">
                        {season}
                      </li>
                    ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
