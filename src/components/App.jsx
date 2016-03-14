import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import './App.scss';

const App = (props) => {
  return (
    <div className="App-mainContent">
      <h1>some app</h1>
      <Link to="/1/sentences">generate</Link>
      <div>
        Generate {props.params.quantity} {props.params.unit}
      </div>
    </div>
  );
};

App.propTypes = {
  params: PropTypes.object,
};

export default App;
