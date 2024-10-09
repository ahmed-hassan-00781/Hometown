const amountInput = document.getElementById('amountInput');
const addButton = document.getElementById('addButton');
const earningsList = document.getElementById('earningsList');
const expensesList = document.getElementById('expensesList');
const totalEarningsElement = document.getElementById('totalEarnings');
const totalExpensesElement = document.getElementById('totalExpenses');
const totalBalanceElement = document.getElementById('totalBalance');

const earnings = [];
const expenses = [];

addButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount)) {
        alert('Please enter a valid number.');
        return;
    }

    if (amount > 0) {
        earnings.push(amount);
        updateEarningsList();
        updateTotalEarnings();
    } else if (amount < 0) {
        expenses.push(-amount);
        updateExpensesList();
        updateTotalExpenses();
    }

    updateTotalBalance();
});

function updateEarningsList() {
    earningsList.innerHTML = '';
    earnings.forEach(earning => {
        const li = document.createElement('li');
        li.textContent = earning;
        earningsList.appendChild(li);
    });
}

function updateExpensesList() {
    expensesList.innerHTML = '';
    expenses.forEach(expense => {
        const li = document.createElement('li');
        li.textContent = expense;
        expensesList.appendChild(li);
    });
}

function updateTotalEarnings() {
    totalEarningsElement.textContent = earnings.reduce((total, earning) => total + earning, 0);
}

function updateTotalExpenses() {
    totalExpensesElement.textContent = expenses.reduce((total, expense) => total + expense, 0);
}

function updateTotalBalance() {
    const totalBalance = earnings.reduce((total, earning) => total + earning, 0) - expenses.reduce((total, expense) => total + expense, 0);
    totalBalanceElement.textContent = totalBalance;
}
