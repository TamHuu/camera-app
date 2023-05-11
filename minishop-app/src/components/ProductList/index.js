import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ImageContainer from "./ImageContainer";
import CardProduct from "./CardProduct";
import SwiperProduct from "../../Layout/SwiperProduct";

const theme = createTheme();

export default function ProductList() {

  return (
    <>
    <SwiperProduct/>
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
     {/* Danh sách sản phẩm */}
     <CardProduct/>
        </main>
      
      </ThemeProvider>
    </>
  );
}
