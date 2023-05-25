import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import {
  ListInformationPolicy,
} from "../api";

// Thông tin và chính sách
export default function InformationPolicy() {
    const [Policy, setPolicy] = React.useState([]);
    React.useEffect(() => {
      setPolicy(ListInformationPolicy());
    }, []);
  return (
    <>
    <Typography variant="h5" gutterBottom>
      Thông tin và chính sách
    </Typography>
    <Container maxWidth="md">
      <Grid container spacing={1}>
        {Policy.map((poli) => (
          <Grid item key={poli.id}>
            <Typography variant="body2" gutterBottom>
              {poli.content}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  </>
  )
}
