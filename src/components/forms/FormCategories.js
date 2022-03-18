import { useState, useEffect  } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';

// import { useState, useEffect  } from 'react';
import api from '../../components/api';
import Cookies from 'js-cookie';




export const FormCategories = (props) => {

  useEffect(() => {
    console.log('edit');
  }, [])

  const [values, setValues] = useState({
    name: null,
    description: null,
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const save = ev => {
    ev.preventDefault()
    console.log('save')
  }

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
      onSubmit={save}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Categories"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the name"
                label="Name"
                name="name"
                onChange={handleChange}
                required
                value={values.name}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                multiline
                rows={4}
                fullWidth
                helperText="Please specify the description"
                label="Description"
                name="description"
                onChange={handleChange}
                required
                value={values.description}
                variant="outlined"
              />
            </Grid>

          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            type="submit"
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};
