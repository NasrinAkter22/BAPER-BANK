// handle deposit button event
document.getElementById('deposit-button').addEventListener('click',function(){
    // console.log('click button');
    // get amount deposit
    const depositInput=document.getElementById('deposit-input');
    const newDepositAmountText=depositInput.value;
    const newDepositAmount=parseFloat(newDepositAmountText);
    // get amount total
    const depositTotal=document.getElementById('deposit-total');
    const priviousDepositText=depositTotal.innerText;
    const priviousDepositAmount=parseFloat(priviousDepositText);
    const newDepositTotal=priviousDepositAmount+newDepositAmount;
    depositTotal.innerText=newDepositTotal;

    // update account balance
    const balanceTotal=document.getElementById('balance-total');
    const balanceTotalText=balanceTotal.innerText;
    const priviousBalanceTotal=parseFloat(balanceTotalText);
    const newBalanceTotal=priviousBalanceTotal+newDepositAmount;
    // const newBalanceTotal=parseFloat(balanceTotalText)+newDepositAmount;
    balanceTotal.innerText=newBalanceTotal;
// console.log(priviousBalanceTotal);
    // clear the deposit input filed
    // depositInput.value=('');
    
})