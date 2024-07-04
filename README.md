# Statusify

A versatile JavaScript utility for displaying status messages with styling and timeout options. Ideal for providing feedback in the browser console, HTML elements, or custom logging targets.

## Installation

You can use this module directly without installation if it is in your project's directory, or you can install it from npm:

```sh
npm install statusify
```

### Usage

js

```sh
const statusify = require('statusify'); // Or adjust path if not installed

// Basic usage (logs to console with default red color and 5-second timeout)
statusify("This is a message");

// Custom color and timeout (logs to console)
statusify("Warning!", { color: "orange", timeout: 3000 });

// Display message in an HTML element
const messageContainer = document.getElementById("message-container");
statusify("Hello from Statusify!", {
  color: "blue",
  timeout: 2000,
  target: messageContainer
});

// Custom logging target (e.g., for testing)
const mockLogger = {
  log: (message, ...args) => {
    console.log(`[MOCK] ${message}`, ...args);
  },
};

statusify("Test message", { target: mockLogger });

```

#### Parameters

- message (string): The text content of the status message to display.
- options (object - optional): An object containing configuration settings:
- color (string, default: "red"): The color of the message text in CSS format (e.g., "blue", "#FF5733").
- timeout (number, default: 5000): The time in milliseconds before the message disappears (set to 0 to disable auto-clearing).
- target (object, default: console): The object where the message will be displayed. This can be:
- The browser console object (default).
- An HTML element (e.g., obtained using document.getElementById).
- Any custom object with a log method (e.g., a logging utility).

Example
Here is a complete example:

html

```sh
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>statusify Example</title>
</head>
<body>
    <div id="message-container"></div>
    <script type="module">
    import statusify from './node_modules/statusify/index.js';

    const msg = document.querySelector('h1');

    // Display a success message
    statusify(msg, 'Operation successful!', 'green');

    // Display an error message
    statusify(msg, 'Something went wrong.', 'red');
    </script>

</body>
</html>
```

- Node.js (Log to Console)

  ```sh
  const statusify = require('statusify');
  statusify("Error: File not found", { color: "red" });
  statusify("Success: Operation completed", { color: "green", timeout: 0 }); // Persistent message
  ```

##### Error Handling

**Error Handling**

If you provide an invalid `target` object (one without a `log` method or a `textContent` property), `statusify` will throw an error to help you troubleshoot.

License
This project is licensed under the ISC License.
