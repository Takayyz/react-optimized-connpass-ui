import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { format, addDays, eachDayOfInterval } from "date-fns";

import { TimeLine } from "../molecules/TimeLine";

export const WeeklySchedule = () => {
  const [post, setPost] = useState();
  const [targetDate] = useState(() => {
    const DateArray = eachDayOfInterval({
      start: new Date(),
      end: addDays(new Date(), 6),
    });
    return DateArray.map((date) => {
      return format(date, "yyyyMMdd");
    });
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/event", {
        params: {
          keyword: "php",
          ymd: targetDate.join(","),
          order: 2,
        },
      })
      .then((response) => {
        setPost(response.data);
      });
  }, []);

  return (
    <div className="weeklyschedule-container">
      {targetDate.map((date, index) => {
        return <TimeLine key={index} targetDate={date} post={post} />;
      })}
    </div>
  );
};
