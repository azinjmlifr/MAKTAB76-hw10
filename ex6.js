// Ex.6
// What do you think? Will the .catch trigger? Explain your answer.
new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

//javab ->"Whoops!"
//darvaqe code ha khat be khat ejra mishan
//vaqti mirese be khat 4 ke timeout dre dige montazer nmimone ta time e ono por kone
// mire khat badi
//pas engar ke ignore mishe
//va darvaqe promise handel nemishe
