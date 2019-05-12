/* eslint-disable react/no-string-refs */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  AppBar,
  Toolbar,
  CircularProgress,
} from '@material-ui/core';
import { signUp } from '../../redux/action';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  content: {
    height: '100vh',
    width: '100%',
    background: theme.palette.primary.light,
  },
  card: {
    flex: 1,
    margin: '10% 15% 20% 15%',
    maxWidth: 400,
    textAlign: 'center',
  },
  media: {
    objectFit: 'cover',
  },
  cardTitle: {
    alignItems: 'center',
  },
});

class SignUp extends Component {
  state = {
    formData: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    submitted: false,
  };

  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  handleSubmit = () => {
    const {
      onSignup, firstName, lastName, email, password,
    } = this.props;
    this.setState({ submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 5000);
    });

    onSignup(firstName, lastName, email, password).then((res) => {
      console.log(res);
    });
  };

  render() {
    const { classes } = this.props;
    const { formData, submitted } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              BlogPost
            </Typography>
            <Button color="inherit" component={Link} to="/auth/login">
              login
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container direction="row" justify="center" alignItems="center" className={classes.content}>
          <Card className={classes.card}>
            <ValidatorForm ref="form" onSubmit={this.handleSubmit}>
              <CardContent>
                <TextValidator
                  id="standard-required"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  className={classes.textField}
                  margin="normal"
                  onChange={this.handleChange}
                  value={formData.firstName}
                  validators={['required']}
                  errorMessages={['A first name is required']}
                />
                <TextValidator
                  id="standard-required"
                  label="Last Name"
                  name="lastName"
                  fullWidth
                  className={classes.textField}
                  margin="normal"
                  onChange={this.handleChange}
                  value={formData.lastName}
                  validators={['required']}
                  errorMessages={['A last name is required']}
                />
                <TextValidator
                  id="standard-required"
                  label="Email"
                  name="email"
                  fullWidth
                  type="email"
                  className={classes.textField}
                  margin="normal"
                  onChange={this.handleChange}
                  value={formData.email}
                  validators={['required', 'isEmail']}
                  errorMessages={['An email is required', 'This email is not valid']}
                />
                <TextValidator
                  id="standard-required"
                  name="password"
                  label="Password"
                  fullWidth
                  type="password"
                  className={classes.textField}
                  margin="normal"
                  onChange={this.handleChange}
                  value={formData.password}
                  validators={['required']}
                  errorMessages={['A password is required']}
                />
              </CardContent>
              <CardActions>
                <Button type="submit" variant="contained" size="medium" color="primary" fullWidth disabled={submitted}>
                  {(submitted && <CircularProgress className={classes.progress} color="primary" size={25} />)
                    || (!submitted && 'Sign Up')}
                </Button>
              </CardActions>
            </ValidatorForm>
            <Typography gutterBottom variant="caption">
              Already a member?
              {' '}
              <Link to="/auth/login">Login</Link>
            </Typography>
          </Card>
        </Grid>
      </div>
    );
  }
}
export const mapStateToProps = ({
  user: {
    firstName, lastName, email, password, submitting,
  },
}) => ({
  firstName,
  lastName,
  email,
  password,
  submitting,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: ({
    firstName, lastName, email, password,
  }) => dispatch(
    signUp({
      firstName,
      lastName,
      email,
      password,
      ownProps,
    }),
  ),
});
SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onSignup: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(SignUp));
