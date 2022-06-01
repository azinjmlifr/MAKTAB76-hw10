// - what is the Output of the code below and why ?

let promise = new Promise(function (resolve, reject) {
  resolve(1);
  setTimeout(() => resolve(2), 1000);
});
promise.then(alert);
//resolve(1) ro namiesh mide
//chon resolve(2) ro kolan ignore mikone
