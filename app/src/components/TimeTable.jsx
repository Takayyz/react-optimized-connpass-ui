import React from "react";
import "./development.css";
import { WeeklySchedule } from "./organisms/WeeklySchedule";

export const TimeTable = () => {
  return (
    <div className="timetable-container">
      <WeeklySchedule />
    </div>
  );
};
