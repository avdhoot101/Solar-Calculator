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
    const recommendedCapacity = dailyUsage / 4.5;
    const monthlyGeneration = recommendedCapacity * 4.5 * 30;
    const savingsPerMonth = monthlyGeneration * pricePerKwh;
    
    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Results</h3>
        <p>Usage per Month: ${usagePerMonth.toFixed(2)} Units</p>
        <p>Daily Usage: ${dailyUsage.toFixed(2)} Units</p>
        <p>Recommended Capacity: ${recommendedCapacity.toFixed(2)} kW</p>
        <p>Monthly Power Generation: ${monthlyGeneration.toFixed(2)} Units</p>
        <p>Monthly Savings: ${savingsPerMonth.toFixed(2)}</p>
    `;
    resultDiv.style.display = 'block';
});
