import { Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import Help from './options/Help'
import InformationPolicy from './options/InformationPolicy'
import InformationServices from './options/InformationServices'
import Connect from './options/Connect'

function Footer() {
  return (
    <Card>
    <CardContent>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        display="flex"
      >
        <Grid item xs={12} sm={6} md={3}>
          <Help />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <InformationPolicy />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>      
          <InformationServices />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Connect />
        </Grid>
      </Grid>
    </CardContent>
  </Card>
  )
}

export default Footer