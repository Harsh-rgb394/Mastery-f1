import React from "react";
import { Container } from "@material-ui/core";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
// appjs is parrent componet whose bioth posts and form we get id from posts ke anar post and give 
// app js and give to form updating particualr post 


const App = () => {

  
  return (
    // container to centre everthing
    // please BrowserRouter se pure ko wrap karana okay varna error aa e jayega 
       <BrowserRouter>
    <Container maxWidth="lg">
      {/* inhrit ka mtlb parnet ke properties child mein dircet use ho jaye  */}
      <Navbar/>
      
      <Routes>
        <Route path="/" exact  Component={Home} />
        <Route path="/auth" exact Component={Auth}/>

      </Routes>
      
      
    </Container>
    </BrowserRouter>
    
   

  );
};

export default App;
