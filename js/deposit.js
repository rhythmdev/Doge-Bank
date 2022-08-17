//** Step-1 add event listener with the deposit button  */
document.getElementById("deposit-btn").addEventListener("click", function () {
  //** Step-2 get the deposit amount from the deposit input field */
  //** For input field use .value to get the value inside the input field */
  const depositField = document.getElementById("deposit-field");
  const newDepositAmount = parseFloat(depositField.value);

  //** Step-7 clear the deposit field */
  depositField.value = "";

  if (isNaN(newDepositAmount)) {
    alert("Please provide a valid amount in number.");
    return;
  }

  //** Step-3 get the current deposit total */
  //** for non input( element other than input, textarea) use innerText to the the text */

  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotal = parseFloat(depositTotalElement.innerText);
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = currentDepositTotal;

  //** Step*4 get blance current total */
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

  //** Step-5 calculate current balance total */
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;
});
