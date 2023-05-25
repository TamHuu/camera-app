import {  Container, Grid, Typography } from "@mui/material";
import React from "react";
import { ListInformationServices } from "../api";

// Dịch vụ và thông tin khác
export default function InformationServices() {
    const [Services, setServices] = React.useState([]);
    React.useEffect(() => {
      setServices(ListInformationServices());
    }, []);
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Dịch vụ và thông tin khác
      </Typography>
      <Container maxWidth="md">
        <Grid container spacing={1}>
          {Services.map((ser) => (
            <Grid item key={ser.id}>
              <Typography variant="body2" gutterBottom>
                {ser.content}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}
