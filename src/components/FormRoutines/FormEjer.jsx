import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { maxWidth } from "@mui/system";
import React from "react";

const FormEjer = ({ ejercicio, muscles, id, handleChange2 }) => {
  return (
    <div>
      <Box>
        <TextField
          sx={{ width: 300 }}
          key={`name${id}`}
          label="Nombre del Ejercicio"
          name="name"
          value={ejercicio.name}
          onChange={handleChange2}
        />
        <TextField
          id="serie-number"
          label="Series"
          key={`serie${id}`}
          type="number"
          name="series"
          value={ejercicio.series}
          InputProps={{
            inputProps: { min: 1 },
          }}
          onChange={handleChange2}
        />
        <TextField
          key={`repe${id}`}
          id="repe-number"
          label="Repeticiones"
          type="number"
          name="repetitions"
          value={ejercicio.repetitions}
          InputProps={{
            inputProps: { min: 1 },
          }}
          onChange={handleChange2}
          required
        />
      </Box>
      <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label">
        {muscles.map((musc) => (
          <FormControlLabel
            name="muscleId"
            key={musc.id}
            value={musc.id}
            control={<Radio />}
            label={musc.name}
            onChange={handleChange2}
          />
        ))}
      </RadioGroup>

      <div>
        <TextField
          key={`gif${id}`}
          id="gif"
          label="Gif del Ejercicio (URL)"
          type="url"
          name="gifUrl"
          width={maxWidth}
          value={ejercicio.gifUrl}
          onChange={handleChange2}
          required
        />
      </div>
    </div>
  );
};

export default FormEjer;
