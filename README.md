# 🚀 CODTECH IT Solutions - React.js Web Development Internship

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Three.js](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)

Welcome to the central repository for my **React.js Web Development Internship** at **CODTECH IT Solutions Pvt. Ltd.**

This repository contains the complete source code and documentation for the four major projects developed over the course of the 6-week internship program. These projects demonstrate a progression of skills ranging from live API integration and 3D WebGL rendering to advanced React Hooks patterns and multi-page travel planning applications with full CRUD persistence.

---

## 👨‍💻 Intern Information

| Field | Value |
|---|---|
| **Name** | Pranav Sachin Naikude |
| **Intern ID** | CITS3986 |
| **Internship Domain** | React.js Web Development |
| **Organisation** | CODTECH IT Solutions Pvt. Ltd. |
| **Duration** | 6 Weeks (06 June 2026 – 18 July 2026) |

---

## 📂 Project Portfolio

### 1️⃣ [React Weather Hub](./react-weather-hub)

A beautifully designed, real-time weather dashboard that fetches live meteorological data from the OpenWeatherMap API.

- **Key Features:** City search with live autocomplete, current conditions display (temperature, humidity, wind speed, UV index), 5-day forecast cards, °C/°F unit toggler, and smooth dark/light glassmorphic theme with persistent user preferences.
- **Tech Stack:** React 19, Vite, Custom Hooks (`useTemperatureUnit`, `useForecastData`), CSS Modules, OpenWeatherMap API.
- **Focus:** REST API consumption, custom hook abstractions, responsive data-driven UI design, and localStorage-based preference persistence.

---

### 2️⃣ [React 3D Product Viewer](./react-3d-product-viewer)

An immersive, interactive 3D product showcase leveraging WebGL rendering through React Three Fiber.

- **Key Features:** Real-time 360° model rotation and zoom controls, multi-product catalogue switcher, dynamic material/finish selectors, auto-rotation toggle, environment lighting presets, and a graceful WebGL capability fallback panel.
- **Tech Stack:** React 19, Vite, React Three Fiber (R3F), `@react-three/drei`, Lucide Icons, CSS Modules.
- **Focus:** WebGL integration within React, 3D scene composition, hardware capability detection, and premium glassmorphic product UI design.

---

### 3️⃣ [Fitness Tracker (React Hooks)](./fitness-tracker-react-hooks)

A comprehensive fitness management dashboard built to demonstrate advanced React Hooks patterns and custom hook architecture.

- **Key Features:** Workout logger with calorie estimation (MET-based), real-time BMI calculator with metric/imperial toggle, weekly progress charts (Chart.js), daily goal tracking, activity history with filters, and animated dark/light theme toggle.
- **Tech Stack:** React 19, Vite, Chart.js, `react-chartjs-2`, Custom Hooks (`useLocalStorage`, `useBMI`, `useTheme`), central `useReducer`, CSS Modules.
- **Focus:** Advanced hook composition (`useState`, `useEffect`, `useReducer`, `useMemo`, `useCallback`, custom hooks), data visualization, and fully persisted state via localStorage.

---

### 4️⃣ [Travel Planner App](./travel-planner-app)

A multi-page travel planning application for managing complete trip itineraries, budgets, and packing checklists.

- **Key Features:** Full trip CRUD with custom emoji icons and gradient cover themes, chronological itinerary timeline, expense budget tracker with live over-budget alerts and category breakdowns, packing checklist with category filters, and a global dashboard with search and sort controls.
- **Tech Stack:** React 19, Vite, React Router v6, `lucide-react`, Custom Hook (`useLocalStorage`), React Context API, CSS Modules.
- **Focus:** Multi-page routing, global state management via Context API, full CRUD persistence to localStorage, and responsive glassmorphic UI with light/dark theming.

---

## 🎯 Learning Outcomes

Throughout this 6-week intensive internship, I successfully:

- Mastered **component-driven architecture** and advanced hook patterns (`useMemo`, `useCallback`, `useReducer`, Custom Hooks) in React.js.
- Consumed and integrated **live REST APIs** (OpenWeatherMap) with proper error handling and loading states.
- Built immersive **3D WebGL experiences** with React Three Fiber and gracefully handled hardware limitations.
- Designed **modular, scalable CSS systems** using CSS Variables and CSS Modules, without relying on utility-first frameworks.
- Implemented **multi-page routing** with React Router v6 including dynamic route parameters and navigation guards.
- Applied **global state management** patterns using React Context API and custom persistence hooks.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to explore the individual project directories for specific setup instructions and documentation.

## 📜 License

This repository is open-source and available under the [MIT License](LICENSE).

---

**Crafted with ❤️ by Pranav Sachin Naikude for CODTECH IT Solutions.**
