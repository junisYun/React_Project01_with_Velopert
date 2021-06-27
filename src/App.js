import React, {Component} from 'react';
import Contact from './Components/Contact'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:''
    }
  }
  render() {
    return (
      <div>
        <Contact></Contact>
      </div>
    );
  }
}
App.defaultProps= {
  value:12,
  name:'welcom'
}

export default App;
