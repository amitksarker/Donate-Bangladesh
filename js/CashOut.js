// document.getElementById('btn-donate-now').addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log('cash out clicked')

//     // cashout amount
//     const cashOut = document.getElementById('input-donation-amount').value;
//     const CashOutNumber = parseFloat(cashOut);
//     // console.log(cashout)




//     const balance = document.getElementById('main-balance').innerText;
//     // console.log(balance);
//     const balanceNumber = parseFloat(balance);
//     //  reduce the balance
//     const newBalance = balanceNumber - CashOutNumber;

//     // update the ui
//     document.getElementById('main-balance').innerText = newBalance;



// });


// card 1
document.getElementById('btn-donate-now').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-donation-amount');
    const balance = getTextFieldValueById('main-balance');
    const newBalance = balance - cashOut;
    document.getElementById('main-balance').innerText = newBalance;

    console.log('inside the click handler')
    // add to transaction history
    const div = document.createElement('div');
    // div.classList.add('bg-yellow-300');
    div.innerHTML = `
        
        <p class="font-bold text-xl"> ${cashOut}Donate for Flood at Noakhali, Bangladesh </p>
    `
    document.getElementById('history-container').appendChild(div);
});

// card 2

document.getElementById('btn-donate-now-2').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOut2 = getInputFieldValueById('input-donation-amount-2');
    const balance2 = getTextFieldValueById('main-balance');
    const newBalance2 = balance2 - cashOut2;
    document.getElementById('main-balance').innerText = newBalance2;

    console.log('inside the click handler')

        // add to transaction history
        const div = document.createElement('div');
        // div.classList.add('bg-yellow-300');
        div.innerHTML = `
            
            <p class="font-bold text-xl"> ${cashOut2}Taka Donate for Flood Relief in Feni,Bangladesh</p>
        `
        document.getElementById('history-container').appendChild(div);
});


// card 2

document.getElementById('btn-donate-now-3').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOut3 = getInputFieldValueById('input-donation-amount-3');
    const balance3 = getTextFieldValueById('main-balance');
    const newBalance3 = balance3 - cashOut3;
    document.getElementById('main-balance').innerText = newBalance3;

    console.log('inside the click handler')

    
        // add to transaction history
        const div = document.createElement('div');
        // div.classList.add('bg-yellow-300');
        div.innerHTML = `
            
            <p class="font-bold text-xl"> ${cashOut3}Aid for Injured in the Quota Movement</p>
        `
        document.getElementById('history-container').appendChild(div);
});


