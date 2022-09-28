import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { format } from "date-fns";

export const BasicCard = ({ event }) => {
  return (
    <Card sx={{ minWidth: 100, minHeight: 200, margin: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 10 }} gutterBottom>
          {format(new Date(event.started_at), "HH:mm")}~
        </Typography>
        <Typography sx={{ fontSize: 10 }} gutterBottom>
          {event.title}
        </Typography>
        <Typography sx={{ fontSize: 10 }} gutterBottom>
          {event.event_url}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
};
