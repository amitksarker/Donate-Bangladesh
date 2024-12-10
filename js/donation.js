// donation ammount

// document.getElementById('btn-donate-now')
//     .addEventListener('click', function(event) {
//         event.preventDefault();
//           // get add money to be added

//         const addMoneyInput = document.getElementById ('input-donation-amount').value;
//         console.log(addMoneyInput);








        
// // get current balance
// const balance = document.getElementById('account-balance').innerText;
// console.log( balance)

// // add addMoneyInput with balance
// const addMOneyNumber = parseFloat(addMoneyInput);
// const balanceNumber = parseFloat(balance);
// const newBalance = addMOneyNumber + balanceNumber;
// console.log(newBalance);

// //  update balance
// document.getElementById('account-balance').innerText = newBalance;






// });
// card-1 function

document.getElementById('btn-donate-now').addEventListener('click', function (event) {
  event.preventDefault();
  console.log('add money button');

  


  const addMoney = getInputFieldValueById('input-donation-amount');
  const balance = getTextFieldValueById('account-balance');
  // plus and display amount
  const newBalance = balance + addMoney;
  document.getElementById('account-balance').innerText = newBalance;

  // console.log(addMoney, balance2);

// add transation history

// const div = document.createElement('div');
// div.classList.add('bg-none');
// div.innerHTML=`
// <h4 class="text-xl font-l">${addMoney} Donate for Flood at Noakhali, Bangladesh </h4>
// `
// document.getElementById('history-container').appendChild.div;

})



// card-2 function 

document.getElementById('btn-donate-now-2').addEventListener('click', function (event) {
  event.preventDefault();
  console.log('add money button');

  


  const addMoney = getInputFieldValueById('input-donation-amount-2');
  const balance2 = getTextFieldValueById('account-balance-2');
  // plus and display amount
  const newBalance2 = balance2 + addMoney;
  document.getElementById('account-balance-2').innerText = newBalance2;

  // console.log(addMoney, balance2);
})


// card-3 function

document.getElementById('btn-donate-now-3').addEventListener('click', function (event) {
  event.preventDefault();
  console.log('add money button');

  


  const addMoney = getInputFieldValueById('input-donation-amount-3');
  const balance3 = getTextFieldValueById('account-balance-3');
  // plus and display amount
  const newBalance3 = balance3 + addMoney;
  document.getElementById('account-balance-3').innerText = newBalance3;

  // console.log(addMoney, balance2);
})