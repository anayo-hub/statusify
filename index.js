function statusify(message, options = {}) {
  const { color = "red", timeout = 5000, target = console } = options;

  if (typeof target.log !== 'function') {
    throw new Error('Invalid target object. It must have a log method.');
  }

  target.log(`%c${message}`, `color: ${color};`);

  if (timeout > 0) {
    setTimeout(() => {
      target.log("Message cleared");
    }, timeout);
  }
}

module.exports = statusify;
