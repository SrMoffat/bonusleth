import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support'
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined'
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support'
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained'
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support'
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined'
  }
];

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations']
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one'
    ]
  },
  {
    title: 'Resources',
    description: [
      'Resource',
      'Resource name',
      'Another resource',
      'Final resource'
    ]
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use']
  }
];

function PricingContent() {
  return (
    <React.Fragment>
      {/* Hero unit */}
      <Container>
        <Typography
          component="h1"
          variant="h1"
          color="text.primary"
          fontSize="3.5em"
          lineHeight="1.5em"
          textAlign="center"
          mt="1.5em"
          mb="0.5em"
          gutterBottom
        >
          Pricing
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center'
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700]
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default function Home() {
  return (
    <React.Fragment>
      <Container>
        <Box display="flex" width="90%" mx="auto" alignItems="center">
          <Box>
            <Typography
              component="h1"
              variant="h1"
              color="text.primary"
              fontSize="3.5em"
              lineHeight="1.5em"
              gutterBottom
              mb="0.75em"
            >
              A better way for your employees to recognize each other.
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              py="0.35em"
              px="1em"
              size="large"
              fontSize="1.25rem"
            >
              Get Started
            </Button>
          </Box>
          <img src="/static/images/placeholders/illustrations/reward.svg" />
        </Box>
      </Container>
      <Container>
        <Typography
          component="h1"
          variant="h1"
          color="text.primary"
          fontSize="1.75em"
          fontStyle="italic"
          lineHeight="1.5em"
          fontWeight="400"
          gutterBottom
          mt="5em"
          width="75%"
          mx="auto"
        >
          Current research provides empirical evidence that cash rewards
          perceived as having an informative meaning positively contribute to
          their psychological needs, which leads to better functioning, whereas
          cash rewards perceived as having a controlling meaning negatively
          contributed to their psychological needs, which is then associated
          with suboptimal functioning.
        </Typography>
      </Container>
      <Container>
        <Typography
          component="h1"
          variant="h1"
          color="text.primary"
          fontSize="3.5em"
          lineHeight="1.5em"
          textAlign="center"
          mt="2.5em"
          mb="0.5em"
          gutterBottom
        >
          Introducing the ""ZET""
        </Typography>
        <Typography
          component="p"
          variant="p"
          color="text.primary"
          fontSize="1.5em"
          lineHeight="1.5em"
          textAlign="left"
          gutterBottom
        >
          The{' '}
          <strong>
            <em>zet</em>
          </strong>{' '}
          is a recognition unit Zawady uses to award your employees. An employee
          sends an amount of their allocated zet to fellow employees as a
          reward. The zet is calculated based on the current ethereum market
          value. An employee can the convert the zet to cash or do direct
          purchases with ethereum. We provide platforms that allow users to do
          the conversions or purchases.
        </Typography>
      </Container>
      <Container>
        <Typography
          component="h1"
          variant="h1"
          color="text.primary"
          fontSize="2em"
          lineHeight="1.5em"
          textAlign="center"
          mt="2em"
          mb="0.5em"
          gutterBottom
        >
          Happy employee = Great results{' '}
        </Typography>
      </Container>
      <PricingContent />
    </React.Fragment>
  );
}
