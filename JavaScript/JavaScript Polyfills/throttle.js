function log() {
  console.log("Throttled function executed");
}

const throttledLog = throttle(log, 2000);

// Call the throttled function multiple times
throttledLog();
throttledLog();
throttledLog(); // Only the first call will actually invoke `log` immediately

function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

const throttledLogPolyfill = throttle(log, 2000);
throttledLogPolyfill();
throttledLogPolyfill();
throttledLogPolyfill(); // Only the first call will actually invoke `log` immediately
