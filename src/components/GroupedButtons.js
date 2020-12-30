import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  button: {
    borderRadius: 50,
    paddingLeft: 0,
    paddingRight: 0,
  },
  label: {
    padding: 10,
  }
});

class GroupedButtons extends React.Component {
  state = {
    counter: 1,
    maxDisabled: false,
    minDisabled: false
  };
  
  disableButtons() {
    this.state.counter + 1 >= this.props.maxValue
      ? 
      this.setState((prevState) => ({ maxDisabled: true}))
      :
      this.setState((prevState) => ({ maxDisabled: false}));

    this.state.counter - 1 <= this.props.minValue
      ? 
      this.setState((prevState) => ({ minDisabled: true}))
      :
      this.setState((prevState) => ({ minDisabled: false}));
      console.log(this.props)
  }

  handleIncrement = (event) => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }))
    this.disableButtons()   
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
        <Button
          onClick={this.handleDecrement}
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={this.state.minDisabled}

          >
          -
        </Button>
          <label
            className={classes.label}  
          >{this.state.counter}</label>
        <Button
          key={this.props.id}
          variant="contained"
          color="primary"
          onClick={this.handleIncrement}
          className={classes.button}
          disabled={this.state.maxDisabled}
        >
          +
        </Button>
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(GroupedButtons);
