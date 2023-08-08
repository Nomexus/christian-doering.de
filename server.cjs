import("./server.js")
  .then()
  .catch((e) => console.log(e.message, e.stack));
