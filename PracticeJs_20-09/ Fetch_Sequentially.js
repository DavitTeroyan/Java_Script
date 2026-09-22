function getUser(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id, name: "User " + id }), 300);
  });
}

async function fetchSequentially() {
  for (let id = 1; id <= 3; id++) {
    const user = await getUser(id);
    console.log(user.name);
  }
}

fetchSequentially();