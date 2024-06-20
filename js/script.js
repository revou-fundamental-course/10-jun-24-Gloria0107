// Ini Javascript

function konversiKeFahrenheit() {
    var celsius = document.getElementById('celsius').value;
    if (celsius !== '') {
        var fahrenheit = (parseFloat(celsius) * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
        document.getElementById('calculation').value = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    }
}

function konversiKeCelsius() {
    var fahrenheit = document.getElementById('fahrenheit').value;
    if (fahrenheit !== '') {
        var celsius = (parseFloat(fahrenheit) - 32) * 5/9;
        document.getElementById('celsius').value = celsius.toFixed(2);
        document.getElementById('calculation').value = `${fahrenheit}°F - 32 * (5/9) = ${celsius.toFixed(2)}°C`;
    }
}

function resetForm() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('calculation').value = '';
}