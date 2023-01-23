import React from 'react'
import{Box} from "@mui/material"
import Header from "../components/Common/Header";
import LineChart from "../components/Common/LineChart"

const Line = ({isDashboard}) => {

  return (
    <Box m="20px">
    <Header title="Line Chart" subtitle=" Simple Line Chart" />
<Box height="70vh">
<LineChart />
</Box>
</Box>
  )
}

export default Line
