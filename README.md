# statusify

A simple utility to set status messages on a page.

## Installation

You can install `statusify` via npm:

```sh
npm install statusify
```

Usage
Import the setMessage function and use it to display status messages on a specified HTML element.

js

```sh
import setMessage from 'statusify';

const msg = document.querySelector('h1');

// Display a success message
setMessage(msg, 'Operation successful!', 'green');

// Display an error message
setMessage(msg, 'Something went wrong.', 'red');
Parameters
element (HTMLElement): The HTML element where the message will be displayed.
message (string): The message to display.
color (string): The color of the message text. Default is 'red'.
timeout (number): The time in milliseconds before the message disappears. Default is 5000.
```

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
    <h1 id="message"></h1>
    <script type="module">
        import setMessage from './node_modules/statusify/index.js';

        const msg = document.querySelector('h1');

        // Display a success message
        setMessage(msg, 'Operation successful!', 'green');

        // Display an error message
        setMessage(msg, 'Something went wrong.', 'red');
    </script>
</body>
</html>
```

License
This project is licensed under the ISC License.

Copy code
Add a Description to Your GitHub Repository

When you create a new repository on GitHub, you can add a description of your project. Here's an example description for your "statusify" package:

Description: A simple utility to set status messages on a page. Easily display success, error, or informational messages that disappear after a set timeout.
