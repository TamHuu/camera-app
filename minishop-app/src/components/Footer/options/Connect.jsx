import React from "react";
import {  Grid, Typography } from "@mui/material";
import { ListConnect, ListWebsite } from "../api";

export default function Connect() {
    const [Connect, setConnect] = React.useState([]);
  React.useEffect(() => {
    setConnect(ListConnect());
  }, []);
  // console.log("data img", Connect);
  const [Website, setWebsite] = React.useState([]);
  React.useEffect(() => {
    setWebsite(ListWebsite());
  }, []);
  return (
    <>
    <Typography variant="h5" gutterBottom>
      Kết nối với CellphoneS
    </Typography>
    <Typography component="div" gutterBottom>
      <Grid container spacing={1}>
        {Connect.map((pay) => (
          <Grid item key={pay.id}>
            <img src={pay.image} alt="payment" />
          </Grid>
        ))}
      </Grid>
    </Typography>

    <Typography variant="h5" gutterBottom>
      Website thành viên
    </Typography>
    <Grid container spacing={1}>
      {Website.map((web) => (
        <Grid item key={web.id}>
          <Typography variant="body2" gutterBottom>
            {web.content}
          </Typography>
          <img src={web.image} alt="website" />
        </Grid>
      ))}
    </Grid>
  </>
  )
}
