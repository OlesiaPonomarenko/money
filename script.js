const data = document.querySelector('#date');
const now = new Date().toLocaleDateString();
data.textContent = now;
const investments = document.querySelector('.investments');
const security = document.querySelector('.security');
const entertainment = document.querySelector('.entertainment');
const saving = document.querySelector('.saving');
const home = document.querySelector('.home');
const savingSelect = document.querySelector('.savingSelect')
const investmentsSelect = document.querySelector('.investmentsSelect');
const entertainmentSelect = document.querySelector('.entertainmentSelect');
const securitySelect = document.querySelector('.securitySelect');
const homeSelect = document.querySelector('.homeSelect');



function getValue(input, select) {
    input
    if (input.value.trim() !== '' && !isNaN(input.value)) {
        return Number((input.value) / 100);
    }
    return Number(select.value);
}


function calculateTotal() {
    const homeValue = getValue(home, homeSelect);
    const entertainmentValue = getValue(entertainment, entertainmentSelect);
    const investmentsValue = getValue(investments, investmentsSelect);
    const securityValue = getValue(security, securitySelect);
    const savingValue = getValue(saving, savingSelect);

    const total = homeValue + entertainmentValue + investmentsValue + securityValue + savingValue;
}



home.addEventListener('input', () => {
    const value = Number(home.value);
    const newSum = 100 - value;
    const part = newSum / 4;

    investments.value = part;
    security.value = part;
    entertainment.value = part;
    saving.value = part;
});

investments.addEventListener('input', () => {
    const newSum = 100 - Number(home.value);
    const inv = Number(investments.value);

    if (inv > newSum / 4 || inv < newSum / 4) {
        const other = ((newSum - inv) / 3).toFixed(1);
        security.value = other;
        entertainment.value = other;
        saving.value = other;
    }
});

security.addEventListener('input', () => {
    const newSum = 100 - Number(home.value) - Number(investments.value);
    const sec = Number(security.value);

    if (sec > newSum / 3 || sec < newSum / 3) {
        const otherSum = ((newSum - sec) / 2).toFixed(1);
        entertainment.value = otherSum;
        saving.value = otherSum;
    }
});

entertainment.addEventListener('input', () => {
    const newSum = 100 - Number(home.value) - Number(investments.value) - Number(security.value);
    const ent = Number(entertainment.value);
    const savSum = (newSum - ent).toFixed(1);
    saving.value = savSum;
});



const tip = document.querySelectorAll('.tip');
const btn = document.querySelector('.addProcent');
const input = document.querySelectorAll('input')

function calculateSelectSum() {
    let sum = 0;

    tip.forEach(select => {
        sum += Number(select.value);
    });

        return sum;
}




btn.addEventListener('click', (e) => {
    e.preventDefault();

     const total = calculateSelectSum();


    if (total > 1) {
           Swal.fire({
           icon: "error",
           title: "Error",
           text: "The sum of the selected values ​​should not be more than 100%.!"
           });
        
            return;
    }
    const salary =  Number(document.querySelector('.salary').value);
    const homeValue = getValue(home, homeSelect);
    const entertainmentValue = getValue(entertainment, entertainmentSelect);
    const investmentsValue = getValue(investments, investmentsSelect);
    const securityValue = getValue(security, securitySelect);
    const savingValue = getValue(saving, savingSelect);

    const sumHome = salary * homeValue;
    const sumEntertainment = salary * entertainmentValue;
    const sumInvestments = salary * investmentsValue;
    const sumSecurity = salary * securityValue;
    const sumSaving = salary * savingValue;
    document.querySelector('#sumHouseExp').textContent = sumHome.toFixed(2);
    document.querySelector('#sumInv').textContent = sumInvestments.toFixed(2);
    document.querySelector('#sumSec').textContent = sumSecurity.toFixed(2);
    document.querySelector('#sumEntertainment').textContent = sumEntertainment.toFixed(2);
    document.querySelector('#sumSav').textContent = sumSaving.toFixed(2);

    calculateTotal();
    console.log(salary);
})


