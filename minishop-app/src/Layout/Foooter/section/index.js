import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import {
  ListConnect,
  ListInformationPolicy,
  ListInformationServices,
  ListPaymentMethods,
  ListWebsite,
} from "./api";

// Tổng đài hỗ trợ miễn phí
function Help() {
  const [Payment, setPayment] = React.useState([]);
  React.useEffect(() => {
    setPayment(ListPaymentMethods());
  }, []);
  // console.log("data img", Payment);
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
  );
}
// Thông tin và chính sách
function InformationPolicy() {
  const [Policy, setPolicy] = React.useState([]);
  React.useEffect(() => {
    setPolicy(ListInformationPolicy());
  }, []);
  // console.log("data Policy", Policy);
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
  );
}

// Dịch vụ và thông tin khác
function InformationServices() {
  const [Services, setServices] = React.useState([]);
  React.useEffect(() => {
    setServices(ListInformationServices());
  }, []);
  // console.log("data Services", Services);
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
  );
}

// Kết nối với CellphoneS
function Connect() {
  const [Connect, setConnect] = React.useState([]);
  React.useEffect(() => {
    setConnect(ListConnect());
  }, []);
  // console.log("data img", Connect);
  const [Website, setWebsite] = React.useState([]);
  React.useEffect(() => {
    setWebsite(ListWebsite());
  }, []);
  // console.log("data img", Website);
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Kết nối với CellphoneS
      </Typography>
      <Typography component="div" gutterBottom>
        <Grid container spacing={1}>
          {Connect.map((pay) => (
            <Grid item key={pay.id}>
              <img src={pay.image} alt="payment" />
            </Grid>
          ))}
        </Grid>
      </Typography>

      <Typography variant="h5" gutterBottom>
        Website thành viên
      </Typography>
      <Grid container spacing={1}>
          {Website.map((web) => (
            <Grid item key={web.id}>
              <Typography variant="body2" gutterBottom>
                {web.content}
              </Typography>
              <img src={web.image} alt="website" />
            </Grid>
          ))}
        </Grid>
    </>
  );
}

// Các Sections
const Sections = () => {
  return (
    <Card>
      <CardContent>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          display="flex"
        >
          {" "}
          <Grid item xs={12} sm={6} md={3}>
            <Help />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InformationPolicy />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {" "}
            <InformationServices />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {" "}
            <Connect />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Sections;
