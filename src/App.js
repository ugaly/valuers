// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// import routes from "./routes";
// import withTracker from "./withTracker";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

// export default () => (
//   <Router basename={process.env.REACT_APP_BASENAME || ""}>
//     <div>
//       {routes.map((route, index) => {
//         return (
//           <Route
//             key={index}
//             path={route.path}
//             exact={route.exact}
//             component={withTracker(props => {
//               return (
//                 <route.layout {...props}>
//                   <route.component {...props} />
//                 </route.layout>
//               );
//             })}
//           />
//         );
//       })}
//     </div>
//   </Router>
// );
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

export default () => (
  // <Router basename={process.env.REACT_APP_BASENAME || ""}>
  <Router>
    <Switch>
     
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={withTracker(props => (
            <route.layout {...props}>
              <route.component {...props} />
            </route.layout>
          ))}
        />
      ))}
     
      {/* Redirect to error page for invalid URLs */}
      <Redirect to="/evrb/errors" />
    </Switch>
  </Router>
);
