import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const orders = [
  {
    id: uuid(),
    name: "Balde de gelo",
    description: "Produto ideal",
    price: 5000,
    inventory: 15,
    category: "Brinde",
    brand: "Lu Plastic"
  }
];

export const TableProduct = (props) => (
  <Card {...props}>
    <CardHeader title="Lista" />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell> Nome </TableCell>
              <TableCell> Preço </TableCell>
              <TableCell> Estoque </TableCell>
              <TableCell> Categoria </TableCell>
              <TableCell> Marca </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell> {order.name} </TableCell>
                <TableCell> {order.price} </TableCell>
                <TableCell> {order.inventory} </TableCell>
                <TableCell> {order.category} </TableCell>
                <TableCell> {order.brand} </TableCell>
                <TableCell> <EditIcon style={{ color: '#05f' }} /> </TableCell>
                <TableCell> <DeleteIcon style={{ color: '#C00' }} /> </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
  </Card>
);
