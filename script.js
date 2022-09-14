try {
  let a = 0;
  let b = 10;
  /* if (a == 0) {
    throw new Error("Division par zero");
  }
  if (a == undefined) {
    throw new Error("Veillez saisir la valeur du diviseur");
  } */
  console.log(b / a);
} catch (err) {
  console.log(err.message);
}
