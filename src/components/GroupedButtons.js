import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  button: {
    borderRadius: 50,
  },
});

class GroupedButtons extends React.Component {
  state = { counter: 0 };

  handleIncrement = () => {
    this.setState((state) => ({ counter: state.counter + 1 }));
  };

  handleDecrement = () => {
    this.setState((state) => ({ counter: state.counter - 1 }));
  };
  render() {
    const { classes } = this.props;
    return (
      <ButtonGroup
        size="small"
        variant="text"
        aria-label="small outlined button group"
      >
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleIncrement}
          className={classes.button}
        >
          +
        </Button>
        <Button>{this.state.counter}</Button>
        <Button
          onClick={this.handleDecrement}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          -
        </Button>
      </ButtonGroup>
    );
  }
}

export default withStyles(styles, { withTheme: true })(GroupedButtons);
