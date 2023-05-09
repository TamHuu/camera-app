import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ListProducts } from "../../data";
import { Rating } from "@mui/material";
import ImageContainer from "./ImageContainer";

const theme = createTheme();

export default function ProductList() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    setData(ListProducts());
  }, []);

  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6,
            }}
          >
            <Container>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                SmartPhone
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                Những sản phẩm dưới đây sẽ cho bạn cảm giác tốt nhất khi sử dụng
                và rất phù hợp cho sinh viên.
              </Typography>
            </Container>
          </Box>
          <Box>
            <ImageContainer/>
          </Box>
          <Container sx={{ py: 8, cursor: "pointer" }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {data.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        pt: "10%",
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
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
        </Box>
        {/* End footer */}
      </ThemeProvider>
    </>
  );
}
