import { Divider } from "@material-ui/core";
import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Description from "./Description.js";
import DetailImage from "./DetailImage.js";

function ProductDetail() {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Typography variant="h5"   sx={{ fontWeight: "bold" }}>
        Samsung Galaxy M14 5G 4GB 128GB
      </Typography>
      <Divider variant="middle" />
      <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
          <DetailImage />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Description />
        </Grid>
    
      </Grid>
    </Container>
  );
}

export default ProductDetail;
