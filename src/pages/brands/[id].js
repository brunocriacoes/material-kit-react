import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { FormBrands } from '../../components/forms/FormBrands';
import { DashboardLayout } from '../../components/dashboard-layout';

const Account = () => (
  <>
    <Head>
      <title>
        Brands
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Brands
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={12}
            md={12}
            xs={12}
          >
            <FormBrands />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Account.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Account;
