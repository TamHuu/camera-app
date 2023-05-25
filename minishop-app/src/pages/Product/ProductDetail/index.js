import { Divider } from "@material-ui/core";
import { Box, Container, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import Description from "./Description.js";
import SwiperDetailImage from "./SwiperDetailImage.js/index.js";

function ProductDetail() {
  return (
    <Container sx={{ py: 3 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Samsung Galaxy M14 5G 4GB 128GB
          </Typography>
        </Grid>
        <Grid item>
          <Rating value={5} />
        </Grid>
        <Grid item>
          <Typography variant="body2">1 đánh giá</Typography>
        </Grid>
      </Grid>

      <Box pt={2} pb={2}>
        <Divider variant="middle" />
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <SwiperDetailImage />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Description />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetail;
