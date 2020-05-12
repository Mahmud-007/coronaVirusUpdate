import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed || !recovered || !deaths || !lastUpdate) {
    return "Loading...";
  }
  return (
    <div className="styles.container">
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.Card, styles.infected)}
        >
          <CardContent className="Card">
            <Typography color="textPrimary" gutterBottom>
              <h2>Infected</h2>
            </Typography>
            <Typography varient="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography>Last Updated</Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.Card, styles.recovered)}
        >
          <CardContent className="Card">
            <Typography color="textPrimary" gutterBottom>
              <h2>Recovered</h2>
            </Typography>
            <Typography varient="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography>Last Updated</Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.Card, styles.deaths)}
        >
          <CardContent className="Card">
            <Typography color="textPrimary" gutterBottom>
              <h2>Deaths</h2>
            </Typography>
            <Typography varient="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography>Last Updated</Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
