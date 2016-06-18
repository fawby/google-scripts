/** Adds a buttons to google docs UI so that you can access scripts*/ 
function onOpen() 
{
  var Ui = DocumentApp.getUi ( ) ; 
  
  Ui
  .createMenu ( '.scripts' )
  .addSubMenu 
  ( 
    Ui
    .createMenu('.time')
    .addItem ( 'dd/mm/yyyy'       , 'insertDate' )
    .addItem ( 'hh:mm'            , 'insertTime' )
    .addItem ( 'hh:mm dd/mm/yyyy' , 'insertDateTime' )
  ) 
  .addToUi(); 
}
