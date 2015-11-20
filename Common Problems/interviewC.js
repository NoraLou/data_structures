
//1.
//O(n) runtime
//O(1) space
var stockPrices = [10, 7, 5, 2, 0 ]

function getMaxProfit(stockPrices){
  if(stockPrices.length < 2){
    throw new Error("max value is out of bounds")
  }
  var minPrice = stockPrices[0]
  var maxProfit = stockPrices[1] - stockPrices[0]
  for(var i = 0; i < stockPrices.length; i++){
    if(i == 0)
      continue
    var current = stockPrices[i]
    var profit = current - minPrice;
      if(profit > maxProfit){
        maxProfit = profit
      }
      if( current < minPrice ){
        minPrice = current
      }
    }
  return maxProfit
}
//console.log(getMaxProfit(stockPrices))

































