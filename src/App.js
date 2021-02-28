import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Homepage from "./pages/Homepage";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" component={Homepage}/>
                    <Route path="*">
                        <Redirect to='/' />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;

// fix sizing for under 500px everywhere
// import font