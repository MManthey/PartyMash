import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const styles = (theme) => ({
  label: {
    padding: 12,
  },
});

class GroupedButtons extends React.Component {
  state = {
    counter: 1,
    maxDisabled: false,
    minDisabled: false,
  };

  disableButtons() {
    this.state.counter + 1 >= this.props.maxValue
      ? this.setState((prevState) => ({ maxDisabled: true }))
      : this.setState((prevState) => ({ maxDisabled: false }));

    this.state.counter - 1 <= this.props.minValue
      ? this.setState((prevState) => ({ minDisabled: true }))
      : this.setState((prevState) => ({ minDisabled: false }));
    console.log(this.state.counter);
  }

  handleIncrement = (event) => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    this.disableButtons();
  };

  handleDecrement = () => {
    this.setState((state) => ({ counter: state.counter - 1 }));
    this.disableButtons();
  };

  render() {
    const { classes } = this.props;
    return (
      // <ButtonGroup
      //   size="small"
      //   variant="text"
      //   aria-label="small outlined button group"
      // >
      <>
        <Fab
          size="small"
          onClick={this.handleDecrement}
          color="primary"
          // className={classes.button}
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
          // className={classes.button}
          disabled={this.state.maxDisabled}
        >
          <AddIcon fontSize="small" />
        </Fab>
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(GroupedButtons);
