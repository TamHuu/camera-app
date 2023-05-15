import { Box, Container, Grid, Rating, Typography } from "@mui/material";
import React from "react";


const VND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

function Description() {


  return (
    <Container sx={{ py:3}} >
      {/* End hero unit */}
      <Grid container spacing={4}>
      
          <Grid item  xs={12} sm={6} md={4}>
            <Typography gutterBottom variant="h5" component="h2">
            iPhone 12 Pro Max 128GB     
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                color="error"
                variant="h6"
                sx={{ fontWeight: "bold" }}
              >
                {VND.format(25000)}
              </Typography>
              <Typography sx={{ textDecorationLine: "line-through" }}>
                {VND.format(10000)}
              </Typography>
            </Box>
            <Rating name="read-only" value={5} readOnly />
          </Grid>
       
      </Grid>
    </Container>
  );
}

export default Description;
