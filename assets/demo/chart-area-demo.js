// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Mai 1", "Mai 2", "Mai 3", "Mai 4", "Mai 5", "Mai 6", "Mai 7", "Mai 8", "Mai 9", "Mai 10", "Mai 11", "Mai 12", "Mai 13"],
    datasets: [{
      label: "Veículos",
      lineTension: 0.3,
      backgroundColor: "rgba(12, 73, 90,0.1)",
      borderColor: "rgba(12, 73, 90,0.9)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(12,73,90,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(12,73,90,1)",
      pointHitRadius: 50,
      pointBorderWidth: 0,
      data: [35460, 30162, 26263, 18394, 18287, 28682, 21274, 23259, 25849, 34159, 32651, 41984, 78451],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 10
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100000,
          maxTicksLimit: 7
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
