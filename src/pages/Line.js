import React from 'react'
import{Box} from "@mui/material"
import Header from "../components/Common/Header";
import LineChart from "../components/Common/LineChart"

const Line = ({isDashboard}) => {

  return (
    <Box m="20px">
    <Header title="Line Chart" subtitle=" Simple Line Chart" />
    <Box overflow="scroll" height="100vh">
<Box  height="75vh"
        sx={{
          '@media(max-width: 600px)': {
            width: '100vh'
          }
        }}>
<LineChart />
</Box>
</Box>
</Box>
  )
}

export default Line
