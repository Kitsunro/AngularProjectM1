# AssignmentApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.5.

## Features

- **Sidenav and Toolbar**: The application includes a responsive sidenav and toolbar for easy navigation. The toolbar contains buttons for toggling the sidenav, searching, and accessing user account options.
- **Login System**: A basic login system is implemented to restrict access to certain routes. Users must log in with valid credentials to access protected pages.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Authentication and Authorization

The application includes a basic login system:

- **Login Component**: Users can log in using the `LoginComponent`. The default credentials are:
  - Username: `admin`
  - Password: `password`
- **Auth Guard**: Routes are protected using an `AuthGuard` to ensure only authenticated users can access certain pages.
- **Logout**: Users can log out to end their session.

## Sidenav and Toolbar

- The sidenav can be toggled using the menu button in the toolbar.
- The toolbar includes additional buttons for search and user account actions.
- The layout is responsive, adjusting the sidenav and content area for smaller screens.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
