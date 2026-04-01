# 📊 Algorithm Complexity Visualizer

An interactive web application that helps you **visualize and compare Big-O time complexities** through dynamic graphs and step-by-step algorithm simulations. Built as an educational tool to make understanding algorithm performance intuitive and fun.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)

---

## ✨ Features

### 📈 Complexity Graph
- **8 time complexities** plotted on a single interactive chart:
  - `O(1)` — Constant
  - `O(log n)` — Logarithmic
  - `O(n)` — Linear
  - `O(n log n)` — Linearithmic
  - `O(n²)` — Quadratic
  - `O(n³)` — Cubic
  - `O(2ⁿ)` — Exponential
  - `O(n!)` — Factorial
- **Adjustable input size** — Use the slider (10–200) to scale the graph and see how complexities diverge
- **Toggle individual curves** — Checkboxes let you show/hide any complexity
- **Preset buttons** — Quick views for Basic, Advanced, Extreme, and All complexities

### 🎮 Algorithm Simulator
Step-by-step animated visualizations with real-time operation counting:

| Algorithm | Complexity | Type |
|-----------|-----------|------|
| Linear Search | `O(n)` | Search |
| Binary Search | `O(log n)` | Search |
| Bubble Sort | `O(n²)` | Sort |
| Selection Sort | `O(n²)` | Sort |
| Merge Sort | `O(n log n)` | Sort |
| Quick Sort | `O(n log n)` | Sort |

- **Color-coded bars** — Yellow for scanning, red for swapping, green for finalized
- **Live operation counter** — Watch the step count grow in real-time
- **Play/Stop control** — Start and stop simulations at any time

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- No build tools or dependencies required — it just works!

### Run Locally

```bash
# Clone the repository
git clone https://github.com/punitxdev/algorithm-complexity-visualizer.git

# Navigate to the project
cd algorithm-complexity-visualizer

# Open directly in browser
open index.html

# Or use a local server
python3 -m http.server 8080
```

Then visit `http://localhost:8080` in your browser.

---

## 🗂️ Project Structure

```
algorithm-complexity-visualizer/
├── index.html       # Main HTML page with layout and structure
├── style.css        # Complete styling with CSS variables and responsive design
├── chart.js         # Chart.js configuration and complexity data generation
├── simulator.js     # Algorithm animation logic (search & sort visualizations)
├── app.js           # Glue code — event listeners, UI controls, initialization
└── README.md
```

---

## 🛠️ Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Flexbox, Grid, transitions
- **JavaScript** (Vanilla) — Async/await animations, DOM manipulation
- **[Chart.js](https://www.chartjs.org/)** — Line chart rendering (loaded via CDN)
- **[Google Fonts](https://fonts.google.com/)** — Poppins typeface

---

## 📸 How It Works

1. **Adjust the input size** using the slider to see how different complexities scale
2. **Toggle complexities** on/off with checkboxes or use preset buttons
3. **Pick an algorithm** from the dropdown and hit **Play Simulation**
4. **Watch the bars animate** — the simulator shows each comparison and swap in real-time
5. **Compare step counts** across different algorithms to understand why complexity matters

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-algorithm`)
3. Commit your changes (`git commit -m 'Add new algorithm'`)
4. Push to the branch (`git push origin feature/new-algorithm`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ for learning algorithms
</p>
