// simulator.js - all the algorithm animation stuff

var mySimArray = [];
var theContainer = document.getElementById('arrayBox');
var stepDisplay = document.getElementById('stepCount');
var infoText = document.getElementById('simInfo');
var runningSim = false;

// make some random bars
function makeRandomBars(amount) {
    mySimArray = [];
    theContainer.innerHTML = '';
    
    for (var i = 0; i < amount; i++) {
        var randomNum = Math.floor(Math.random() * 80) + 10;
        mySimArray.push(randomNum);
        
        var barDiv = document.createElement('div');
        barDiv.className = 'array-item';
        barDiv.style.height = (randomNum * 2.5) + 'px';
        barDiv.id = 'barDiv-' + i;
        theContainer.appendChild(barDiv);
    }
}

// cool little function to pause for a bit
function pauseFunc(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

// reset UI
function resetUI() {
    runningSim = false;
    document.getElementById('btnPlay').innerText = "Play Simulation";
    document.getElementById('btnPlay').style.background = "";
}

// linear search animation
async function playLinear() {
    var whatWeWant = mySimArray[mySimArray.length - 1];
    var stepsDone = 0;
    
    infoText.innerText = "Linear Search checks index by index. Notice how it takes " + mySimArray.length + " steps (O(n)).";
    
    for (var j = 0; j < mySimArray.length; j++) {
        if (runningSim === false) return;
        
        var currentBar = document.getElementById('barDiv-' + j);
        currentBar.classList.add('looking');
        
        stepsDone++;
        stepDisplay.innerText = stepsDone;
        
        await pauseFunc(150);
        
        if (mySimArray[j] === whatWeWant) {
            currentBar.classList.remove('looking');
            currentBar.classList.add('found');
            infoText.innerText = "Target found in " + stepsDone + " steps! (Worst case scenario)";
            resetUI();
            return;
        }
        
        currentBar.classList.remove('looking');
    }
    resetUI();
}

// binary search animation
async function playBinary() {
    mySimArray.sort(function(a, b){ return a - b; });
    
    for (var x = 0; x < mySimArray.length; x++) {
        var b = document.getElementById('barDiv-' + x);
        b.style.height = (mySimArray[x] * 2.5) + 'px';
        b.classList.remove('found', 'looking', 'swapping');
    }
    
    var targetNum = mySimArray[mySimArray.length - 1];
    var stepsDone = 0;
    var l = 0;
    var r = mySimArray.length - 1;
    
    infoText.innerText = "Binary Search halves the space each time. Very fast! O(log n).";
    
    while (l <= r) {
        if (runningSim === false) return;
        
        stepsDone++;
        stepDisplay.innerText = stepsDone;
        
        var m = Math.floor((l + r) / 2);
        var middleBar = document.getElementById('barDiv-' + m);
        middleBar.classList.add('looking');
        
        await pauseFunc(600);
        
        if (mySimArray[m] === targetNum) {
            middleBar.classList.remove('looking');
            middleBar.classList.add('found');
            infoText.innerText = "Target found in " + stepsDone + " steps instead of " + mySimArray.length + "!";
            resetUI();
            return;
        } else if (mySimArray[m] < targetNum) {
            l = m + 1;
        } else {
            r = m - 1;
        }
        middleBar.classList.remove('looking');
    }
    resetUI();
}

// bubble sort animation
async function playBubble() {
    infoText.innerText = "Bubble sort swaps numbers side by side. Notice the massive step count! O(n²).";
    var stepsDone = 0;
    
    for (var i = 0; i < mySimArray.length; i++) {
        for (var j = 0; j < (mySimArray.length - i - 1); j++) {
            if (runningSim === false) return;
            
            stepsDone++;
            stepDisplay.innerText = stepsDone;
            
            var b1 = document.getElementById('barDiv-' + j);
            var b2 = document.getElementById('barDiv-' + (j + 1));
            
            b1.classList.add('looking');
            b2.classList.add('looking');
            
            await pauseFunc(20);
            
            if (mySimArray[j] > mySimArray[j + 1]) {
                b1.classList.add('swapping');
                b2.classList.add('swapping');
                
                var temp = mySimArray[j];
                mySimArray[j] = mySimArray[j + 1];
                mySimArray[j + 1] = temp;
                
                b1.style.height = (mySimArray[j] * 2.5) + 'px';
                b2.style.height = (mySimArray[j + 1] * 2.5) + 'px';
                
                await pauseFunc(20);
                
                b1.classList.remove('swapping');
                b2.classList.remove('swapping');
            }
            
            b1.classList.remove('looking');
            b2.classList.remove('looking');
        }
        
        document.getElementById('barDiv-' + (mySimArray.length - i - 1)).classList.add('found');
    }
    
    infoText.innerText = "Sorted using " + stepsDone + " slow operations!";
    resetUI();
}

// selection sort animation
async function playSelection() {
    infoText.innerText = "Selection Sort finds the smallest item and puts it at the front. O(n²).";
    var stepsDone = 0;
    
    for (var i = 0; i < mySimArray.length; i++) {
        var minIndex = i;
        var bMin = document.getElementById('barDiv-' + minIndex);
        bMin.classList.add('swapping');
        
        for (var j = i + 1; j < mySimArray.length; j++) {
            if (runningSim === false) return;
            stepsDone++;
            stepDisplay.innerText = stepsDone;
            
            var bCurrent = document.getElementById('barDiv-' + j);
            bCurrent.classList.add('looking');
            await pauseFunc(20);
            
            if (mySimArray[j] < mySimArray[minIndex]) {
                bMin.classList.remove('swapping');
                minIndex = j;
                bMin = document.getElementById('barDiv-' + minIndex);
                bMin.classList.add('swapping');
            }
            bCurrent.classList.remove('looking');
        }
        
        if (minIndex !== i) {
            stepsDone++;
            var bStart = document.getElementById('barDiv-' + i);
            
            var temp = mySimArray[i];
            mySimArray[i] = mySimArray[minIndex];
            mySimArray[minIndex] = temp;
            
            bStart.style.height = (mySimArray[i] * 2.5) + 'px';
            bMin.style.height = (mySimArray[minIndex] * 2.5) + 'px';
            await pauseFunc(40);
        }
        
        document.getElementById('barDiv-' + minIndex).classList.remove('swapping');
        document.getElementById('barDiv-' + i).classList.add('found');
    }
    
    infoText.innerText = "Selection sort finished in " + stepsDone + " steps.";
    resetUI();
}

// merge sort magic
async function mergeSortHelper(start, end, stepsObj) {
    if (start >= end) return;
    if (runningSim === false) return;
    
    var mid = Math.floor((start + end) / 2);
    
    await mergeSortHelper(start, mid, stepsObj);
    await mergeSortHelper(mid + 1, end, stepsObj);
    
    var left = start;
    var right = mid + 1;
    var tempArr = [];
    
    for (var k = start; k <= end; k++) {
        document.getElementById('barDiv-' + k).classList.add('looking');
    }
    await pauseFunc(40);
    
    while (left <= mid && right <= end) {
        if (runningSim === false) return;
        stepsObj.count++;
        stepDisplay.innerText = stepsObj.count;
        
        if (mySimArray[left] <= mySimArray[right]) {
            tempArr.push(mySimArray[left]);
            left++;
        } else {
            tempArr.push(mySimArray[right]);
            right++;
        }
    }
    
    while (left <= mid) {
        stepsObj.count++;
        tempArr.push(mySimArray[left]);
        left++;
    }
    while (right <= end) {
        stepsObj.count++;
        tempArr.push(mySimArray[right]);
        right++;
    }
    
    for (var i = 0; i < tempArr.length; i++) {
        if (runningSim === false) return;
        mySimArray[start + i] = tempArr[i];
        var b = document.getElementById('barDiv-' + (start + i));
        b.style.height = (tempArr[i] * 2.5) + 'px';
        b.classList.remove('looking');
        b.classList.add('swapping');
        await pauseFunc(30);
        b.classList.remove('swapping');
    }
}

async function playMerge() {
    infoText.innerText = "Merge Sort splits the array and merges it back in order. O(n log n).";
    var stepsObj = { count: 0 }; 
    
    await mergeSortHelper(0, mySimArray.length - 1, stepsObj);
    
    if (runningSim) {
        for (var i = 0; i < mySimArray.length; i++) {
            document.getElementById('barDiv-' + i).classList.add('found');
        }
        infoText.innerText = "Merge sort finished in " + stepsObj.count + " steps!";
    }
    resetUI();
}

// quick sort magic
async function quickSortHelper(start, end, stepsObj) {
    if (start >= end) {
        if (start === end) {
            document.getElementById('barDiv-' + start).classList.add('found');
        }
        return;
    }
    if (runningSim === false) return;
    
    var pivotValue = mySimArray[end];
    var pivotIndex = start;
    
    var bPivot = document.getElementById('barDiv-' + end);
    bPivot.classList.add('swapping'); 
    
    for (var i = start; i < end; i++) {
        if (runningSim === false) return;
        stepsObj.count++;
        stepDisplay.innerText = stepsObj.count;
        
        var bCurrent = document.getElementById('barDiv-' + i);
        bCurrent.classList.add('looking');
        await pauseFunc(30);
        
        if (mySimArray[i] < pivotValue) {
            var temp = mySimArray[i];
            mySimArray[i] = mySimArray[pivotIndex];
            mySimArray[pivotIndex] = temp;
            
            var bSwap1 = document.getElementById('barDiv-' + i);
            var bSwap2 = document.getElementById('barDiv-' + pivotIndex);
            
            bSwap1.style.height = (mySimArray[i] * 2.5) + 'px';
            bSwap2.style.height = (mySimArray[pivotIndex] * 2.5) + 'px';
            
            pivotIndex++;
        }
        bCurrent.classList.remove('looking');
    }
    
    var temp2 = mySimArray[pivotIndex];
    mySimArray[pivotIndex] = mySimArray[end];
    mySimArray[end] = temp2;
    
    var bp1 = document.getElementById('barDiv-' + pivotIndex);
    var bp2 = document.getElementById('barDiv-' + end);
    bp1.style.height = (mySimArray[pivotIndex] * 2.5) + 'px';
    bp2.style.height = (mySimArray[end] * 2.5) + 'px';
    
    bPivot.classList.remove('swapping');
    bp1.classList.add('found'); 
    await pauseFunc(40);
    
    await quickSortHelper(start, pivotIndex - 1, stepsObj);
    await quickSortHelper(pivotIndex + 1, end, stepsObj);
}

async function playQuick() {
    infoText.innerText = "Quick Sort perfectly places a pivot then sorts the sides. Usually O(n log n).";
    var stepsObj = { count: 0 };
    
    await quickSortHelper(0, mySimArray.length - 1, stepsObj);
    
    if (runningSim) {
        infoText.innerText = "Quick sort finished in " + stepsObj.count + " steps!";
    }
    resetUI();
}
