# Greenspoon E-Menu App

## Overview
The Greenspoon E-Menu App is an electronic menu platform designed for the Greenspoon restaurant, built as a social outreach program by a team of students. The application, developed using Next.js, provides a digital solution to showcase the restaurant's extensive menu, enabling customers to explore a wide variety of delicious dishes conveniently. The project is hosted at [https://green-spoon-e-menu.vercel.app/](https://green-spoon-e-menu.vercel.app/).

## Objective
The primary objective of the Greenspoon E-Menu App is to create an accessible, user-friendly digital menu for the Greenspoon restaurant, replacing traditional paper menus with a modern, interactive experience. The app aims to enhance customer engagement by providing an organized and visually appealing way to browse the restaurant’s offerings, including soups, Chinese starters, tandoor starters, noodles, rice dishes, biryanis, dosas, North Indian gravies, South Indian snacks, beverages, desserts, and more.

## Goals
- **Digitize the Menu**: Provide a seamless, electronic version of the Greenspoon restaurant menu to improve accessibility and reduce reliance on physical menus.
- **Enhance User Experience**: Create an intuitive interface for customers to browse dishes categorized by sections such as Soups, Chinese Starters, Tandoor Starters, Biryanis, and more.
- **Promote Sustainability**: Support eco-friendly practices by reducing the need for printed menus.
- **Community Impact**: Deliver a meaningful social outreach project that benefits the restaurant and its customers while providing students with practical development experience.

## Features
- **Comprehensive Menu Display**: Showcases a diverse range of dishes, including Soups (e.g., Tomato Soup, Manchow Soup), Chinese Starters (e.g., Gobi Manchurian, Paneer Chilly), Tandoor Starters (e.g., Paneer Tikka, Mushroom Malai Tikka), Noodles/Rice varieties, Biryanis, Dosa Specialties, North Indian Gravies, South Indian Snacks, Beverages, and Desserts.
- **Categorized Navigation**: Organizes dishes into clear categories for easy browsing.
- **Responsive Design**: Ensures compatibility across devices, including desktops, tablets, and mobile phones.
- **Hosted Solution**: Deployed on Vercel for reliable access at [https://green-spoon-e-menu.vercel.app/](https://green-spoon-e-menu.vercel.app/).

## Technologies Used
- **Next.js**: A React-based framework for building a fast, SEO-friendly, and scalable web application.
- **Vercel**: Hosting platform for deploying and managing the application.
- **CSS/JavaScript**: For styling and interactivity to enhance the user interface.
- **GitHub**: Version control and collaborative development.

## Project Structure
```
greenspoon-e-menu/
├── .gitignore
├── apphosting.yaml
├── components.json
├── menu.json
├── next-env.d.ts
├── next.config.ts
├── oldmenu.json
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── .env
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── dish/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── page.tsx
│   │   ├── components/
│   │   ├── hooks/
│   │   └── lib/
```

## Getting Started
To run the Greenspoon E-Menu App locally on your personal computer, follow these steps:

### Prerequisites
- **Node.js**: Ensure Node.js (version 14 or higher) is installed. Download it from [nodejs.org](https://nodejs.org/).
- **Git**: Install Git for cloning the repository. Download it from [git-scm.com](https://git-scm.com/).
- **Code Editor**: Use a code editor like Visual Studio Code for development.

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/greenspoon-e-menu.git
   cd greenspoon-e-menu
   ```
   Replace `your-username` with the actual GitHub username hosting the repository.

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   This installs all required dependencies listed in `package.json`.

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   This starts the Next.js development server. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

4. **Build for Production** (optional):
   ```bash
   npm run build
   npm run start
   ```
   This creates an optimized production build and starts the server.

### Folder Structure
```
greenspoon-e-menu/
├── src/
│   ├── app/
│   │   ├── about/              # Pages related to the 'About' section
│   │   ├── contact/            # Pages related to the 'Contact' section
│   │   ├── dish/               # Pages related to dish details
│   │   ├── favicon.ico         # Favicon for the website
│   │   ├── globals.css         # Global CSS styles
│   │   ├── layout.tsx          # Layout component for the app
│   │   ├── loading.tsx         # Loading state component
│   │   ├── page.tsx            # Main page component
│   │   ├── components/         # Reusable UI components
│   │   ├── hooks/              # Custom React hooks
│   │   └── lib/                # Utility functions and libraries
├── .gitignore                  # Git ignore file
├── apphosting.yaml             # Configuration for app hosting
├── components.json             # JSON file for component configurations
├── menu.json                   # Main menu data in JSON format
├── next-env.d.ts               # TypeScript environment definitions for Next.js
├── next.config.ts              # Next.js configuration file
├── oldmenu.json                # Older version of the menu data
├── package-lock.json           # Lock file for package versions
├── package.json                # Project dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration
├── README.md                   # This file
├── .env                        # Environment variables
```

## Contributing
Contributions are welcome! If you’d like to contribute to the Greenspoon E-Menu App, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Open a Pull Request on GitHub.
Please ensure your code follows best practices and includes appropriate documentation.

## Contact
For any inquiries or feedback, please reach out via the repository’s Issues section on GitHub.

## Acknowledgments
- Thanks to the Greenspoon restaurant for inspiring this project.
- Appreciation to the student team for their dedication to this social outreach initiative.
- Gratitude to the open-source community for providing tools like Next.js and Vercel.