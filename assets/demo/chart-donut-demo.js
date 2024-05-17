// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myDonutChart");
var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Carro", "Caminhão", "Carreta", "Ônibus", "Moto"],
        datasets: [{
            data: [505, 320, 45, 32, 122],
            backgroundColor: ['#0C495A', '#A4CE46', '#36b9cc', '#37cc52', '#e02fa8'],
            hoverBackgroundColor: ['#0a3a47', '#8db03f', '#2c9faf', '#28a840','#ba278c'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
    },
    options: {
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
        },
        legend: {
            display: true
        },
        cutoutPercentage: 80,
    },
});