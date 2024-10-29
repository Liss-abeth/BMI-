function calculateBMI() {
    // Get input values and convert height from cm to meters
    const height = parseFloat(document.getElementById("height").value) / 100;
    const weight = parseFloat(document.getElementById("weight").value);
    const result = document.getElementById("result");
    const message = document.getElementById("message");

    // Validate input
    if (!height || !weight || height <= 0 || weight <= 0) {
        result.innerText = "Please enter valid height and weight values.";
        message.innerText = "";
        return;
    }

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(1);

    // Display BMI
    result.innerText = `Your BMI: ${bmi}`;

    // Determine weight group
    if (bmi < 18.5) {
        message.innerText = "You are underweight.";
        message.style.color = "#3498db";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        message.innerText = "You have a normal weight.";
        message.style.color = "#2ecc71";
    } else if (bmi >= 25 && bmi <= 29.9) {
        message.innerText = "You are overweight.";
        message.style.color = "#f1c40f";
    } else {
        message.innerText = "You are obese.";
        message.style.color = "#e74c3c";
    }
}