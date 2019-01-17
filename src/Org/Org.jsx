import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const sfdx = require('sfdx-node');
const opn = require('opn');

const styles = ({
  card: {
    width: 440,
  },
});

class Org extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.open = this.open.bind(this);
  }
  open() {
    sfdx.org.open({
      targetusername: this.props.org.username,
      urlonly: true,
      json: true,
    }).then((result) => {
      opn(result.url);
    });
  }

  render() {
    const { classes, org } = this.props;
    return (
      <Grid item>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="title">
              {org.username}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={this.open}>Open</Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

Org.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  org: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(Org);
