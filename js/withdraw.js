//** Step-1 add event handler with the withdraw button */
document.getElementById("withdraw-btn").addEventListener("click", function () {
  //** Step-2 get the withdraw amount from withdraw input field */

  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmount = parseFloat(withdrawField.value);

  //** Step-7 clear the withdraw field */
  withdrawField.value = "";

  if (isNaN(newWithdrawAmount)) {
    alert("Please provide a valid amount in number.");
    return;
  }
  //** Step-3 get previous withdraw total */

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);

  //** Step-5 calculate previous balance total */

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

  if (newWithdrawAmount > previousBalanceTotal) {
    alert("You don't have enough balance to withdraw this amount.");
    return;
  }

  //** Step-4 calculate total withdraw amount and set total withdraw amount */

  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  //** Step-6 calculate new balance total and set the new balance */

  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
