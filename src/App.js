import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeRu from "./pages/homeru";
import HomeUz from "./pages/homeuz";
import Common from "./pages/homecommon/Common";
import NotFound from "./pages/notFound/NotFound";
import "./styles/main.scss";
import "./styles/_responsive.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Common} />
          <Route exact path="/ru" component={HomeRu} />
          <Route exact path="/uz" component={HomeUz} />
          <Route exact path="" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
