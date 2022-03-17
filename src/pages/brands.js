import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { products } from '../__mocks__/products';
import { ProductListToolbar } from '../components/product/product-list-toolbar';
import { ProductCard } from '../components/product/product-card';
import { DashboardLayout } from '../components/dashboard-layout';
import { TableBrand } from '../components/tables/TableBrand';

const Products = () => (
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
      <Container maxWidth={false}>
        <ProductListToolbar title="Brands" link="/brands/new" />
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
                <TableBrand  />
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
