Encapsulated interface��

1����ȡK�ߣ�getKline(symbol, klinePeriod, size) ->dict 

2����ȡ��������ȣ�getDepth(symbol) -> dict
   
3����ȡ���ۣ�getJumpPrice(symbol) -> float
   
4�����룺buy(symbol, price, amount) -> str // orderId 
     
5��������sell(symbol, price, amount) -> str // orderId 

6�����գ�short(symbol, price, amount) -> str // orderId 

7��ƽ�գ�cover(symbol, price, amount) -> str // orderId 
 
8��������cancelOrder(symbol, orderId) -> str // true:�����ɹ� false:ʧ��
  
9����ȡ�������飺getOrderInfoState(symbol, orderId) -> str // -2:"����",-1:"������",0:"ȫ���ɽ�" 1: "���ֳɽ�",2:"δ�ɽ�" 3:"������" 4:"�ѳ���" 5:"���ֳɽ�����"
                                                                               6:"�ܾ�����" 7:"����" 8:"ʧ��" 9:"�µ���

10����ȡ�ֲ֣�getPosition(symbol) -> float
 
11����ȡUSDT������getUsdt() -> float

12����ȡ���¼ۣ�getLastPrice(symbol) -> float

13����ȡ���Գֲ֣�getPositionSt(symbol) -> float

14)  ��ȡ�������ң�getSecondary(symbol) -> float

15)  ��ȡ��Լ��֤��getMargin(symbol) -> float
 
PS������������ 1��huobi 2:binance 3:okex
 