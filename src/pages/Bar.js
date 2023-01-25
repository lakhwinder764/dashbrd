import React from 'react'
import{Box} from "@mui/material"
import Header from "../components/Common/Header";
import BarChart from '../components/Common/BarChart';

const Bar = () => {
  return (
    <Box m="20px">
        <Header title="Bar Chart" subtitle=" Simple Bar Chart" />
        <Box overflow="scroll" height="100vh">
    <Box height="75vh"
        sx={{
          '@media(max-width: 600px)': {
            width: '100vh'
          }
        }}>
<BarChart/>
    </Box>
    </Box>
    </Box>
  )
}

export default Bar
