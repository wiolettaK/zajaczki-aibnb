import * as React from "react";
import colors from "styles/variables.module.scss";
import SimplePopover from "./popover";
import Calendar from "./calendar";
import CityName from "./countrySelector";
import "./home.scss";

const Home: React.FunctionComponent<any> = (): JSX.Element => {
  return (
    <div>
      <header className="main-header">
        <button>Zaloguj się</button>
        <button>Zarejestruj się</button>
      </header>
      <div className="wrapper">
        <div>
          <CityName />
        </div>
        <div>
          <Calendar />
        </div>
        <div>
          <SimplePopover />
        </div>
        <button>Szukaj</button>
      </div>
    </div>
  );
};

export default Home;
