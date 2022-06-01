// Ex.5
// - Are these code fragments equal? In other words, do they behave the same way in any circumstances, for any handler functions?

promise.then(f1).catch(f2);
Versus: promise.then(f1, f2);
//avli kamelan iek zanjire tashkil mide
//va darvaqe javabe avali rikhte mishe to dovomi ke age error dshte bshe tavasote catch badi handel mishe
//...
// vali to 2 aslan zanjireii tshkil nemishe ke bekhad f2 ro mortabet kone be f1
