import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CardProduct from "../ProductList/CardProduct";
import styled from "styled-components";
import SwiperProduct from "./Swiper";

const theme = createTheme();

const ContainerImage = styled.div`
  background-image: url("https://www.apple.com/vn/iphone/home/images/overview/hero/hero_iphone_14__de41900yuggi_large.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  width: 100%;
`;
export default function ProductList() {
  return (
    <>
      <SwiperProduct />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
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
            <ContainerImage />
          </Box>
          {/* Danh sách sản phẩm */}
          <CardProduct />
        </main>
      </ThemeProvider>
    </>
  );
}
