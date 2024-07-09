import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { publicRoutes } from "./routes/routes";
import DefautlLayout from './layouts/DefautlLayout/DefaultLayout'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefautlLayout;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
