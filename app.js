// app.js - glue code that connects everything together

// global variables
var chartObj = null; 
var sliderInput = document.getElementById('inputSize');
var sizeLabel = document.getElementById('sizeValue');

// when slider moves, update text and chart
sliderInput.addEventListener('input', function() {
    sizeLabel.innerText = sliderInput.value;
    
    var currentN = parseInt(sliderInput.value);
    var cap = currentN * currentN;
    if (cap < 50) cap = 50;
    
    chartObj.options.scales.y.max = cap;
    renderChart();
});

// when checkboxes are clicked, redraw the chart
var allChecks = document.querySelectorAll('.checkbox-grid input[type="checkbox"]');
for (var k = 0; k < allChecks.length; k++) {
    allChecks[k].addEventListener('change', function() {
        renderChart();
    });
}

// preset buttons
document.getElementById('btnBasic').addEventListener('click', function() {
    document.getElementById('chk-o1').checked = true;
    document.getElementById('chk-ologn').checked = true;
    document.getElementById('chk-on').checked = true;
    
    document.getElementById('chk-onlogn').checked = false;
    document.getElementById('chk-on2').checked = false;
    document.getElementById('chk-on3').checked = false;
    document.getElementById('chk-o2n').checked = false;
    document.getElementById('chk-onfact').checked = false;
    renderChart();
});

document.getElementById('btnAdvanced').addEventListener('click', function() {
    document.getElementById('chk-o1').checked = false;
    document.getElementById('chk-ologn').checked = false;
    document.getElementById('chk-on').checked = false;
    
    document.getElementById('chk-onlogn').checked = true;
    document.getElementById('chk-on2').checked = true;
    document.getElementById('chk-on3').checked = true;
    
    document.getElementById('chk-o2n').checked = false;
    document.getElementById('chk-onfact').checked = false;
    renderChart();
});

document.getElementById('btnExtreme').addEventListener('click', function() {
    document.getElementById('chk-o1').checked = false;
    document.getElementById('chk-ologn').checked = false;
    document.getElementById('chk-on').checked = false;
    document.getElementById('chk-onlogn').checked = false;
    document.getElementById('chk-on2').checked = false;
    document.getElementById('chk-on3').checked = false;
    
    document.getElementById('chk-o2n').checked = true;
    document.getElementById('chk-onfact').checked = true;
    renderChart();
});

document.getElementById('btnAll').addEventListener('click', function() {
    for (var i = 0; i < allChecks.length; i++) {
        allChecks[i].checked = true;
    }
    renderChart();
});

// link the play button
document.getElementById('btnPlay').addEventListener('click', function() {
    if (runningSim === true) {
        runningSim = false;
        document.getElementById('btnPlay').innerText = "Play Simulation";
        document.getElementById('btnPlay').style.background = "";
        infoText.innerText = "Simulation stopped.";
        return;
    }
    
    runningSim = true;
    document.getElementById('btnPlay').innerText = "Stop Simulation";
    document.getElementById('btnPlay').style.background = "#dc2626";
    stepDisplay.innerText = "0";
    
    var whichAlgo = document.getElementById('algoSelect').value;
    var sizeOfArray = parseInt(sliderInput.value);
    
    if (sizeOfArray > 40) {
        sizeOfArray = 40;
    }
    
    makeRandomBars(sizeOfArray);
    
    if (whichAlgo === 'linear') {
        playLinear();
    } else if (whichAlgo === 'binary') {
        playBinary();
    } else if (whichAlgo === 'bubble') {
        playBubble();
    } else if (whichAlgo === 'selection') {
        playSelection();
    } else if (whichAlgo === 'merge') {
        playMerge();
    } else if (whichAlgo === 'quick') {
        playQuick();
    }
});

// when page loads
window.onload = function() {
    renderChart();
    makeRandomBars(20);
};
