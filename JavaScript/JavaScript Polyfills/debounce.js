function log() {
  console.log("Debounced function executed");
}

const debouncedLog = debounce(log, 2000);

// Call the debounced function multiple times
debouncedLog();
debouncedLog();
debouncedLog(); // Only this call will actually invoke `log` after 2 seconds

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

const debouncedLogPolyfill = debounce(log, 2000);
debouncedLogPolyfill();
debouncedLogPolyfill();
debouncedLogPolyfill(); // Only this call will actually invoke `log` after 2 seconds
