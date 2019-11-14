//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
// import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let [home, setHome] = useState(32);
  let [away, setAway] = useState(32);
  let [quarter, setQuarter] = useState(1);

  const homeTouchdown = event => {
    if (away < 39) {
      setHome(home + 7);
    } else {
      setHome(home);
    }
  };
  const homeFieldGoal = event => {
    setHome(home + 3);
  };

  const awayTouchdown = event => {
    if (home < 39) {
      setAway(away + 7);
    } else {
      setAway(away);
    }
  };
  const awayFieldGoal = event => {
    setAway(away + 3);
  };

  const changeQuarter = event => {
    if (quarter === 4) {
      setQuarter(quarter);
    } else {
      setQuarter(quarter + 1);
    }
  };
  let buttonsStyle = {
    width: '60%',
  };

  let divStyle = {
    width: '33%',
  };
  let buttonStyle = {
    borderRadius: '3px',
    width: '98%',
    margin: '1%',
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{home}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        {/*<BottomRow />*/}
        <div className="bottomRow">
          <div className="down">
            <h3 className="down__title">Down</h3>
            <div className="down__value">3</div>
          </div>
          <div className="toGo">
            <h3 className="toGo__title">To Go</h3>
            <div className="toGo__value">7</div>
          </div>
          <div className="ballOn">
            <h3 className="ballOn__title">Ball on</h3>
            <div className="ballOn__value">21</div>
          </div>
          <div className="quarter">
            <h3 className="quarter__title">Quarter</h3>
            <div className="quarter__value">{quarter}</div>
          </div>
        </div>
      </section>
      <section className="buttons" style={buttonsStyle}>
        <div className="homeButtons" style={divStyle}>
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={homeTouchdown} className="homeButtons__touchdown" style={buttonStyle}>Home Touchdown</button>
          <button onClick={event => setQuarter(1)} className="homeButtons__reset" style={buttonStyle}>Reset Touchdown</button>
          <button onClick={homeFieldGoal} className="homeButtons__fieldGoal" style={buttonStyle}>Home Field Goal</button>
        </div>
        <div className="awayButtons" style={divStyle}>
          <button onClick={awayTouchdown} className="awayButtons__touchdown" style={buttonStyle}>Away Touchdown</button>
          <button onClick={event => setQuarter(1)} className="awayButtons__reset" style={buttonStyle}>Reset Touchdown</button>
          <button onClick={awayFieldGoal} className="awayButtons__fieldGoal" style={buttonStyle}>Away Field Goal</button>
        </div>
        <div className="quarterButtons" style={divStyle}>
          <button onClick={changeQuarter} className="quarterButtons__change" style={buttonStyle}>Change Quarter</button>
          <button onClick={event => setQuarter(1)} className="quarterButtons__reset" style={buttonStyle}>Reset Quarter</button>
        </div>
      </section>
    </div>
  );
}

export default App;
