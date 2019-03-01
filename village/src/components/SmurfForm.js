import React from 'react';

class SmurfForm extends React.Component {
  state = {
    smurf: {
      name: '',
      age: '',
      height: ''
    }
  };


  handleSubmit = e => {
    console.log("The handleSubmit() function is running!");
    e.preventDefault();
    this.props.addSmurf(e, this.state.smurf);

    this.setState({
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    });
  }

  handleInputChange = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === "age") {
      value = parseInt(value, 10);
    }
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [e.target.name]: value
      }
    }));
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
