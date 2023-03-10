import { Box } from '@mui/system'
import React from 'react'
import { Button,IconButton,Typography, useTheme, Grid } from '@mui/material'
import { tokens } from '../Theme'
import { mockTransactions } from '../data/mockData'
import Header from "../components/Common/Header"
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../components/Common/LineChart";
import BarChart from "../components/Common/BarChart";
import GeographyChart from "../components/Common/GeoChart";
import StatBox from "../components/Common/StatBox";
import ProgressCircle from "../components/Common/ProgressCircle";

const Dashboard = () => {
  const theme=useTheme();
  const colors=tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard"/>
    
      <Box mb={2}>
        <Button sx={{backgroundColor: colors.blueAccent[700], color: colors.grey[100], fontSize: "14px", fontWeight:"bold", padding: "10px 20px "}}>
        <DownloadOutlinedIcon sx={{mr: "10px"}}/>
        DownLoad Reports
        </Button>
      </Box>
      </Box>
      <Grid
        container
        spacing={2}
     >
      <Grid item xs={12} sm={12} md={3}>
      <Box backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
     <StatBox
        title="12,361"
        subtitle="Emails Sent"
        progress="0.75"
       increase="+14%"
       icon={
        <EmailIcon sx={{color: colors.greenAccent[600], fontSize:"26px"}}/>
       }
     />
      </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
      <Box backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
     <StatBox
        title="431,225"
        subtitle=" Sales Obtained"
        progress="0.5"
       increase="+21%"
       icon={
        <PointOfSaleIcon sx={{color: colors.greenAccent[600], fontSize:"26px"}}/>
       }
     />
      </Box>
</Grid>
<Grid item xs={12} sm={12} md={3}>
      <Box backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
     <StatBox
        title="32,441"
        subtitle="New Clients"
        progress="0.30"
       increase="+5%"
       icon={
        <PersonAddIcon sx={{color: colors.greenAccent[600], fontSize:"26px"}}/>
       }
     />
      </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
      <Box backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
     <StatBox
        title="1,325"
        subtitle="Traffic Inbound"
        progress="0.80"
       increase="+43%"
       icon={
        <TrafficIcon sx={{color: colors.greenAccent[600], fontSize:"26px"}}/>
       }
     />
      </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
  <Box
  gridColumn="span 8"
  gridRow="span 2"
  backgroundColor= {colors.primary[400]}
  >
    <Box mt="25px" p="0 30px" display="flex" jutifyContent="space-between" alignItems="center">
      <Box>
        <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
   Revenue Generated
        </Typography>
        <Typography variant="h3" fontWeight="500" color={colors.greenAccent[500]}>
   $59,342,32
        </Typography>
      </Box>
<Box>
  <IconButton>
    <DownloadOutlinedIcon sx={{fontSize:"26px", color: colors.greenAccent[500]}}/>
  </IconButton>
</Box>
    </Box>

    <Box height="250px" mt="-20px">
      <LineChart isDashboard={true}/>
    </Box>
    </Box>
    </Grid>
    <Grid item xs={12} sm={12} md={4}>
    <Box backgroundColor={colors.primary[400]} overflow="auto" height="42vh" mt={3}>
<Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} color={colors.grey[100]} p="15px">
<Typography color={colors.grey[100]} variant="h5" fontWeight="600">
  Recent Transactions
</Typography>
</Box>
{mockTransactions.map((transaction, index)=>(
  <Box
  key={`${transaction.txId}-${index}`}
  display="flex"
  justifyContent="space-between"
  alignItems="center"
  borderBottom={`4px solid ${colors.primary[500]}`}
  p="15px"
  >
    <Box>
    <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
  {transaction.txId}
  </Typography>
  <Typography color={colors.grey[100]}>
  {transaction.user}
</Typography>
      </Box>
      <Box color={colors.grey[100]}>
        {transaction.date}
        </Box>
        <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
        ${transaction.cost}
        </Box>

    </Box>
))}
    </Box>
    </Grid>
    <Grid item xs={12} sm={12} md={4}>
    <Box 
    backgroundColor={colors.primary[400]}
    p="30px"
    >
      <Typography variant="h5" fontWeight="600">
       Campaign
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
        <ProgressCircle size="125"/>
        <Typography variant="h5" color={colors.greenAccent[500]} sx={{mt: "15px"}}>
          $48,352 revenue generated 
        </Typography>
        <Typography variant="h5" fontWeight="600">
       Includes extra misc expenditures and costs
      </Typography>
      </Box>
      </Box>
    </Grid>
    <Grid item xs={12} sm={12} md={4}>
      <Box 
    backgroundColor={colors.primary[400]}
    >
      <Typography variant="h5" fontWeight="600" sx={{p:"30px 30px 0px 30px "}}>
       Sales Quantity
      </Typography>
      <Box height="250px" mt="-20px">
      <BarChart isDashboard={true}/>
      </Box>
      </Box>
</Grid>
<Grid item xs={12} sm={12} md={4}>
      <Box 
    backgroundColor={colors.primary[400]}
    p="30px"
    >
      <Typography variant="h5" fontWeight="600" sx={{mb:"15px"}}>
       Geography Based Traffic
      </Typography>
      <Box height="200px" mt="-20px">
      <GeographyChart isDashboard={true}/>
      </Box>
      </Box>
  </Grid>
  </Grid>
  </Box>
  )
}

export default Dashboard
