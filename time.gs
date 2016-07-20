/** Attempts to insert given @text at the cursor position.*/ 
function insert_ ( text )  {
  var cursor = DocumentApp . getActiveDocument ( ) . getCursor ( ) ;
  if ( cursor ) {
    
    // Attempt to insert text at the cursor position. If insertion returns null,
    // then the cursor's containing element doesn't allow text insertions.
    var element = cursor . insertText ( text )
    if ( element ) {
        element . setFontFamily ( "Consolas" ) ; 
        element . setFontSize ( 10 ) ; 
    } 
    else {
       DocumentApp
      . getUi ( ) 
      . alert ( 'Cannot insert text at this cursor location.' ) ;
    }
  } 
  else {
      DocumentApp
      . getUi ( )
      . alert ( 'Cannot find a cursor in the document.' ) ;
  }
}

/** Attempts to insert a Time Stamp with the format "hh:mm" at the cursor position.*/ 
function insertTimeStamp ( )  {
  insert_ ( timeStamp_ ( ) ) ; 
}

/** Attempts to insert a Date Stamp with the format "dd/mm/yyyy" at the cursor position.*/ 
function insertDateStamp ( ) { 
  insert_ ( dateStamp_ ( ) ) ; 
}

/** Attempts to insert a DateTime Stamp with the format "hh:mm dd/mm/yyyy" at the cursor position.*/ 

function insertDateTimeStamp ( ) {
  insert_ ( dateTimeStamp_ ( ) ) ; 
}


/** Returns a Time Stamp with the format "hh:mm" */
function timeStamp_ ( ) {  
  // Create a date object with the current time.
  var now = new Date ( ) ;

  // Create an array with the current hour & minute.
  var time = [ 
    pad_ ( now . getHours   ( ) , 2 ) , 
    pad_ ( now . getMinutes ( ) , 2 ) 
  ] ;

  return time . join ( ":" ) ;
}

/** Returns a Date Stamp with the format "dd/mm/yyyy" */
function dateStamp_ ( ) {

  // Create a date object with the current time.
  var now = new Date ( ) ;  
  
  // Create an array with the current day, month, & year.
  var date = [ 
    pad_ ( now . getDate  ( )     , 2 ) , 
    pad_ ( now . getMonth ( ) + 1 , 2 ) , 
    now . getFullYear ( )  
  ] ;
  
  return date . join ( "/" ) ;  
  // more concise with:   return [ array elements ] .join ("/") ; 
  
}
/** Returns a DateTime Stamp with the format "hh:mm dd/mm/yyyy" */
function dateTimeStamp_ ( ) {
  return timeStamp_ ( ) + " " + dateStamp_ ( ) ; 
}

/** pads @str with zeros if it's length is less than @max */ 
function pad_ ( str , max ) {
  str = str . toString ( ) ;
  return str . length < max ? pad_ ( "0" + str , max) : str ;
}



