// chart.js - all the graph and chart stuff

// colors for the lines - simple solid colors
var cO1 = "#4caf50";
var cOlogn = "#26a69a";
var cOn = "#ffb300";
var cOnlogn = "#ff8f00";
var cOn2 = "#e53935";
var cOn3 = "#8e24aa";
var cO2n = "#c62828";
var cOnfact = "#880e4f";

// function to do the math and create arrays for chart.js
function makeMathData(maxNum) {
    var xLabels = [];
    var arrO1 = [];
    var arrOlogn = [];
    var arrOn = [];
    var arrOnlogn = [];
    var arrOn2 = [];
    var arrOn3 = [];
    var arrO2n = [];
    var arrOnfact = [];

    // loop to make values from 1 to maxNum
    for (var i = 1; i <= maxNum; i++) {
        xLabels.push(i);
        arrO1.push(1);
        arrOlogn.push(Math.log2(i));
        arrOn.push(i);
        arrOnlogn.push(i * Math.log2(i));
        arrOn2.push(i * i);
        arrOn3.push(i * i * i);
        
        if (i <= 20) {
            arrO2n.push(Math.pow(2, i));
        } else {
            arrO2n.push(null);
        }

        if (i <= 10) {
            var f = 1;
            for (var j = 1; j <= i; j++) {
                f = f * j;
            }
            arrOnfact.push(f);
        } else {
            arrOnfact.push(null);
        }
    }

    return {
        xLabels: xLabels,
        arrO1: arrO1,
        arrOlogn: arrOlogn,
        arrOn: arrOn,
        arrOnlogn: arrOnlogn,
        arrOn2: arrOn2,
        arrOn3: arrOn3,
        arrO2n: arrO2n,
        arrOnfact: arrOnfact
    };
}

// function to create the chart on the canvas
function renderChart() {
    var maxNum = parseInt(sliderInput.value);
    var allData = makeMathData(maxNum);

    var canvasContex = document.getElementById('bigOChart').getContext('2d');
    
    if (chartObj !== null) {
        chartObj.destroy();
    }

    chartObj = new Chart(canvasContex, {
        type: 'line',
        data: {
            labels: allData.xLabels,
            datasets: [
                {
                    label: 'O(1) - Constant',
                    data: allData.arrO1,
                    borderColor: cO1,
                    borderWidth: 2,
                    fill: false,
                    hidden: !document.getElementById('chk-o1').checked
                },
                {
                    label: 'O(log n) - Logarithmic',
                    data: allData.arrOlogn,
                    borderColor: cOlogn,
                    borderWidth: 2,
                    fill: false,
                    hidden: !document.getElementById('chk-ologn').checked
                },
                {
                    label: 'O(n) - Linear',
                    data: allData.arrOn,
                    borderColor: cOn,
                    borderWidth: 2,
                    fill: false,
                    hidden: !document.getElementById('chk-on').checked
                },
                {
                    label: 'O(n log n) - Linearithmic',
                    data: allData.arrOnlogn,
                    borderColor: cOnlogn,
                    borderWidth: 2,
                    fill: false,
                    hidden: !document.getElementById('chk-onlogn').checked
                },
                {
                    label: 'O(n²) - Quadratic',
                    data: allData.arrOn2,
                    borderColor: cOn2,
                    borderWidth: 2,
                    fill: false,
                    hidden: !document.getElementById('chk-on2').checked
                },
                {
                    label: 'O(n³) - Cubic',
                    data: allData.arrOn3,
                    borderColor: cOn3,
                    borderWidth: 2,
                    fill: false,
                    hidden: !document.getElementById('chk-on3').checked
                },
                {
                    label: 'O(2ⁿ) - Exponential',
                    data: allData.arrO2n,
                    borderColor: cO2n,
                    borderWidth: 2,
                    fill: false,
                    hidden: !document.getElementById('chk-o2n').checked
                },
                {
                    label: 'O(n!) - Factorial',
                    data: allData.arrOnfact,
                    borderColor: cOnfact,
                    borderWidth: 2,
                    fill: false,
                    hidden: !document.getElementById('chk-onfact').checked
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                point: { radius: 0 }
            },
            interaction: {
                mode: 'nearest',
                intersect: false,
            },
            scales: {
                x: {
                    title: { display: true, text: 'Input Elements (n)', color: '#666', font: {size: 13, family: 'Poppins'} },
                    ticks: { color: '#666' },
                    grid: { color: '#eee' }
                },
                y: {
                    title: { display: true, text: 'Steps Executed (Time)', color: '#666', font: {size: 13, family: 'Poppins'} },
                    ticks: { color: '#666' },
                    grid: { color: '#eee' },
                    max: 2000
                }
            },
            plugins: {
                legend: {
                    labels: { color: '#333', font: {size: 13, family: 'Poppins'} }
                },
                tooltip: {
                    backgroundColor: '#fff',
                    titleColor: '#333',
                    bodyColor: '#555',
                    borderColor: '#ddd',
                    borderWidth: 1,
                    cornerRadius: 8,
                    titleFont: { family: 'Poppins' },
                    bodyFont: { family: 'Poppins' }
                }
            }
        }
    });
}
