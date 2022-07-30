import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import BoxAssignment from "./components/Box";

function App() {
    return (
        <Router>
            <br />
            <BoxAssignment />
        </Router>
    );
}

export default App;