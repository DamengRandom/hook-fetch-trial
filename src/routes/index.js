import React, { useContext, useReducer, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { BaseContext } from "../context";
import { BaseReducer as baseReducer } from "../reducer";
// import App from "../components/App";
// import CountDemo from "../components/CountDemo";
// import FetchDemo from "../components/FetchDemo";
// import FetchDetails from "../components/FetchDetails";
const Home = React.lazy(() => import("../components/App"));
const CountDemo = React.lazy(() => import("../components/CountDemo"));
const FetchDemo = React.lazy(() => import("../components/FetchDemo"));
const FetchDetails = React.lazy(() => import("../components/FetchDetails"));

function Routes() {
  const initailState = useContext(BaseContext);
  const [state, dispatch] = useReducer(baseReducer, initailState);
  console.log({ state });

  return (
    <BrowserRouter>
      <BaseContext.Provider value={{ state, dispatch }}>
        <Suspense fallback={<div>Sorry not reachable yet ..</div>}>
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/count-demo" component={CountDemo} />
            <Route path="/fetch-demo" component={FetchDemo} exact={true} />
            <Route path="/fetch-demo/:id" component={FetchDetails} />
          </Switch>
        </Suspense>
      </BaseContext.Provider>
    </BrowserRouter>
  );
}

export default Routes;
