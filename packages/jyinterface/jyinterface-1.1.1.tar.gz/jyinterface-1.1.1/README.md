Encapsulated interface：

1）获取K线：getKline(symbol, klinePeriod, size) ->dict 

2）获取买卖档深度：getDepth(symbol) -> dict
   
3）获取跳价：getJumpPrice(symbol) -> float
   
4）买入：buy(symbol, price, amount) -> str // orderId 
     
5）卖出：sell(symbol, price, amount) -> str // orderId 

6）做空：short(symbol, price, amount) -> str // orderId 

7）平空：cover(symbol, price, amount) -> str // orderId 
 
8）撤单：cancelOrder(symbol, orderId) -> str // true:撤销成功 false:失败
  
9）获取订单详情：getOrderInfoState(symbol, orderId) -> str // -2:"其他",-1:"不存在",0:"全部成交" 1: "部分成交",2:"未成交" 3:"撤销中" 4:"已撤销" 5:"部分成交撤销"
                                                                               6:"拒绝请求" 7:"过期" 8:"失败" 9:"下单中

10）获取持仓：getPosition(symbol) -> float
 
11）获取USDT数量：getUsdt() -> float

12）获取最新价：getLastPrice(symbol) -> float

13）获取策略持仓：getPositionSt(symbol) -> float

14)  获取二级货币：getSecondary(symbol) -> float

15)  获取合约保证金：getMargin(symbol) -> float
 
PS：交易所类型 1：huobi 2:binance 3:okex
 