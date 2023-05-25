import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { ListProducts } from "../../../data";
import { Link } from "react-router-dom";

const VND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

function CardProduct() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    setData(ListProducts());
  }, []);

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {data.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <Link to="/products-detail" style={{ textDecoration: "none" }}>
              {/* {`/detail/${id}`}   */}
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  cusor: "pointer",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    backgroundColor: "red",
                    color: "white",
                    top: 10,
                    left: 8,
                    borderRadius: "0 10px",
                  }}
                >
                  Giảm 20%
                </Box>

                <CardMedia
                  component="img"
                  sx={{
                    pt: "15%",
                  }}
                  image={card.image}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.name}
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
                      {VND.format(card.price)}
                    </Typography>
                    <Typography sx={{ textDecorationLine: "line-through" }}>
                      {VND.format(card.salePrice)}
                    </Typography>
                  </Box>
                  <Rating name="read-only" value={5} readOnly />
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CardProduct;
