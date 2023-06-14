# React Form with react-hook-form

This is a simple React form component that utilizes the `react-hook-form` library for form validation and handling form submissions.

## Installation

1. Clone the repository:
    git clone https://github.com/Shakeelkhuhro/react-hook-form

2. Navigate to the project directory:
    cd react-form-with-react-hook-form
3. Install the dependencies:
    npm install
4. Start the application:
    npm start

The app will run on (http://localhost:3000).

## Usage

The `FormHook` component renders a form with input fields for first name, last name, email, and password. It uses the `react-hook-form` library for form validation and handling form submissions.

### Form Validation

- First Name: Required field.
- Last Name: Required field.
- Email: Required field and must be a valid email address.
- Password: Required field and must be at least 6 characters long.

If any of the fields are invalid or empty, error messages will be displayed below the respective input fields.

### Handling Form Submission

When the user submits the form, the `onSubmit` function is called, which logs the form data to the console.

## Dependencies

- React
- react-hook-form

## Contributing

Contributions are welcome! If you find any issues or want to enhance this project, feel free to open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
