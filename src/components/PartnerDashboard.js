import React from "react";
import { Container, Typography, Card, CardContent, Grid } from "@mui/material";

function PartnerDashboard() {
  const mockData = {
    totalSales: 5000,
    totalPartners: 20,
    pendingPayments: 1200,
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Partner Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Sales</Typography>
              <Typography variant="h4">${mockData.totalSales}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Partners</Typography>
              <Typography variant="h4">{mockData.totalPartners}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Pending Payments</Typography>
              <Typography variant="h4">${mockData.pendingPayments}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PartnerDashboard;
