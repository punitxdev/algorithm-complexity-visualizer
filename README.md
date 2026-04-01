<div align="center">

# ⚡ Algorithm Complexity Visualizer

### _See how fast (or slow) algorithms really grow_

<br>

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)

<br>

An interactive web app to **visualize Big-O time complexities** side-by-side and watch sorting & searching algorithms execute step-by-step with animated bar visualizations.

<br>

---

</div>

<br>

## 🎯 What It Does

<table>
<tr>
<td width="50%">

### 📈 Complexity Graph
Plot **8 growth curves** on a single interactive chart powered by Chart.js:

| Complexity | Name | Growth |
|:---:|---|---|
| `O(1)` | Constant | 🟢 Excellent |
| `O(log n)` | Logarithmic | 🟢 Great |
| `O(n)` | Linear | 🟡 Fair |
| `O(n log n)` | Linearithmic | 🟠 Decent |
| `O(n²)` | Quadratic | 🔴 Slow |
| `O(n³)` | Cubic | 🔴 Terrible |
| `O(2ⁿ)` | Exponential | 💀 Awful |
| `O(n!)` | Factorial | 💀 Nightmare |

</td>
<td width="50%">

### 🎮 Algorithm Simulator
Watch algorithms run with **color-coded bar animations**:

| Algorithm | Type | Complexity |
|---|:---:|:---:|
| Linear Search | 🔍 Search | `O(n)` |
| Binary Search | 🔍 Search | `O(log n)` |
| Bubble Sort | 🔄 Sort | `O(n²)` |
| Selection Sort | 🔄 Sort | `O(n²)` |
| Merge Sort | 🔄 Sort | `O(n log n)` |
| Quick Sort | 🔄 Sort | `O(n log n)` |

> 🟡 **Yellow** = Scanning &nbsp;|&nbsp; 🔴 **Red** = Swapping &nbsp;|&nbsp; 🟢 **Green** = Done

</td>
</tr>
</table>

<br>

## ✨ Key Features

- 🎛️ **Input Size Slider** — Scale from 10 to 200 and watch curves diverge dramatically
- ☑️ **Toggle Curves** — Show/hide any complexity with individual checkboxes
- ⚡ **Preset Views** — One-click buttons for Basic, Advanced, Extreme, or All complexities
- 🔢 **Live Step Counter** — Real-time operation count during algorithm simulation
- ⏯️ **Play/Stop** — Full control over running simulations
- 📱 **Responsive Layout** — Works on desktop and tablets

<br>

## 🚀 Quick Start

```bash
# Clone it
git clone https://github.com/punitxdev/algorithm-complexity-visualizer.git
cd algorithm-complexity-visualizer

# Run it (pick one)
open index.html                    # macOS
xdg-open index.html                # Linux
python3 -m http.server 8080        # Any OS → localhost:8080
```

> **Zero dependencies. No npm. No build step. Just open and go.**

<br>

## 📁 Project Structure

```
📦 algorithm-complexity-visualizer
 ┣ 📄 index.html        → Page layout & structure
 ┣ 🎨 style.css         → Full styling with CSS variables & responsive design
 ┣ 📊 chart.js          → Chart.js config & complexity data generation
 ┣ 🎬 simulator.js      → All 6 algorithm animations (search + sort)
 ┣ 🔗 app.js            → Event listeners, controls & initialization
 ┗ 📝 README.md
```

<br>

## 🛠️ Built With

| Tech | Purpose |
|---|---|
| **HTML5** | Semantic page structure |
| **CSS3** | Custom properties, Flexbox, Grid, transitions |
| **Vanilla JS** | Async/await animations, DOM manipulation |
| **Chart.js** | Interactive line chart rendering (CDN) |
| **Google Fonts** | Poppins typeface |

<br>

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

```bash
# Fork → Branch → Commit → Push → PR
git checkout -b feature/amazing-feature
git commit -m "Add amazing feature"
git push origin feature/amazing-feature
```

<br>

## 📄 License

Open source under the [MIT License](LICENSE).

<br>

<div align="center">

---

**Made with ❤️ by [punitxdev](https://github.com/punitxdev)**

_If you found this useful, give it a ⭐!_

</div>
