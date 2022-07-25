import React from "react";
// Define a custom component for handling the root position object
class GeoPosition extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.formData };
  }

  onChange(name) {
    return (event) => {
      this.setState(
        {
          [name]: parseFloat(event.target.value),
        },
        () => this.props.onChange(this.state)
      );
    };
  }

  render() {
    const { lat, lon } = this.state;
    return (
      <div>
        <input type="number" value={lat} onChange={this.onChange("lat")} />
        <input type="number" value={lon} onChange={this.onChange("lon")} />
      </div>
    );
  }
}
export default GeoPosition;
