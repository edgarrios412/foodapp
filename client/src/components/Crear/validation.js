const validation = (recipe) => {
  const errors = {};

  const imgRegexp =
    /^https?:\/\/(?:[a-z-]+\.)+[a-z]{2,6}(?:\/[^/#?]+)+\.(?:jpe?g|gif|png)$/i

  // VALIDANDO TITULO
  if (!recipe.title) {
    errors.title = "Debes colocar un titulo";
  } else {
    if (recipe.title.length < 6) {
      errors.title = "El titulo debe tener mas de 5 caracteres";
    }
  }

  if (!recipe.summary) {
    errors.summary = "Debes colocar un summary";
  } else {
    if (recipe.summary.length < 21) {
      errors.summary = "El summary debe tener al menos 20 caracteres";
    }
  }

  if (!recipe.steps) {
    errors.steps = "No puedes dejar el campo vacio";
  } else {
    if (recipe.steps.split(",").length < 3) {
      errors.steps = "Debes colocar al menos 3 steps";
    }
  }

  if (recipe.image) {
    if (!imgRegexp.test(recipe.image)) {
      errors.image = "Debes colocar una URL valida o dejar vacio";
    }
  }

  if (recipe.diets.length < 3) {
    errors.diets = "Debes seleccionar al menos 3 dietas";
  }

  if (!recipe.healthScore) {
    errors.diets = "Debes colocar un health";
  } else {
    if (recipe.healthScore < 1 || recipe.healthScore > 100) {
      errors.diets = "El health debe estar entre 1 y 100";
    }
  }

  return errors;
};

export default validation;
