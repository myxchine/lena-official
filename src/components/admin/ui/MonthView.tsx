"use client";

import { schedulePatients } from "@/utils/GenerateCalender/SchedulePatients";
import { generateTimeSlots } from "@/utils/GenerateCalender/GenerateTimeSlots";
import { calendarData } from "@/app/admin/calender/Data";
import { Patient } from "@/types";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

const MonthView = ({ patients }: { patients: Patient[] }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const season = searchParams.get("season");

  if (!season) {
    router.push("/admin/calender");
  }

  const monthData = calendarData.find((month) =>
    month.months.includes(season as string)
  );

  if (!monthData) {
    return <div>Season not found</div>;
  }

  console.log(monthData);

  const timeSlots = generateTimeSlots(calendarData);
  const schedule = schedulePatients(patients, timeSlots);

  // Filter schedule by the selected season
  const filteredSchedule = Object.entries(schedule).filter(
    ([slotIdentifier]) => {
      const [month] = slotIdentifier.split("-");
      return monthData.months.includes(month);
    }
  );

  // Map all schedule data
  const mappedSchedule = filteredSchedule.map(([slotIdentifier, patients]) => {
    const [month, week, day, slotIndex] = slotIdentifier.split("-");
    const slotData = {
      month,
      week,
      day,
      slotIndex,
      patients,
    };
    return slotData;
  });

  // Group slots by season, week, and day of the week
  const groupedSchedule = {};
  mappedSchedule.forEach((slotData) => {
    if (!groupedSchedule[slotData.month]) {
      groupedSchedule[slotData.month] = {};
    }
    if (!groupedSchedule[slotData.month][slotData.week]) {
      groupedSchedule[slotData.month][slotData.week] = {};
    }
    if (!groupedSchedule[slotData.month][slotData.week][slotData.day]) {
      groupedSchedule[slotData.month][slotData.week][slotData.day] = [];
    }
    groupedSchedule[slotData.month][slotData.week][slotData.day].push(slotData);
  });

  return (
    <div className="calendar flex flex-col gap-4">
      <div className="calendar flex flex-col gap-8 ">
        {Object.entries(groupedSchedule).map(([month, weeks], idx) => (
          <div key={idx} className="month w-full space-y-4 ">
            <div className="flex flex-row gap-4">
              <button className="change-month-button border rounded-md p-4">
                <h2>{monthData.name}</h2>
              </button>

              <h2 className="change-month-button border border-transparent rounded-md p-4  bg-green-100">
                Taken{" "}
                {
                  mappedSchedule.filter((slot) => slot.patients.length > 0)
                    .length
                }
              </h2>
              <h2 className="change-month-button border border-transparent rounded-md p-4 bg-gray-200">
                Available{" "}
                {
                  mappedSchedule.filter((slot) => slot.patients.length === 0)
                    .length
                }
              </h2>
            </div>

            <section className="flex flex-row gap-8">
              {Object.entries(weeks).map(([week, days], weekIdx) => (
                <div
                  key={weekIdx}
                  className="week w-full space-y-4  border rounded-md p-4  "
                >
                  {Object.entries(days).map(([day, slots], dayIdx) => (
                    <div key={dayIdx} className="day w-full space-y-4 ">
                      <Link
                        href={`/admin/calender/day?month=${monthData.months[0]}&week=${week}&day=${day}`}
                      >
                        <div className="flex flex-row gap-4 justify-between items-center border rounded-md">
                          <h4 className=" px-4 h-12   flex justify-center items-center ">
                            {day}
                          </h4>

                          <button className="text-xl cursor-pointer w-12 h-12  ">{`->`}</button>
                        </div>
                      </Link>

                      <section className="flex flex-col gap-4  ">
                        {slots.map((slotData, slotIdx) => (
                          <div key={slotIdx} className="slot ">
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
                  ))}
                </div>
              ))}
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthView;
