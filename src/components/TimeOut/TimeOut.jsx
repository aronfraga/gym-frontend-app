import React from "react";
import Alert from '@mui/material/Alert';

export default function TimeOut() {
  return (
    <Alert severity="error">Su sesion a expirado, sera redirigido al inicio de sesion</Alert>
  );
}