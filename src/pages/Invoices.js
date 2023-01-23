import React from 'react'
import {Box,Typography} from "@mui/material"
import {DataGrid} from "@mui/x-data-grid";
import {tokens} from "../Theme";
import {mockDataInvoices} from "../data/mockData"; 
import Header from '../components/Common/Header';
import {useTheme} from "@mui/material";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode); 
  const columns=[
    { field: "id", HeaderName:"ID", flex: 0.5 },
    {filed:"registrarId", HeaderName:"Registrar ID"},
    { field: "name", HeaderName:"Name", flex:1, cellClassName:"name-column--cell" },
    { field: "phone", HeaderName:"Phone Number", flex: 1 },
    { field: "email", HeaderName:"Email", flex: 1 },
    { field: "cost", HeaderName:"Cost", flex: 1, renderCell: (params)=> (
        <Typography color={colors.greenAccent[500]}>
            ${params.row.cost}
        </Typography>

    ) },
    { field: "date", HeaderName:"Date", flex: 1 },
  ]
  return (
      <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoice for future reference"/>
      <Box 
      m="40px 0 0 0 " 
      height="75vh" 
      sx={{
        '& .MuiDataGrid-root': {
          border:'none'
        },
          '& .MuiDataGrid-cell' : {
            borderBottom: 'none'
          },
            '& .name-column--cell': {
              color: colors.greenAccent[300]
            },
            '& .MuiDataGrid-columnHeaders': {
              background: colors.blueAccent[700],
              borderBottom: 'none',
            },
            '& .MuiDataGrid-virtualScroller':{
              backgroundColor:colors.primary[400],
            },
            '& .MuiDataGrid-footerContainer':{
             borderTop: 'none',
             backgroundColor: colors.blueAccent[700],
            },
        '& .MuiCheckbox-root' :{
            color: `${colors.greenAccent[200]} !important`
        }
      }}> 
      <DataGrid
      checkboxSelection
       rows={mockDataInvoices}
       columns={columns}

      />
      </Box>
    </Box>
  )
}

export default Invoices
