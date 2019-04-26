

$(document).ready( function(){
    let  result = []
    $(".btn").click(function() {
        var fired_button = $(this).val();
        result.push(fired_button)
         $("input").val(result.join(''))
    });
    
    $(".clear").click(function() {
        $("input").val(result = [])
     });
    
    // new Realization !!!!!
     $(".check2").click(function(){
       
         function computeChange(amount) {
             let changeArray = [1000, 500, 100, 50]
             let result = [];
             let obj = { "Введенная вами сумма": amount }
             for (let i = 0; i < changeArray.length; i++) {
                 let changeAmount = Math.floor(amount / changeArray[i]);
                 amount -= (changeArray[i] * changeAmount);

                 result.push(changeAmount);

             }

             for (let i = 0; i < result.length; i++) {
                 if (result[i] != 0)
                     obj["купюр номиналом " + changeArray[i]] = "выдано " + result[i] + " штук"
             }
            //   return $(".text_span").text("OPEN CONSOLE PLEASE") + console.log(obj);
             return alert(JSON.stringify(obj))
         }

         computeChange(result.join(''))
    })
    
    //new Realization !!!!!
    
     $(".check").click(function() {
        function giveMyMoney(money, coins) {
            let needCoins = [], minCoins = []; minCoins[0] = 0;
        
 
            for (let sum = 1; sum <= money; sum++) {     
        
              
                minCoins[sum] = Number.MAX_VALUE;
        
              
                for (let coin = coins.length - 1; coin >= 0; coin--) {
                    if (sum >= coins[coin].val && minCoins[sum] > minCoins[sum - coins[coin].val] + 1) {
        
                    
                        minCoins[sum] = minCoins[sum - coins[coin].val] + 1;
                    }
                }
            }
         
           
            if (minCoins[money] === Number.MAX_VALUE) { return []; }
         
         
            let sum = money;
            while (sum > 0) {
                let curSum = sum;
                for (let coin = coins.length - 1; coin >= 0; coin--) {
                    let isCoinExist = coins[coin].count > 0;
                    if (isCoinExist && sum >= coins[coin].val && (minCoins[sum] == minCoins[sum - coins[coin].val] + 1 || minCoins[sum] == minCoins[sum - coins[coin].val])) {                                  
                        if (!needCoins[coin]) {
                            needCoins[coin] = 0;
                        }
                        ++needCoins[coin];  
                        sum -= coins[coin].val;
                        coins[coin].count -= 1;               
                        break;
                    }
                }
        
                if (curSum === sum) {
                    needCoins = [];
                    break; 
                }
            }
            return needCoins;
        }
        
        
        let coins = [ 
            { val: 50, count: 10 },
            { val: 100, count: 10 },
            { val: 500, count: 10 },
            { val: 1000, count: 10 },
            { val: 5000, count: 10 }
        ];
        
        let money = result.join('')
        const needCoins = giveMyMoney(money, coins);
        let res = "", controlSum = 0;
        if (needCoins.length) {
            needCoins.forEach((item, ind) => {
                controlSum += item*coins[ind].val;
                const symbol = ind < needCoins.length-1 ? " + " : "";
                res += (item + " по " + coins[ind].val + symbol);
            });
        }
        //alert(res ? `Control sum ${controlSum} must be the same as input sum ${money}!`: "");
        alert (res ? `вам выдано ${res}` : "Введена неверная сумма или недостаточно купюр в банкомате");
        
     });
    
} )


