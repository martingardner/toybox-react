# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



### Thoughts
Signals is basically pub/sub with internal cruft on Reacts side to allow it to burrow and only update the chosen area.
Given that and that it is likely going to get used for a smaller global store why didn't they give this option to all the other options that already exist?
