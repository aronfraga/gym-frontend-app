const validatorName = (str) => {
  if (str.length < 2) return "El nombre debe tener mas de 2 caracteres";
};

const validatorCategory = (n) => {
  if (n === 0) return "Agregar Categoria";
};

const validatorDuration = (n) => {
  if (n === 0) return "Agregar Duración";
};

const validatorDifficulty = (n) => {
  if (n === 0) return "Agregar Dificultad";
};

const validatorSerie = (n) => {
  if (n === 0) return "Agregar cantidad de series";
};
const validatorRepetitions = (n) => {
  if (n === 0) return "Agregar cantidad de repeticiones";
};

const validatorMuscles = (n) => {
  if (n === 0) return "Agregar un musculo";
};

export {
  validatorName,
  validatorCategory,
  validatorDifficulty,
  validatorDuration,
  validatorSerie,
  validatorRepetitions,
  validatorMuscles,
};
