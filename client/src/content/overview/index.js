import { styled } from '@mui/material/styles';

import { Helmet } from 'react-helmet-async';
import { Container, Grid, Typography, Button } from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

import PageTitleWrapper from 'src/components/PageTitleWrapper';
import Footer from 'src/components/Footer';

function Overview() {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };
  return (
    <>
      <Helmet>
        <title>Transactions</title>
      </Helmet>
      <PageTitleWrapper>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h3" component="h3" gutterBottom>
              Home
            </Typography>
            <Typography variant="subtitle2">
              {user.name}, your have <span>30 Stacos</span> to give away
            </Typography>
          </Grid>
          <Grid item>
            <Button
              sx={{ mt: { xs: 2, md: 0 } }}
              variant="contained"
              startIcon={<AddTwoToneIcon fontSize="small" />}
            >
              Create transaction
            </Button>
          </Grid>
        </Grid>
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            Here
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Overview;
