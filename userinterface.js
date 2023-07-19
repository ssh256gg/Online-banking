// user interface page

// deposite btn
document.getElementById('depositebtn').addEventListener('click', function(){

    
    const amount = document.getElementById('depositeamount');
   
    const newDepositeAmountString= amount.value;
    
    const newDepositeAmount = parseFloat(newDepositeAmountString)
    if(isNaN(newDepositeAmount)){
        alert("enter number")
        
        return amount.value = '' ;

    }
    
    
    const depositeInput = document.getElementById('depositefield');
    
    const perviousDepositAmmountString = depositeInput.innerText;
    
    const perviousDepositAmmount = parseFloat(perviousDepositAmmountString);

    const currentDepositeAmount = perviousDepositAmmount + newDepositeAmount ;
    
    depositeInput.innerText = currentDepositeAmount;

    amount.value ='';
   
    const totalBalance = document.getElementById('totalfield');
    
    const previoustoalBalanceString = totalBalance.innerText;
    const previoustoalBalance = parseFloat(previoustoalBalanceString);
    const newtoalbalance = previoustoalBalance + newDepositeAmount;
    totalBalance.innerText = newtoalbalance;
    
})
// withdraw ammount

document.getElementById('withdrawbtn').addEventListener('click',function(){
    const withdrawamount = document.getElementById('withdrawamount');
   
    const newwithdrawAmountString= withdrawamount.value;
    const newWithdrawAmount = parseFloat(newwithdrawAmountString); 
    if(isNaN(newWithdrawAmount)){
        alert("enter number")
        
        return withdrawamount.value = '' ;

    }

    const withdrawInput = document.getElementById('withdrawfield');

    const totalBalance = document.getElementById('totalfield');
    const previoustoalBalanceString = totalBalance.innerText;
    const previoustoalBalance = parseFloat(previoustoalBalanceString);
    if( newWithdrawAmount > previoustoalBalance){
        alert("YOu don't have enough Money")
        return alert;
    }
    withdrawInput.innerText =withdrawamount.value;
    withdrawamount.value = '';

    const newtoalbalance = previoustoalBalance - newWithdrawAmount;
    totalBalance.innerText = newtoalbalance;
    



})