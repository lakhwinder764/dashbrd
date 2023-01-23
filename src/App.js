import React, {useState} from 'react'
import { ColorModeContext, useMode } from './Theme';
import { ThemeProvider, CssBaseline} from '@mui/material';
import AppBar from './components/Common/AppBar';
// import Sidebar from './components/Common/Sidebar';
import Dashboard from './pages/Dashboard';
import Sidebar from "./components/Common/Sidebar";
import Contacts from './pages/Contacts';
import Bar from './pages/Bar';
import Faq from './pages/Faq';
import Form from './pages/Form';
import Geography from './pages/Geography';
import Invoices from './pages/Invoices';
import Line from './pages/Line';
import Pie from './pages/Pie';
import Team from './pages/Team';
import Calender from './pages/Calender';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>

      
      <ThemeProvider theme={theme}>
<CssBaseline/>
<div className="app">
  <Sidebar isSidebar={isSidebar}/>
<main className="content">
  <AppBar setIsSidebar={setIsSidebar}/>
  
  <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/bar" element={<Bar/>}/> */}
    <Route path="/contacts" element={<Contacts/>}/>
    <Route path="/faq" element={<Faq/>}/>
    <Route path="/form" element={<Form/>}/>
    <Route path="/geography" element={<Geography/>}/>
    <Route path="/invoices" element={<Invoices/>}/>
    <Route path="/pie" element={<Pie/>}/>
    <Route path="/team" element={<Team/>}/>
    <Route path="/line" element={<Line/>}/>
    <Route path="/calender" element={<Calender/>}/>
  </Routes>
</main>
</div>
      </ThemeProvider>

    
    </ColorModeContext.Provider>

  )
}

export default App
