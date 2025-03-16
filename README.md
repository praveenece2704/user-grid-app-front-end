# Users Grid Frontend Application

This is an Angular-based frontend application that interacts with the backend API to fetch and display users in a grid format. The application provides features such as filtering users by role, viewing user details, and displaying user images. It follows best practices for clean code and responsive design.


## Project Overview

This is a Single Page Application (SPA) built with Angular. It communicates with the backend API to fetch users, displays them in a grid format, and allows filtering by roles. Each user can be clicked to view their detailed profile, which includes their image and additional information. The application uses responsive design and lazy loading techniques to improve performance.

## Features
- **Fetch Users API**: Fetches the list of users from the backend and displays them on the list/default page.
- **Grid Layout**: Displays users in a grid format with their details.
- **Filtering**: Users can be filtered by roles. This filtering happens at the backend API.
- **Responsive Design**: The app adapts to different screen sizes, ensuring a smooth experience on mobile, tablet, and desktop.
- **Lazy Loading**: Lazy loading is implemented to improve performance.
- **User Detail Page**: Clicking on a user redirects to a detailed page showing the user's image and additional information.
- **Clean Code Practices**: Implements Atomic Design, Exception Handling, and Environment Layering.

## Technologies Used
- **Angular**: Frontend framework to build the UI components.
- **Angular Router**: For client-side routing to navigate between the list page and user detail page.
- **Bootstrap**: For UI components like grids and buttons.
- **HttpClient**: For making HTTP requests to the backend API.
- **CSS3 **: For styling and implementing responsive design.
- **Jasmine / Karma**: For unit testing and ensuring code coverage.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/praveenece2704/user-grid-app-front-end.git


## Environment Configuration

Environment variables are set through the `src/environments/environment.ts` (for development) and `src/environments/environment.prod.ts` (for production).

1. Open `src/environments/environment.ts` and set the API URL:

   ```ts
   export const environment = {
     production: false,
     apiUrl: 'https://dummyjson.com/users'
   };

## Testing

### Unit Tests

The project includes unit tests written using Jasmine and Karma to ensure the code works as expected.

1. **Run tests with Karma and Jasmine**:

   To run the unit tests in the project, use the following command:

   ```bash
   ng test

### Code Quality & Practices
```Atomic Design```

The codebase follows Atomic Design principles, where components are divided into small, reusable units (atoms, molecules, organisms, etc.).

```Exception Handling```

Proper exception handling is implemented in HTTP requests to handle errors gracefully and show user-friendly messages.

```Environment Layering```

All sensitive configurations, such as the API URL, are externalized into environment variables to ensure a flexible deployment process.

```Unit Tests & Code Coverage```

The application includes unit tests written using Jasmine and Karma, ensuring full code coverage.

```Future scope```

The application currently does not support advanced features like pagination for large user lists (consider adding pagination in the future).
Some minor UI adjustments may be required on smaller screen sizes.



# UserGridApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

