import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const styles = (theme) => ({
  label: {
    padding: 12,
    MozUserSelect: "none",
    WebkitUserSelect: "none",
    msUserSelect: "none"
  },
});

class GroupedButtons extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 1,
      maxDisabled: false,
      minDisabled: false,
    }
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
    this.disableButtons = this.disableButtons.bind(this)
  }

  disableButtons() {
    this.state.counter + 1 >= this.props.maxValue
      ? this.setState((prevState) => ({ maxDisabled: true }))
      : this.setState((prevState) => ({ maxDisabled: false }));

    this.state.counter - 1 <= this.props.minValue
      ? this.setState((prevState) => ({ minDisabled: true }))
      : this.setState((prevState) => ({ minDisabled: false }));
      console.log("In im sate callback: " + this.state.counter)

  }

  handleIncrement = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }), this.disableButtons());
    console.log("In increment: " + this.state.counter)
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }), this.disableButtons());
    console.log("In decrement: " + this.state.counter)
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Fab
          size="small"
          onClick={this.handleDecrement}
          color="primary"
          disabled={this.state.minDisabled}
        >
          <RemoveIcon fontSize="small" />
        </Fab>
        <label className={classes.label}>{this.state.counter}</label>
        <Fab
          size="small"
          key={this.props.id}
          color="primary"
          onClick={this.handleIncrement}
          disabled={this.state.maxDisabled}
        >
          <AddIcon fontSize="small" />
        </Fab>
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(GroupedButtons);
