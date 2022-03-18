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

import { useState, useEffect  } from 'react';
import api from '../../components/api';
import Cookies from 'js-cookie';

export const TableCategory = (props) => {

  const [category, setCategory] = useState([])

  useEffect(() => {
    api.get( '/categoria',{}, {  headers: {"authorization" : Cookies.get('token') }  } ).then( res => {
      if( !!res.data ) {
        setCategory(res.data)
      }
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
                <TableCell> Description </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {category.map((order) => (
                <TableRow
                  hover
                  key={order.id}
                >
                  <TableCell> {order.nome} </TableCell>
                  <TableCell> {order.descricao} </TableCell>
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
