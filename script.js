

// script.js

document.getElementById("vacationCalc").addEventListener("submit", function (e) {
  e.preventDefault(); // Evitar que la página recargue

  // Obtener valores ingresados por el usuario
  const destiny = document.getElementById("destiny").value;
  const budget = parseFloat(document.getElementById("budget").value);
  const acomodation = parseFloat(document.getElementById("acomodation").value);
  const transport = parseFloat(document.getElementById("transport").value);
  const food = parseFloat(document.getElementById("food").value);

  // Calcular el total de los costos
  const totalCost = acomodation + transport + food;

  // Seleccionar el div donde se mostrará el resultado
  const resultDiv = document.getElementById("result");

  // Comparar presupuesto con el total de costos
  if (budget >= totalCost) {
    resultDiv.innerHTML = `
      <p style="color: green; font-size: 18px;">
        ¡Buen viaje a <strong>${destiny}</strong>! Tu presupuesto de 
        S/. ${budget.toFixed(2)} es suficiente. ¡A disfrutar!
      </p>
    `;
  } else {
    const difference = totalCost - budget;
    resultDiv.innerHTML = `
      <p style="color: red; font-size: 18px;">
        ¡Oh no! Necesitas S/. ${difference.toFixed(2)} más para tu viaje a 
        <strong>${destiny}</strong>. ¿Qué tal buscar ofertas o invitar a un amigo para compartir los gastos?
      </p>
    `;
  }
});
