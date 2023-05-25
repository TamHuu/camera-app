import { Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { ListPaymentMethods } from "../api";

// Tổng đài hỗ trợ miễn phí
export default function Help() {
    const [Payment, setPayment] = React.useState([]);
    React.useEffect(() => {
      setPayment(ListPaymentMethods());
    }, []);
  
  return (
    <>
    <Typography variant="h5" gutterBottom>
      Tổng đài hỗ trợ miễn phí
    </Typography>
    <Typography variant="body2" gutterBottom>
      Gọi mua hàng <b> 1800.2097 </b> (7h30 - 22h00)
    </Typography>
    <Typography variant="body2" gutterBottom>
      Gọi khiếu nại <b> 1800.2097 </b> (8h00 - 21h30)
    </Typography>
    <Typography variant="body2" gutterBottom>
      Gọi bảo hành <b> 1800.2097 </b> (8h00 - 21h00)
    </Typography>
    <Typography variant="h5" gutterBottom>
      Phương thức thanh toán
    </Typography>
    <Container maxWidth="md">
      <Grid container spacing={1}>
        {Payment.map((pay) => (
          <Grid item key={pay.id}>
            <Card>
              <img src={pay.image} alt="payment" />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </>
  )
}
