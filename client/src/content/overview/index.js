import AddIcon from '@mui/icons-material/Add';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TagIcon from '@mui/icons-material/Tag';
import { styled } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  TextareaAutosize,
  Typography
} from '@mui/material';

import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

const Stacos = styled('span')(
  () => `
        color: #fff;
        font-wieght: bolder;
`
);

function Overview() {
  const user = {
    name: 'Hatch22 KE',
    avatar: '/static/images/avatars/1.jpg'
  };

  const stacos = 30;
  const placeholderText =
    '+1 @tessa.pratt for helping me launch a marketing campaign so that we can generate new business #sorted';

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
              {user.name}, your have <Stacos>{stacos} Stacos</Stacos> to redeem
            </Typography>
          </Grid>
        </Grid>
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Box sx={{ mb: 2 }}>
                  <Button color="primary" variant="outlined" sx={{ mr: 2 }}>
                    <AddIcon sx={{ mr: 1 }} />
                    Amount
                  </Button>
                  <Button color="primary" variant="outlined" sx={{ mr: 2 }}>
                    <AlternateEmailIcon sx={{ mr: 1 }} />
                    Recipient
                  </Button>
                  <Button color="primary" variant="outlined" sx={{ mr: 2 }}>
                    <TagIcon sx={{ mr: 1 }} />
                    Hashtag
                  </Button>
                </Box>
                <Box width="100%">
                  <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder={placeholderText}
                    style={{
                      width: '100%',
                      backgroundColor: '#111633',
                      border: '1px solid #9EA4C1',
                      borderRadius: '4px'
                    }}
                    minRows={8}
                  />
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                >
                  Give
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Bull
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Overview;
