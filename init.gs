/** Adds a buttons to google docs UI so that you can access the functions*/ 
function onOpen ( ) 
{
  var ui = DocumentApp . getUi ( ) ; 
  var projectName = 'MyScripts.'
  
  
  // create a "MyScripts Menu, and add it to the "user interface" bar. 
  var menu_myScripts = ui . createMenu ( "MyScripts" ) ;  

    // create an "Insert" menu.
    var menu_insert    = ui . createMenu ( "Insert" ) ; 
    
      // create a "Date & Time" menu. 
      var menu_time = ui. createMenu ( "Date & Time" ) ; 
      
        // add links to "date & time functions" in the "Date & Time" menu. 
        menu_time 
        . addItem ( 'hh:mm dd/mm/yyyy' , projectName + 'insertDateTimeStamp' )
        . addItem ( 'dd/mm/yyyy'       , projectName + 'insertDateStamp'     )
        . addItem ( 'hh:mm'            , projectName + 'insertTimeStamp'     ) ; 
      
      // create a "Signature" menu. 
      var menu_signature = ui . createMenu ( "Signature" ) ; 
      
        // add links to "signature functions" in the Signature menu. 
        menu_signature 
        . addItem ( '#fawby' , projectName + 'onOpen' ) ; 
          
      // add "Date & Time" menu to the "Insert" menu.
      menu_insert . addSubMenu ( menu_time ) ;    

      // add "Signature" menu to the "Insert" menu. 
      menu_insert . addSubMenu ( menu_signature ) ;         
              
    // add "Insert" menu to the "MyScripts" menu.  
    menu_myScripts . addSubMenu ( menu_insert  ) ;   
     
  // add "MyScripts Menu to the "user interface" bar.    
  menu_myScripts . addToUi ( ) ; 
        
        
}
