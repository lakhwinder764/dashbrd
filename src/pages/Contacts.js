import React from 'react'
import {Box} from "@mui/material"
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {tokens} from "../Theme";
import {mockDataContacts} from "../data/mockData"; 
import Header from '../components/Common/Header';
import {useTheme} from "@mui/material";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode); 
  const columns=[
    { field: "id", HeaderName:"ID", flex: 0.5 },
    {filed:"registrarId", HeaderName:"Registrar ID"},
    { field: "name", HeaderName:"Name", flex:1, cellClassName:"name-column--cell" },
    { field: "age", HeaderName:"Age", type:"number" },
    { field: "address", HeaderName:"Address", flex: 1 },
    { field: "city", HeaderName:"City", flex: 1},
    { field: "zipCode", HeaderName:"ZipCode", flex: 1 },
    { field: "phone", HeaderName:"Phone Number", flex: 1 },
    { field: "email", HeaderName:"Email", flex: 1 },
  ]
  return (
      <Box m="20px">
      <Header title="CONTACTS" subtitle="List of Contacts for future reference"/>
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
            '& .MuiDataGrid-toolbarContainer .MuiButton-text':{
                color:`${colors.grey[100]} !important`
            }
      }}> 
      <DataGrid
       rows={mockDataContacts}
       columns={columns}
       components={{Toolbar: GridToolbar}}

      />
      </Box>
    </Box>
  )
}

export default Contacts
