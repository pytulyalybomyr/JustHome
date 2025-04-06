# Project Name

## Description

This project is a web application created using HTML, CSS (with Sass), and vanilla JavaScript. The application is designed to be a dynamic and user-friendly platform that displays a variety of data and allows users to interact with it through search, sorting, filtering, pagination, and more. This project is built without the use of any frameworks, focusing on core web development skills.

## Features

- **Responsive Design**: The app is fully responsive and works across all devices, including desktops, tablets, and mobile phones.
- **Dynamic Gallery**: Displays a set of items (e.g., courses or properties) in a gallery with pagination.
- **Search Functionality**: Allows users to search for items within the data.
- **Sorting & Filtering**: Provides functionality to sort and filter data based on specific criteria.
- **Interactive Map**: Includes a map showing a specific location.
- **Sass for Styling**: Uses Sass to manage and organize CSS for a more efficient and scalable style system.

## Technologies Used

- **HTML**: Semantic markup for structured content.
- **CSS (Sass)**: Custom styles with Sass for better organization and reusability.
- **JavaScript**: Handles dynamic behavior, such as pagination, search, sorting, and interaction with data.
- **JSON**: Used for storing data locally in a structured format.
- **Google Maps API**: Integrated to show a map on the "Contacts" page.

## Setup Instructions

### Prerequisites

Before running the project, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-link>

2. Navigate into the project folder

   ```bash
   cd <project-folder>

3. Install dependencies:

   ```bash
   npm install

4. Compile Sass into CSS:

   ```bash
   npm run compile

5. Start the project:

   ```bash
   npm run start
   
The project will be available in your browser at http://localhost:3000.

Project Structure
bash
Копіювати
Редагувати
/src
  /assets        # Images and other static assets
  /css           # Compiled CSS files
  /js            # JavaScript files
  /data          # Local JSON data
  /scss          # Sass source files
  /index.html    # Main HTML file
  /README.md     # This file
  /package.json  # Project dependencies and scripts
  /eslint.config.js # ESLint configuration
Scripts
npm run compile: Compiles all .scss files into .css files.

npm start: Starts the development server.

npm run lint: Lints the JavaScript and Sass files using ESLint and Stylelint.

Linters
This project uses the following linters to maintain code quality:

ESLint for JavaScript

Stylelint for Sass/CSS

Linting Errors
If you encounter any linting errors, you can fix them manually or use the following command to automatically fix some issues:

bash
Копіювати
Редагувати
npm run lint -- --fix
Contributing
If you would like to contribute to this project, feel free to fork the repository and create a pull request with your changes. Ensure that you follow the project's coding style and conventions.

License
This project is open source and available under the MIT License.

markdown
Копіювати
Редагувати

### Основні елементи:

1. **Опис проекту** — дає загальну інформацію про проєкт.
2. **Технології** — вказує на основні технології, використані в проєкті.
3. **Інструкції по налаштуванню** — включає кроки для встановлення та запуску проєкту.
4. **Структура проєкту** — демонструє, як організовані файли в проекті.
5. **Скрипти** — описує команди для компіляції, запуску серверу та лінтингу.
6. **Лінтери** — пояснює, як лінтувати код за допомогою ESLint та Stylelint.
7. **Ліцензія** — вказує на тип ліцензії для цього проекту (якщо є).

Заміни `<repository-link>` та `<project-folder>` на відповідні значення для твого проєкту. Якщо будуть якісь зміни чи додаткові вимоги, можеш адаптувати цей шаблон відповідно до твоїх потреб.





