# Laravel Jetstream, Inertia, Tailwind CSS, and Vuetify Starter Template

Welcome to the Laravel Jetstream, Inertia, Tailwind CSS, and Vuetify Starter Template! This project provides a solid foundation for building modern web applications with Laravel on the backend and Inertia.js for server-side rendering on the frontend, styled using Tailwind CSS and Vuetify.

## Created by: Kukuh Tri Winarno Nugroho

- LinkedIn: [Kukuh Tri Winarno Nugroho](https://www.linkedin.com/in/kukuhtri99/)
- Website: [kukuhtri.my.id](https://kukuhtri.my.id/)

---

## Introduction

This starter template allows you to quickly scaffold a new Laravel web application using some of the most popular frameworks and libraries like:

- Laravel - A popular PHP web application framework. Laravel is known for its elegant syntax, great documentation and amazing community support. It makes building robust and scalable web applications a breeze.

- Jetstream - Provides authentication, registration and account management screens out of the box. Jetstream takes the pain out of building the boring but essential parts of a web app like user registration and login.

- Inertia.js - Allows building single page apps in a way that feels like a multi-page app. Inertia.js brings the best of both worlds for building interactive UIs that also have great SEO on the server-side.

- Vue.js - A progressive JavaScript framework for building user interfaces. Vue is loved for its approachablity and flexibility. The virtual DOM makes it really fast too.

- Tailwind CSS - A utility-first CSS framework for rapid UI development. With Tailwind you can build custom designs without fighting CSS specificity issues.

- Vuetify - Material Design component framework for Vue.js. Vuetify components help you quickly build beautiful material-inspired interfaces.

Together these tools allow you to build a robust, secure and good-looking web app really quickly. The combination of Laravel and Vue.js is especially powerful in 2022.

## Differences Features with Original One

I have made several exciting changes compared to the original Laravel Jetstream template to make this starter template more visually appealing and user friendly:

- Redesigned the default Jetstream authentication screens with a sleek, modern layout using custom Tailwind CSS and Vuetify components. The login, register and password reset pages now have a premium theme-like style.

- Swapped out some of the standard Tailwind CSS form controls, buttons and other elements with matching Vuetify components. This gives the app a more polished and consistent look.

- Created a new main dashboard page with material design cards, charts and metrics for an at-a-glance overview. Replaced the default home page.

- Changed the overall application layout to use a clean vertical nav menu on the left instead of top navigation. Also added some nice custom components like user avatar and notifications.

- Added several example page templates like settings, profile, tasks etc to demonstrate different layouts and UI elements.

- Configured Vuetify theme colors and custom CSS to complement the Tailwind defaults. Achieved a cohesive material design styling throughout.

- Set up Vuex for state management instead of relying solely on local component state. Great for scaling up bigger apps.

- And more! Explore the code to see all the changes.

## Prerequisites

- PHP >= 8.2

  - You will need PHP 8.2 or higher installed on your system to run Laravel 9. Installation instructions can be found at https://www.php.net/manual/en/install.php

- Composer

  - Composer is the package manager for PHP. Installation instructions can be found at https://getcomposer.org/doc/00-intro.md

- Node.js

  - You will need Node.js installed to run the frontend build tools. Installation instructions can be found at https://nodejs.org/en/download/

- NPM
  - NPM is the package manager for Node.js. It comes bundled with Node.js, so no separate installation is needed.

## Getting Started

To get started with this template, follow these simple steps:

1. Clone the repository:

```
git clone https://github.com/kukuhtri1999/laravel-jetstream-vuetify
```

then go to project directory (you can rename the directory later)

```
cd laravel-jetstream-vuetify
```

2. Install dependencies:

```
composer install
npm install
```

3. Configure environment variables in `.env` file.

4. Generate application key:

```
php artisan key:generate
```

5. Run database migrations:

```
php artisan migrate
```

6. Run npm build scripts:

```
npm run dev
```

7. Run local development server:

```
php artisan serve
```

That's it! The starter template is now up and running. Start building your next great web app on top of it.

Let me know if you have any other questions! This starter kit provides an amazing foundation for building robust and beautiful web apps with Laravel and Vue. The combination of these awesome frameworks and libraries will make development a breeze.
