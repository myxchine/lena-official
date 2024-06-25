import { useState } from "react";
import { Patient } from "@/types"; // Adjust path as per your project structure
import { IoClose } from "react-icons/io5";
interface Props {
  onSubmit: (patient: Patient) => void; // Callback function to handle form submission
}

const AddPatientForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<Patient>({
    id: "",
    name: "",
    category: "",
    file_number: "",
    interval: 1, // Default interval set to 1
    season: [], // Initially empty array for season
    created: new Date(),
  });

  const seasonsOptions = [
    "jan/feb",
    "apr/may",
    "jun/jul",
    "sep/oct",
    "nov/dec",
  ];

  const [newSeason, setNewSeason] = useState<string>("");

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle adding a new season
  const handleAddSeason = () => {
    if (newSeason.trim() !== "" && !formData.season.includes(newSeason)) {
      setFormData((prevData) => ({
        ...prevData,
        season: [...prevData.season, newSeason.trim()],
      }));
      setNewSeason("");
    }
  };

  // Handle removing a season
  const handleRemoveSeason = (seasonToRemove: string) => {
    setFormData((prevData) => ({
      ...prevData,
      season: prevData.season.filter((season) => season !== seasonToRemove),
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    // Optionally, reset form fields after submission
    setFormData({
      id: "",
      name: "",
      category: "",
      file_number: "",
      interval: 1, // Reset interval to 1
      season: [], // Reset season to empty array
      created: new Date(),
    });
  };

  return (
    <div className="max-w-md mx-auto w-full p-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded px-8 pt-6 pb-8 mb-4 border border-gray-200"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Patient Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="file_number"
          >
            File Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="file_number"
            type="text"
            placeholder="File Number"
            name="file_number"
            value={formData.file_number}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="interval"
          >
            Interval
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="interval"
            name="interval"
            value={formData.interval}
            onChange={handleChange}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="season"
          >
            Season
          </label>
          <div className="flex items-center">
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="season"
              name="season"
              value={newSeason}
              onChange={(e) => setNewSeason(e.target.value)}
            >
              <option value="">Select Season</option>
              {seasonsOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button
              type="button"
              className="ml-2 bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleAddSeason}
            >
              Add
            </button>
          </div>
          <div className="mt-2  gap-2 flex flex-wrap">
            {formData.season.map((season, index) => (
              <div
                key={index}
                className="bg-gray-200 text-gray-700 pl-4 text-sm px-3 py-1 rounded-full flex items-center justify-between mt-2 "
              >
                {season}
                <button
                  type="button"
                  className="  ml-2  focus:outline-none"
                  onClick={() => handleRemoveSeason(season)}
                >
                  <IoClose />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Add Patient
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatientForm;
