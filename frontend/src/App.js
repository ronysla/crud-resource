import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ResourceList from "./components/ResourceList";
import EditResource from './components/EditResource';
import CreateResource from './components/CreateResource';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <Route exact path="/" component={ResourceList} />
      <Route path="/edit/:id" component={EditResource} />
      <Route path="/create" component={CreateResource} />
    </BrowserRouter>
  );
}

export default App;
