import React, { Component } from 'react';
import { Button, Icon, Card, CardContent, Typography, CardActions, CardHeader   } from '@material-ui/core';
import { Home, Face, Favorite } from '@material-ui/icons';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Card >
        <CardHeader
        avatar={<img width='30' src="https://material-ui.com/static/images/cards/live-from-space.jpg"/>}
        title="header"
        />
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
}

export default List;
