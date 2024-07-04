The issue with your README file appearing with garbled characters on the npm website is likely due to encoding issues. To fix this, ensure your README file is saved with UTF-8 encoding without a BOM (Byte Order Mark). Here's how to check and fix this issue:

### Using a Text Editor (VS Code)

1. **Open the README.md file in VS Code**:

   - Open your README.md file in Visual Studio Code.

2. **Check and change encoding**:

   - Look at the bottom right corner of the VS Code window. You will see the current encoding displayed (e.g., "UTF-8", "UTF-8 with BOM").
   - If it shows "UTF-8 with BOM" or any other encoding, click on it and select "Save with Encoding".
   - Choose "UTF-8" from the list.

3. **Save the file**:
   - Save the file after changing the encoding to UTF-8.

### Using a Text Editor (Notepad++)

1. **Open the README.md file in Notepad++**:

   - Open your README.md file in Notepad++.

2. **Change encoding**:

   - Go to the "Encoding" menu.
   - Select "Convert to UTF-8" (not "Convert to UTF-8-BOM").

3. **Save the file**:
   - Save the file after changing the encoding.

### After Ensuring Correct Encoding

Once you have ensured the README file is saved with UTF-8 encoding without BOM, you can proceed with the following steps to update the package on npm:

1. **Re-publish the package**:
   - Make sure your package.json and other necessary files are in place.
   - Run the npm publish command to re-publish your package with the corrected README file.

### Example README.md Content

Here's an example of how your README.md content should look:

````markdown
# Statusify

A versatile JavaScript utility for displaying status messages with styling and timeout options. Ideal for providing feedback in the browser console, HTML elements, or custom logging targets.

## Installation

You can use this module directly without installation if it is in your project's directory, or you can install it from npm:

```sh
npm install statusify
```
````

## Usage

```js
const statusify = require("statusify");

// Basic usage (logs to console with default red color and 5-second timeout)
statusify("This is a message");

// Custom color and timeout (logs to console)
statusify("Warning!", { color: "orange", timeout: 3000 });

// Display message in an HTML element
const messageContainer = document.getElementById("message-container");
statusify("Hello from Statusify!", {
  color: "blue",
  timeout: 2000,
  target: messageContainer,
});

// Custom logging target (e.g., for testing)
const mockLogger = {
  log: (message, ...args) => {
    console.log(`[MOCK] ${message}`, ...args);
  },
};
statusify("Test message", { target: mockLogger });
```

## Parameters

- `message` (string): The text content of the status message to display.
- `options` (object - optional): An object containing configuration settings:
  - `color` (string, default: "red"): The color of the message text in CSS format (e.g., "blue", "#FF5733").
  - `timeout` (number, default: 5000): The time in milliseconds before the message disappears (set to 0 to disable auto-clearing).
  - `target` (object, default: console): The object where the message will be displayed. This can be:
    - The browser console object (default).
    - An HTML element (e.g., obtained using `document.getElementById`).
    - Any custom object with a `log` method (e.g., a logging utility).

## Example

Here is a complete example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Statusify Example</title>
  </head>
  <body>
    <div id="message-container"></div>
    <script src="path/to/your/statusify.js"></script>
    <script>
      const statusify = require("statusify");
      const messageContainer = document.getElementById("message-container");
      statusify("Hello from Statusify!", {
        color: "blue",
        timeout: 2000,
        target: messageContainer,
      });
    </script>
  </body>
</html>
```

## License

This project is licensed under the ISC License.
