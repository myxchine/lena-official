"use client";

import { schedulePatients } from "@/utils/GenerateCalender/SchedulePatients";
import { generateTimeSlots } from "@/utils/GenerateCalender/GenerateTimeSlots";
import { calendarData, slotsTimes } from "@/app/admin/calender/Data";
import { Patient } from "@/types";
import { useSearchParams, useRouter } from "next/navigation";

const DayView = ({ patients }: { patients: Patient[] }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const month = searchParams.get("month");
  const week = searchParams.get("week");
  const day = searchParams.get("day");

  if (!month || !week || !day) {
    router.push("/admin/calender");
    return null;
  }

  const monthData = calendarData.find((monthData) =>
    monthData.months.includes(month as string)
  );

  if (!monthData) {
    return <div>Month not found</div>;
  }

  const timeSlots = generateTimeSlots(calendarData);
  const schedule = schedulePatients(patients, timeSlots);

  console.log(schedule);

  // Filter schedule by the specified day
  const filteredSchedule = Object.entries(schedule).filter(
    ([slotIdentifier]) => {
      const [slotMonth, slotWeek, slotDay] = slotIdentifier.split("-");
      return (
        slotMonth === month &&
        slotWeek === week &&
        slotDay.toLowerCase() === day.toLowerCase()
      );
    }
  );

  // Map all schedule data
  const mappedSchedule = filteredSchedule.map(([slotIdentifier, patients]) => {
    const [slotMonth, slotWeek, slotDay, slotIndex] = slotIdentifier.split("-");
    const slotData = {
      month: slotMonth,
      week: slotWeek,
      day: slotDay,
      slotIndex,
      time: slotsTimes[parseInt(slotIndex - 1, 10)],
      patients,
    };
    return slotData;
  });

  return (
    <div className="calendar flex flex-col gap-4">
      <div className="hidden">
        <h2>Total slots: {mappedSchedule.length}</h2>
        <h2>Total patients: {patients.length}</h2>
        <h2>
          Taken slots:{" "}
          {mappedSchedule.filter((slot) => slot.patients.length > 0).length}
        </h2>
        <h2>
          Available slots:{" "}
          {mappedSchedule.filter((slot) => slot.patients.length === 0).length}
        </h2>
      </div>

      <div className="calendar flex flex-col gap-8">
        <div className="day w-full space-y-4">
          <div className="flex flex-row gap-4">
            <button className="change-month-button border rounded-md p-4">
              <h4>{`${monthData.name} - ${week} - ${day}`}</h4>
            </button>

            <h2 className="change-month-button border border-transparent rounded-md p-4  bg-green-100">
              Taken{" "}
              {mappedSchedule.filter((slot) => slot.patients.length > 0).length}
            </h2>
            <h2 className="change-month-button border border-transparent rounded-md p-4 bg-gray-200">
              Available{" "}
              {
                mappedSchedule.filter((slot) => slot.patients.length === 0)
                  .length
              }
            </h2>
          </div>
          <section className="flex flex-col gap-4">
            {mappedSchedule.map((slotData, slotIdx) => (
              <div key={slotIdx} className="slot flex flex-row gap-4">
                <div className="slot-time text-sm text-black bg-black/5 p-2 w-16 rounded-md items-center justify-center flex">
                  {slotData.time}
                </div>
                {slotData.patients.length > 0 ? (
                  slotData.patients.map((patient, patientIdx) => (
                    <p
                      key={patientIdx}
                      className="text-sm text-black bg-green-100 p-4 rounded-md w-full"
                    >
                      {patient.name}
                    </p>
                  ))
                ) : (
                  <p className="text-sm text-black/50 bg-gray-200 p-4 rounded-md w-full">
                    Available
                  </p>
                )}
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default DayView;
