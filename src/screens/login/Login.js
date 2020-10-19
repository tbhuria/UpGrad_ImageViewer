import React, { Component } from "react";
import "./Login.css";
import Header from "../../common/header/Header";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import { Redirect } from "react-router-dom";

const styles = (theme) => ({
  root: {
    top: "90px",
    width: "400px",
    position: "fixed",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: "1%",
    transform: "translate(-50%, 0)",
    overflow: "auto",
  },
  input: {
    marginRight: theme.spacing(5),
  },
});

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      usernameRequired: "dispNone",
      passwordRequired: "dispNone",
      incorrectUsernamePassword: "dispNone",
      isLogin: false,
    };
  }

  loginClickHandler = () => {
    let username = "admin";
    let password = "password";
    let access_token =
      "IGQVJYb1EzWnNMNXdEaDdzMXZA3WFNPQ3AwejZAfQnJfNzFQYnlYcW1yQlhlSGd2X3o5UkVWNDJYV2kyTkVQYnNIVkt4ZA05vZAkQ0RG5WNmNoUE93Y1J0dTRRRWhHSWI1UXpTQ0RRQ2hLbF8tVGFSbXl2TDA1c0VJR1VZAVy1V";
    let user_id = "117841444178512378";
    //Check username and password
    if (this.state.username === "" || this.state.password === "") {
      this.state.username === ""
        ? this.setState({ usernameRequired: "dispBlock" })
        : this.setState({ usernameRequired: "dispNone" });
      this.state.password === ""
        ? this.setState({ passwordRequired: "dispBlock" })
        : this.setState({ passwordRequired: "dispNone" });
      this.setState({ incorrectUsernamePassword: "dispNone" });
    } else if (
      username !== this.state.username ||
      password !== this.state.password
    ) {
      return this.setState({
        incorrectUsernamePassword: "dispBlock",
        usernameRequired: "dispNone",
        passwordRequired: "dispNone",
      });
    } else {
      //on success set access token
      this.setState({ isLogin: true });
      sessionStorage.setItem("access_token", access_token);
      sessionStorage.setItem("user_id", user_id);
    }
  };

  usernameChangeHandler = (e) => {
    this.setState({ username: e.target.value });
  };

  passwordChangeHandler = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div style={{ top: "90", width: "400" }}>
        {this.state.isLogin ? (
          <Redirect to="/home" />
        ) : (
          <div>
            <Header />
            <Card className={classes.root}>
              <CardContent>
                <Typography variant="h5">LOGIN</Typography>
                <br></br>
                <FormControl required style={{ width: "100%" }}>
                  <InputLabel htmlFor="username"> Username </InputLabel>
                  <Input
                    id="username"
                    type="text"
                    className={classes.input}
                    fullWidth={true}
                    username={this.state.username}
                    onChange={this.usernameChangeHandler}
                  />
                  <FormHelperText className={this.state.usernameRequired}>
                    <span className="red">required</span>
                  </FormHelperText>
                </FormControl>
                <br />
                <br />
                <FormControl required style={{ width: "100%" }}>
                  <InputLabel htmlFor="password"> Password </InputLabel>
                  <Input
                    id="password"
                    type="password"
                    className={classes.input}
                    fullWidth={true}
                    onChange={this.passwordChangeHandler}
                  />
                  <FormHelperText className={this.state.passwordRequired}>
                    <span className="red">required</span>
                  </FormHelperText>
                </FormControl>
                <br />
                <br />
                <br></br>
                <FormHelperText
                  className={this.state.incorrectUsernamePassword}
                >
                  <span className="red" style={{ fontSize: "14px" }}>
                    Incorrect username and/or password
                  </span>
                </FormHelperText>
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.loginClickHandler}
                >
                  LOGIN
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Login);
