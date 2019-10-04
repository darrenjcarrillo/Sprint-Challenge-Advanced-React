import React from "react";
import axios from "axios";
import Display from "./Display";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this._isMounted = false;
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        this.setState({
          data: res.data
        });
      })
      .catch(err => console.log(err));
  }

  componentWillUnmount() {
    this._isMounted = false;
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
