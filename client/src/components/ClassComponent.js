import React from "react";
import axios from "axios";
import Display from "./Display";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log(`this is data`, res); // this is object
        this.setState({
          data: res.data
        });
        console.log(this.state.data); // this is array
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="display-container">
        {/* THIS IS CLASS COMPONENT */}
        {this.state.data.map(item => (
          <Display key={item.id} data={item} />
        ))}
      </div>
    );
  }
}

export default ClassComponent;
