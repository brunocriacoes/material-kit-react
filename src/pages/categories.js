import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { ProductListToolbar } from '../components/product/product-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { TableCategory } from '../components/tables/TableCategory';

const Products = () => (
  <>
    <Head>
      <title>
        Categories
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar title="Categories" link="/categories/new" />
        <Box sx={{ pt: 3 }}>
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
                <TableCategory  />
              </Grid>
            
          </Grid>
        </Box>

      </Container>
    </Box>
  </>
);

Products.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Products;
