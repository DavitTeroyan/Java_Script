function createEventHub() {
  const events = {};

  function on(eventName, callback) {
    if (!events[eventName]) {
      events[eventName] = [];
    }

    events[eventName].push(callback);
  }

  function emit(eventName, data) {
    if (!events[eventName]) {
      return;
    }

    events[eventName].forEach(callback => {
      callback(data);
    });
  }

  return {
    on,
    emit
  };
}


const eventHub = createEventHub();

eventHub.on("login", (user) => {
  console.log("User logged in:", user);
});

eventHub.emit("login", {
  name: "Aram"
});


eventHub.on("message", (data) => {
  console.log("Listener 1:", data);
});

eventHub.on("message", (data) => {
  console.log("Listener 2:", data);
});

eventHub.emit("message", "Hello!");
