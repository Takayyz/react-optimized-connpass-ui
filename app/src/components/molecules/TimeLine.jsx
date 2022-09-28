import React from "react";
import { BasicCard } from "./BasicCard";
import { format } from "date-fns";
import { Typography } from "@mui/material";

export const TimeLine = ({ targetDate, post }) => {
  if (!post) return <div className="timeline-container"></div>;
  const targetEvents = post.events.filter((event) => {
    return targetDate === format(new Date(event.started_at), "yyyyMMdd");
  });

  const year = parseInt(targetDate.substring(0, 4));
  const month = parseInt(targetDate.substring(4, 6));
  const day = parseInt(targetDate.substring(6, 8));

  return (
    <div className="timeline-container">
      <Typography sx={{ fontSize: 14, mt: 1 }} gutterBottom>
        {format(new Date(year, month - 1, day), "iiii")}
      </Typography>
      {targetEvents.map((event) => {
        return <BasicCard event={event} />;
      })}
    </div>
  );
};
