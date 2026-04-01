# Algorithm Complexity Visualizer

A simple web app to visualize and compare different Big-O time complexities using interactive graphs and algorithm simulations.

## Features

- **Complexity Graph** — Plots O(1), O(log n), O(n), O(n log n), O(n²), O(n³), O(2ⁿ), O(n!) using Chart.js
- **Interactive Controls** — Slider for input size, checkboxes to toggle curves, preset buttons
- **Algorithm Simulator** — Step-by-step animated visualizations for:
  - Linear Search (O(n))
  - Binary Search (O(log n))
  - Bubble Sort (O(n²))
  - Selection Sort (O(n²))
  - Merge Sort (O(n log n))
  - Quick Sort (O(n log n))

## How to Run

1. Clone this repo
2. Open `index.html` in your browser (or use a local server like `python3 -m http.server`)

## Tech Stack

- HTML, CSS, JavaScript
- Chart.js (via CDN)
