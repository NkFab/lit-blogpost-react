import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Card,
  TextField,
  CardContent,
  CardActions,
  Button,
  AppBar,
  Toolbar,
} from '@material-ui/core';

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
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
  cardTitle: {
    alignItems: 'center',
  },
});

const Login = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            BlogPost
          </Typography>
          <Button color="inherit" component={Link} to="/auth/signup">
            sign up
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container direction="row" justify="center" alignItems="center" className={classes.content}>
        <Card className={classes.card}>
          <CardContent>
            <TextField
              required
              id="standard-required"
              label="Email"
              fullWidth
              type="email"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              required
              id="standard-required"
              label="Password"
              fullWidth
              type="password"
              className={classes.textField}
              margin="normal"
            />
          </CardContent>
          <CardActions>
            <Button variant="contained" size="medium" color="primary" fullWidth>
              Login
            </Button>
          </CardActions>
          <Typography gutterBottom variant="caption">
            Do not have an account?
            {' '}
            <Link to="/auth/signup">Create one</Link>
          </Typography>
        </Card>
      </Grid>
    </div>
  );
};

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
