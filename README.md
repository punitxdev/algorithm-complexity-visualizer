<div align="center">

# Algorithm Complexity Visualizer

### See how fast (or slow) algorithms really grow.

<br>

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)

<br>

An interactive web app to **visualize Big-O time complexities** side-by-side and watch sorting and searching algorithms execute step-by-step with animated bar visualizations.

<br>

---

</div>

<br>

## Overview

<table>
<tr>
<td width="50%">

### Complexity Graph
Plot **8 growth curves** on a single interactive chart powered by Chart.js:

| Complexity | Name | Growth |
|:---:|---|---|
| `O(1)` | Constant | Excellent |
| `O(log n)` | Logarithmic | Great |
| `O(n)` | Linear | Fair |
| `O(n log n)` | Linearithmic | Decent |
| `O(n²)` | Quadratic | Slow |
| `O(n³)` | Cubic | Terrible |
| `O(2ⁿ)` | Exponential | Awful |
| `O(n!)` | Factorial | Nightmare |

</td>
<td width="50%">

### Algorithm Simulator
Watch algorithms run with color-coded bar animations:

| Algorithm | Type | Complexity |
|---|:---:|:---:|
| Linear Search | Search | `O(n)` |
| Binary Search | Search | `O(log n)` |
| Bubble Sort | Sort | `O(n²)` |
| Selection Sort | Sort | `O(n²)` |
| Merge Sort | Sort | `O(n log n)` |
| Quick Sort | Sort | `O(n log n)` |

> **Yellow** = Scanning | **Red** = Swapping | **Green** = Done

</td>
</tr>
</table>

<br>

## Key Features

- **Input Size Slider**: Scale operations from 10 to 200 and observe curve deviations.
- **Toggle Curves**: Isolate variables by hiding specific complexities with checkboxes.
- **Preset Views**: Rapidly switch between Basic, Advanced, Extreme, or All complexities.
- **Live Step Counter**: Monitor real-time operation counts during continuous algorithm simulation.
- **Play/Stop Control**: Maintain complete timeline control over running simulations.
- **Responsive Layout**: Designed for compatibility across desktop and tablet platforms.

<br>

## Quick Start

```bash
# Clone the repository
git clone https://github.com/punitxdev/algorithm-complexity-visualizer.git
cd algorithm-complexity-visualizer

# Run Locally (Choose one specific to your OS)
open index.html                    # macOS
xdg-open index.html                # Linux
python3 -m http.server 8080        # Any OS → localhost:8080
```

> **Zero dependencies. No NPM setup. No build step. Run directly from the browser.**

<br>

## Project Structure

```text
algorithm-complexity-visualizer
 ├── index.html        → Page layout and structural markup
 ├── style.css         → Styling, CSS variables, and responsive design
 ├── chart.js          → Chart.js configuration and time complexity data generation
 ├── simulator.js      → Implementation of 6 search/sort algorithm animations
 ├── app.js            → Main controller: Event binding, logic, and initialization
 └── README.md
```

<br>

## Built With

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic Document Object Model structure |
| **CSS3** | Custom themes, property inheritance, Flexbox, layout Grids |
| **Vanilla JS** | Client-side scripting, async/await animations |
| **Chart.js** | Client-side interactive data manipulation and plotting via CDN |
| **Google Fonts** | Professional web font typography |

<br>

## Contributing

Contributions, constructive feedback, and feature iterations are welcome.

```bash
# Workflow: Create a fork → Branch → Implement Feature → Publish
git checkout -b feature/amazing-feature
git commit -m "Add amazing feature"
git push origin feature/amazing-feature
```

<br>
