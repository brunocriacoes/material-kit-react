import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { FormProducts } from '../../components/forms/FormProducts';
import { DashboardLayout } from '../../components/dashboard-layout';

const Account = () => (
  <>
    <Head>
      <title>
        Products
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
          Products
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
            <FormProducts />
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
