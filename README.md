# ⚽ Football App - SPA

Single-page application built with **React + Vite** that displays football standings, teams, matches, and knockout brackets using the Football-Data.org API.  
Organized with a modular architecture: pages, components, hooks, services, and context.

This project was developed as a frontend practice focused on API consumption, React Router navigation, custom hooks, context-based state management and component composition.

---

## 📸 Screenshots

### 🖥️ Desktop

| Home                                          | Matches                                             | Favorites                                               |
| --------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------- |
| ![Home Desktop](screenshots/home-desktop.png) | ![Matches Desktop](screenshots/matches-desktop.png) | ![Favorites Desktop](screenshots/favorites-desktop.png) |

### 📱 Mobile

| Home                                        | Matches                                           | Favorites                                             |
| ------------------------------------------- | ------------------------------------------------- | ----------------------------------------------------- |
| ![Home Mobile](screenshots/home-mobile.png) | ![Matches Mobile](screenshots/matches-mobile.png) | ![Favorites Mobile](screenshots/favorites-mobile.png) |

---

## 🛠️ Technologies Used

- ![REACT](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
- ![VITE](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
- ![REACT ROUTER](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
- ![JAVASCRIPT](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- ![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## ✨ Features

- League standings table for selected competitions (PL, PD, BL1, SA, FL1)
- Team detail page with squad roster and stats
- Upcoming and recent matches per competition
- Knockout bracket visualization for cup competitions
- Save and remove favorite teams persisted in localStorage
- Responsive layout with sidebar navigation

---

## 📦 Installation & Use

- Clone the repository: `git clone https://github.com/cris100fire/football-web.git`
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build for production: `npm run build`
- Add your API Key in `src/services/footballApi.js`

---

## 📚 What I Learned

With this project, I moved beyond layout and structure into real frontend logic:

- Consuming a third-party REST API (Football-Data.org) with fetch and handling responses
- Implementing client-side routing with React Router DOM
- Managing application state with React Context and custom hooks
- Fetching and caching data with `useEffect` and custom hook patterns
- Organizing a React project into pages, components, hooks, services, and context layers
- Building dynamic, responsive UIs with component composition

---

## 📌 Responsiveness

This website is fully responsive and optimized for:

- 📱 Mobile devices
- 📲 Tablets
- 💻 Desktop screens

Built with a mobile-first approach; the layout adapts smoothly across breakpoints using Flexbox and Grid.

---

## 🚀 Future Improvements

- Add dark mode support
- Add live match scores and real-time updates
- Improve accessibility (ARIA labels, keyboard navigation)
- Add search and filter by team or competition
- Add unit and integration tests with Vitest

## 🤝 Contributions

Contributions are welcome! If you find any problems or have any suggestions for improvement, please open an issue or submit a pull request!

---

## 👨‍💻 Author

Developed by **Cristopher Cienfuegos**

---

## 📄 License

This project is under MIT license.
