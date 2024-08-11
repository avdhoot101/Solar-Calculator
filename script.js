// script.js
document.getElementById('calculate').addEventListener('click', function() {
    const bill = parseFloat(document.getElementById('bill').value);
    const pricePerKwh = parseFloat(document.getElementById('price').value);
    
    if (isNaN(bill) || isNaN(pricePerKwh)) {
        alert('Please enter valid numbers for both fields.');
        return;
    }
    
    // Perform calculations
    const usagePerMonth = bill / pricePerKwh;
    const dailyUsage = usagePerMonth / 30;
    const recommendedCapacity = (dailyUsage / 4.5).toFixed(1); // Rounded to one decimal place
    const monthlyGeneration = recommendedCapacity * 4.5 * 30;
    const savingsPerMonth = (monthlyGeneration * pricePerKwh - 434).toFixed(2);
    
    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Results</h3>
        <p>Usage per Month: ${usagePerMonth.toFixed(2)} Units</p>
        <p>Daily Usage: ${dailyUsage.toFixed(2)} Units</p>
        <p>Recommended Capacity: ${recommendedCapacity} kW</p> <!-- Rounded to one decimal place -->
        <p>Monthly Power Generation: ${monthlyGeneration.toFixed(2)} Units</p>
        <p>Savings per Month: ${savingsPerMonth}</p>
    `;
    resultDiv.style.display = 'block';
});
