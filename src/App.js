import { Grid, LinearProgress, Typography } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardData from './components/CardData';
import DataCard from './components/DataCard';
import { fetchData } from './redux/action';
import {
  dataMeninggal,
  dataPositif,
  dataSembuh,
  isLoading,
} from './redux/reducer';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const positif = useSelector(dataPositif);
  const sembuh = useSelector(dataSembuh);
  const meninggal = useSelector(dataMeninggal);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      <Typography variant="h1" component="h2" align="center">
        Data Corona
      </Typography>
      {loading ? (
        <LinearProgress />
      ) : (
        <Grid container spacing={3}>
          <Grid item lg={4} sm={12}>
            <CardData p="5" title={positif.name} number={positif.value} />
          </Grid>
          <Grid item lg={4} sm={12}>
            <CardData p="5" title={sembuh.name} number={sembuh.value} />
          </Grid>
          <Grid item lg={4} sm={12}>
            <CardData p="5" title={meninggal.name} number={meninggal.value} />
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default App;
