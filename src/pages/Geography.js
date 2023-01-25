import React from 'react'
import{Box, useTheme} from "@mui/material"
import Header from "../components/Common/Header";
import { tokens } from '../Theme'
import GeoChart from '../components/Common/GeoChart';

const Geography = () => {
    const theme =useTheme();
    const colors= tokens(theme.palette.mode);
  return (
    <Box m="20px">
        <Header title="Geographic Chart" subtitle=" Simple Geographic Chart" />
        <Box overflow="scroll" height="100vh">
    <Box         
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
        height="75vh"
        sx={{
          '@media(max-width: 600px)': {
            width: '100vh'
          }
        }}
        >
   <GeoChart />
    </Box>
    </Box>
    </Box>
  )
}

export default Geography