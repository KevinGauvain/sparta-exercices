function onlyMyTips(invoices) {
  // Code here
  const filtered = invoices.filter((element) => element.waiter === "Yourself");
  //console.log(filtered);
  const maped = filtered.map((element) => element.tip);
  //console.log(maped);
  //const reduced = maped.reduce((a, b) => a + b);
  //console.log(reduced);
  return maped;
}

const todaysInvoices = [
  { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
  { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
  { clients: 2, waiter: "Yourself", price: 2900, tip: 100 },
];

onlyMyTips(todaysInvoices);

// Do not remove the following line, it is for tests
module.exports = onlyMyTips;
