let ride = new Promise((resolve, reject) => {
  const arrived = true;
  if (arrived) {
    resolve("success");
  } else {
    reject("cancelled!");
  }

  ride
    .then((message) => {
      console.log("Your ride was" + message);
    })
    .catch((message) => {
      console.log("Your ride was" + message);
    });
});
