// import "date-fns";
// import React from "react";
// import PropTypes from "prop-types";
// import Grid from "@material-ui/core/Grid";
// import { withStyles } from "@material-ui/core/styles";
// import MomentUtils from "@date-io/moment";
// import {
//   MuiPickersUtilsProvider,
//   TimePicker,
//   DatePicker
// } from "material-ui-pickers";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";

// const styles = {
//   grid: {
//     width: "60%"
//   }
// };

// class MaterialUIPickers extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedDate: null,
//       checkedB: false
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleDateChange = this.handleDateChange.bind(this);
//   }

//   handleDateChange(date) {
//     this.setState({ selectedDate: date });
//   }

//   handleChange(event) {
//     this.setState({ checkedB: event.target.checked });
//   }

//   render() {
//     const { classes } = this.props;

//     return (
//         <DatePicker
//         />
//     );
//   }
// }

// MaterialUIPickers.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(MaterialUIPickers);
