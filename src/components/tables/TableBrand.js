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

import { useState, useEffect } from 'react';
import api from '../../components/api';
import Cookies from 'js-cookie';

export const TableBrand = (props) => {

  const [brand, setBrand] = useState([])

  useEffect(() => {
    api.get('/marca', {}, { headers: { "authorization": Cookies.get('token') } }).then(res => {
      if( !!res.data ) {
        setBrand(res.data)
      }
      // console.log(res)
    })
  }, []);

  return (
    <Card {...props}>
      <CardHeader title="Lista" />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell> Nome </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {brand.map((order) => (
                <TableRow
                  hover
                  key={order.id}
                >
                  <TableCell> {order.nome} </TableCell>
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
}
