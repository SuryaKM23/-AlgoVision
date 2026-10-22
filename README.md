# AlgoVision — Universal DSA Visualizer & Complexity Analyzer

**AlgoVision** is a modern, interactive, educational web application designed for students, interview candidates, and competitive programmers. It allows users to write or paste code in **JavaScript, Python, Java, and C++**, visualize execution step by step, inspect variables and data structures, and analyze computational time and space complexity with AST-driven precision.

---

## 🌟 Key Features

### 1. Multi-Language Code Tracing Engine
- **Supported Languages**: JavaScript (ES6+), Python 3, Java (JDK 17+), C/C++ (C++20), and TypeScript.
- **Language Detection**: Automatic syntax identification for Java class/main signatures, C++ `#include` / `vector`, Python indentation/def, and JavaScript.
- **Execution Sandboxing**: Client-side sandboxed execution with strict watchdog limits (prevents infinite loops such as `while (true)` from freezing the browser).

### 2. Step-by-Step Interactive Playback & State Restoration
- **Backward Stepping State Restoration**: Moving backwards restores the exact immutable variable snapshot, call stack, data structures, and highlights.
- **Timeline Scrubbing Slider**: Jump instantly to any step from $0$ to $N$ with live state preview.
- **Playback Controls**: Play, Pause, Resume, Step Forward, Step Backward, Restart from Step 1, Reset, and Variable Speeds ($0.25\times$, $0.5\times$, $1\times$, $2\times$, $4\times$).
- **Active Line Tracking**: Synchronized source-line highlighting in the editor with glowing indicator arrows.

### 3. Specialized Data Structure Visualizer
- **1D Arrays**:
  - Element boxes with value, array length, and index labels.
  - Height bars reflecting relative magnitude (ideal for sorting algorithms).
  - Floating animated pointer badges (`i`, `j`, `left`, `right`, `low`, `high`, `mid`).
  - Color-coded action highlights: **Amber** for Comparisons, **Rose** for Swaps, and **Emerald** for Active Writes.
- **2D Matrices / Grids**:
  - Coordinate row/column indexed grid table with cell value inspection.

### 4. Automatic Computational Complexity Analyzer
- **Asymptotic Classification**: Worst-Case, Best-Case, Average-Case, Big-$\Theta$, and Big-$\Omega$ notations.
- **Space Complexity**: Distinguishes Auxiliary Space from Input Storage ($O(1)$, $O(n)$, $O(n^2)$, and recursion call stack depth).
- **Recurrence Relations**: Detects divide-and-conquer and branching recursion relations (e.g. $T(n) = 2T(n/2) + O(n)$ or Fibonacci tree recursion).
- **Plain-English Explanations**: Details dominant operations, loop iteration counts, nesting levels, assumptions, and limitations.

### 5. Code Optimization & Alternative Solutions Advisor
- Detects quadratic bottlenecks (e.g., $O(n^2)$ Two-Sum brute force or unoptimized Bubble Sort).
- Proposes linear $O(n)$ Hash Map or logarithmic divide-and-conquer solutions.
- Shows before-and-after complexity comparisons, memory/runtime trade-offs, and edge case caveats.
- One-click **"Load into Editor"** button to load the optimized code directly into the workspace.

### 6. Interactive Learning Mode (Striver A2Z Style)
- Curated DSA syllabus with problem statements, intuitive explanations, dry runs, edge cases, and interview tips.
- **Guided Prediction Mode**: Test understanding by predicting the next variable value, swap, or branch before stepping forward.
- Interactive multiple-choice questions with instant feedback and celebratory animations.

### 7. Empirical Benchmarking Suite
- Test algorithms across growing input sizes ($N = 10, 50, 100, 250, 500$).
- Visual comparison bar charts showing quadratic operation explosion vs linear scaling.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ or v24+)
- npm (v9+ or v10+)

### Installation
```bash
cd algovision-universal-dsa-visualizer
npm install
```

### Running Locally
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### Running Automated Test Suite
```bash
npm test
```
Runs 12 unit and integration tests across Vitest covering:
- Execution engine state immutability & backward stepping
- Multi-language parity (JS, Python, Java, C++)
- Complexity analyzer asymptotic accuracy
- Optimization advisor recommendations
- Sandbox infinite loop watchdog protection

### Building for Production (Static Deployment)
```bash
npm run build
```
Creates an optimized static bundle in `dist/` ready to be hosted on GitHub Pages, Vercel, Netlify, or any static web host.

---

## 📁 Project Architecture

```
src/
├── types/
│   ├── events.ts              # Unified ExecutionEvent schema, CallFrame, DataStructureSnapshot
│   ├── complexity.ts          # ComplexityEstimate & OptimizationSuggestion schemas
│   └── dsa.ts                 # Visualizer data models
├── core/
│   ├── engine/
│   │   └── ExecutionEngine.ts # Playback controls, step navigation & state restoration
│   ├── adapters/
│   │   ├── LanguageAdapter.ts # Base adapter interface
│   │   ├── JavaScriptAdapter.ts # JavaScript AST instrumentation & tracer
│   │   ├── PythonAdapter.ts   # Python syntax transpiler & algorithmic tracer
│   │   ├── JavaAdapter.ts     # Java algorithmic transpiler & tracer
│   │   ├── CppAdapter.ts      # C/C++ algorithmic transpiler & tracer
│   │   ├── adapterRegistry.ts # Language detection & adapter registry
│   │   └── tracerUtils.ts     # State cloning, pointer detection & explanation generation
│   └── analyzer/
│       ├── ComplexityAnalyzer.ts # AST loop/recursion time & space complexity analyzer
│       └── OptimizationAdvisor.ts # Algorithm pattern optimizer & comparison engine
├── components/
│   ├── layout/
│   │   └── Header.tsx         # Brand bar, language selector, sample dropdown, mode tabs
│   ├── editor/
│   │   └── CodeEditor.tsx     # Code editor with active line indicators & test inputs
│   ├── visualizers/
│   │   ├── VisualizerContainer.tsx # Stage container with legend
│   │   └── ArrayVisualizer.tsx    # 1D/2D arrays, pointers, swaps, comparison highlights
│   ├── controls/
│   │   └── PlaybackControls.tsx   # Timeline scrubber slider, forward/backward, speed controls
│   └── panels/
│       ├── VariablesPanel.tsx     # Current scope variables table
│       ├── CallStackPanel.tsx     # Active call stack frames & parameters
│       ├── ConsoleOutput.tsx      # Standard output terminal
│       ├── ComplexityPanel.tsx    # Asymptotic Big-O cards & explanations
│       ├── OptimizationPanel.tsx  # Optimized equivalent code & trade-offs
│       ├── LearningPanel.tsx      # Striver's A2Z lessons & interactive quiz
│       └── BenchmarkPanel.tsx     # N vs operations/time benchmark charts
├── data/
│   ├── samples.ts             # Curated sample algorithms across all 4 languages
│   └── learningCurriculum.ts  # DSA course lessons & interactive quiz questions
└── tests/
    ├── engine.test.ts         # Tests for ExecutionEngine & adapters
    ├── adapters.test.ts       # Tests for cross-language parity
    └── complexity.test.ts     # Tests for complexity analyzer & optimizer
```
