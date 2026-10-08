function createEventEmitter() {
  const events = new Map();

  return {
    on(event, listener) {
      if (!events.has(event)) {
        events.set(event, []);
      }

      events.get(event).push(listener);
    },

    off(event, listener) {
      if (!events.has(event)) {
        return;
      }

      const listeners = events.get(event);
      const index = listeners.indexOf(listener);

      if (index !== -1) {
        listeners.splice(index, 1);
      }
    },

    emit(event, ...args) {
      if (!events.has(event)) {
        return;
      }

      events.get(event).forEach(listener => {
        listener(...args);
      });
    }
  };
}

const emitter = createEventEmitter();

const listener = (msg) => console.log("Received:", msg);

emitter.on("data", listener);

emitter.emit("data", "Hello");

emitter.off("data", listener);

emitter.emit("data", "Hello again");
