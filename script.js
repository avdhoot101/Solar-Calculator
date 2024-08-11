// script.js

// Function to smoothly pop out the calculator when the page loads
window.addEventListener('load', function() {
    const calculator = document.getElementById('calculator');
    setTimeout(() => {
        calculator.classList.add('visible');
    }, 100); // Delay to ensure smooth transition
});

document.getElementById('calculate').addEventListener('click', function() {
    const bill = parseFloat(document.getElementById('bill').value);
    const pricePerKwh = parseFloat(document.getElementById('price').value);
    
    if (isNaN(bill) || isNaN(pricePerKwh)) {
        alert('Please enter valid numbers for both fields.');
        return;
    }
    
    // Perform calculations with the updated formula
    const usagePerMonth = (bill - 434) / pricePerKwh;
    const dailyUsage = usagePerMonth / 30;
    let recommendedCapacity = dailyUsage / 4.5;
    
    // Adjust recommended capacity based on the criteria
    if (recommendedCapacity < 4.5) {
        recommendedCapacity = 4; // Round down to 4
    } else {
        recommendedCapacity = 5; // Round up to 5
    }
    
    // Calculate monthly generation and savings
    const monthlyGeneration = recommendedCapacity * 4.5 * 30;
    const savingsPerMonth = (monthlyGeneration * pricePerKwh - 434).toFixed(2);
    
    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Results</h3>
        <p>Usage per Month: ${usagePerMonth.toFixed(2)} Units</p>
        <p>Recommended Capacity: ${recommendedCapacity} kW</p> <!-- Adjusted capacity -->
        <p>Monthly Power Generation: ${monthlyGeneration.toFixed(2)} Units</p>
        <p>Savings per Month: ${savingsPerMonth}</p>
    `;
    resultDiv.style.display = 'block';
});
