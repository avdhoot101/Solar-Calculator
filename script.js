// script.js

function calculate() {
    // Get values from the input fields
    const billInput = document.getElementById('bill').value;
    const pricePerKwhInput = document.getElementById('price-per-kwh').value;

    // Convert values to numbers
    const bill = parseFloat(billInput);
    const pricePerKwh = parseFloat(pricePerKwhInput);

    // Check if inputs are valid numbers
    if (isNaN(bill) || isNaN(pricePerKwh) || pricePerKwh <= 0) {
        alert('Please enter valid numbers.');
        return;
    }

    // Perform calculations
    const usage = (bill - 434) / pricePerKwh;
    const dailyUsage = usage / 30;
    let recommendedCapacity = dailyUsage / 4.5;
    recommendedCapacity = recommendedCapacity < 4.5 ? 4 : 5; // Rounding off

    const monthlyPowerGeneration = recommendedCapacity * 4.5 * 30;
    const savings = monthlyPowerGeneration * pricePerKwh;

    // Display the result
    document.getElementById('result').innerHTML = `
        <p>Recommended Capacity: ${recommendedCapacity} kW</p>
        <p>Monthly Power Generation: ${monthlyPowerGeneration.toFixed(2)} kWh</p>
        <p>Savings per Month: ${savings.toFixed(2)}</p>
    `;
}
