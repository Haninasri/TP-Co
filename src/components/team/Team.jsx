import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useTheme } from "@mui/material";
import { DataGrid ,GridToolbar } from "@mui/x-data-grid";
import {Typography} from "@material-ui/core"
import { Box } from "@mui/material";
import PropTypes from 'prop-types';

const columns = [
  { field: "id", headerName: "Id", width: 60 },
  { field: "FirstName", headerName: "FirstName", width: 100 },
  { field: "LastName", headerName: "LastName", width: 60 },
  { field: "Class", headerName: "Class:", width: 400 },
  { field: "Gender", headerName: "Gender", width: 160 },
  { field: "Email", headerName: "Email", width: 160 },
{field: "Phone", headerName: "Phone", width: 160 },

];
function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={[
        (theme) => ({
          p: 1,
          m: 1,
          bgcolor: 'grey.100',
          color: 'grey.800',
          border: '1px solid',
          borderColor: 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          ...theme.applyStyles('dark', {
            bgcolor: '#101010',
            color: 'grey.300',
            borderColor: 'grey.800',
          }),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

const Team = () => {
  const [row, setRow] = useState([]);
  const theme = useTheme();
  

  useEffect(() => {
    const getAdmins = async () => {
      const admins = await getDocs(collection(db, "dataa"));
      admins.forEach((admin) => {
        console.log(admin.data());
        setRow((r) => ([
          ...r,
          {
              id: admin.data().lastName,
              FirstName:admin.data().name,
              LastName:admin.data().lastName,
              Class:admin.data().class,
              Gender:admin.data().gender,
              Email:admin.data().email,
              Phone:admin.data().phone,
              Groupe:admin.data().groupe,
              
              
          },
      ]));
      });
    };

    getAdmins();
  }, []);

  console.log("row", row);

  return (
    <Box m='20px'>
    <Item>
  <Typography variant="h6">
        Pour initier les étudiants à l'Internet des Objets (IoT) avec un TP pratique basé sur la carte de développement Raspberry Pi et le protocole MQTT, Le but est d'amener les étudiants à comprendre les concepts fondamentaux de l'IoT, à développer un système en temps réel, et à visualiser des données sur un tableau de bord.
        <br />Objectifs du TP :
<br />Découvrir l'architecture de l'IoT : Comprendre les composants d'un écosystème IoT (capteurs, actuateurs, passerelles, protocoles de communication).
<br />Protocoles de communication : Approfondir le protocole MQTT.<br /> Site ISSATGF 
        <a target='_blank'
            rel='noopener noreferrer' href="https://issatgf.rnu.tn">Site Université de Gafsa</a>
    </Typography>
    </Item>
      <Box 
       m="40px 0 0 0"
       height="75vh"
       sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={row}
        columns={columns}
        getRowId={(row:any) => row.id}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        components={{ Toolbar: GridToolbar }}
      />
      </Box>
      </Box>
  );
}
export default Team