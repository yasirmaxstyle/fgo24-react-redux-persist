# APP LIST TODO FEATURING `useContext()` AND `useRef()`

This project allows users to add anything in the input some works to-do. The input value will be appended directly in the lists below it. And it comes with checkboxes, which is when clicked the text will be line-crossed. This project mainly use hooks such as `useContext` to make global variable and `useRef` to access element in components.

## Key Features

- Add activities to do
- Checkmark it when done
- Delete it from list when not needed

[Screencast from 2025-05-20 21-56-58.webm](https://github.com/user-attachments/assets/c664fcbb-ab0f-49f9-bc9e-23e5a91542b2)

## HOW TO RUN THIS PROGRAM

### Using Node JS

1. Clone this project
```sh
git clone https://github.com/yasirmaxstyle/fgo24-react-todo
```
2. Get into the path
```sh
cd fgo24-react-todo
```
3. Install NPM
```sh
npm install
```
4. Run in dev mode
```sh
npm run dev
```
5. Your app will run in http://localhost:5173, since it is built with Vite

### Using Docker
1. Clone this project
```sh
git clone https://github.com/yasirmaxstyle/fgo24-react-todo
```
2. Get into the path
```sh
cd fgo24-react-todo
```
3. Build image
```bash
docker build . -t todo:latest
```
4. Run image with docker
```bash
docker run -p 8080:80 -d todo:latest
```
5. Visit your app in http://localhost:8080

## TECHNOLOGIES
- [React JS](https://react.dev/)
- [Vite](https://vite.dev/)
- [NPM](https://www.npmjs.com/)

## DEPENDENCIES
- [react-router](https://www.npmjs.com/package/react-router)

## How to take part in this project
You are free to fork this project, make improvement and submit a pull request to improve this project. If you find this useful or if you have suggestion, you can start discussing through my social media below.
- [Instagram](https://www.instagram.com/yasirmaxstyle/)
- [LinkedIn](https://www.linkedin.com/in/muhamad-yasir-806230117/)

## License
This project is under MIT License
