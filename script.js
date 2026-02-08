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
const resetBtn = document.querySelector('#resetBtn');

resetBtn.addEventListener('click', (e) => {
    
    e.preventDefault();

    home.value = '';
    investments.value = '';
    security.value = '';
    entertainment.value = '';
    saving.value = '';

    homeSelect.selectedIndex = 1;
    investmentsSelect.selectedIndex = 1;
    securitySelect.selectedIndex = 1;
    entertainmentSelect.selectedIndex = 1;
    savingSelect.selectedIndex = 1;

    
    document.querySelector('#sumHouseExp').textContent = '';
    document.querySelector('#sumInv').textContent = '';
    document.querySelector('#sumSec').textContent = '';
    document.querySelector('#sumEntertainment').textContent = '';
    document.querySelector('#sumSav').textContent = '';
});




function getValue(input, select) {

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

    return homeValue + entertainmentValue + investmentsValue + securityValue + savingValue;
}



home.addEventListener('input', () => {
    const value = Number(home.value);
    const newSum = 100 - value;
    const part = newSum / 4;

    investments.value = part.toFixed(2);
    security.value = part.toFixed(2);
    entertainment.value = part.toFixed(2);
    saving.value = part.toFixed(2);
});

investments.addEventListener('input', () => {
    const newSum = 100 - Number(home.value);
    const inv = Number(investments.value);

    if (inv > newSum / 4 || inv < newSum / 4) {
        const other = ((newSum - inv) / 3);
        security.value = other.toFixed(2);
        entertainment.value = other.toFixed(2);
        saving.value = other.toFixed(2);
    }
});

security.addEventListener('input', () => {
    const newSum = 100 - Number(home.value) - Number(investments.value);
    const sec = Number(security.value);

    if (sec > newSum / 3 || sec < newSum / 3) {
        const otherSum = ((newSum - sec) / 2);
        entertainment.value = otherSum.toFixed(2);
        saving.value = otherSum.toFixed(2);
    }
});

entertainment.addEventListener('input', () => {
    const newSum = 100 - Number(home.value) - Number(investments.value) - Number(security.value);
    const ent = Number(entertainment.value);
    const savSum = (newSum - ent);
    saving.value = savSum.toFixed(2);
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
    const totalInput = calculateTotal();


    if (total > 1 || totalInput > 1) {
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


})




