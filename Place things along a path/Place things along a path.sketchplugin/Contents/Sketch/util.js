function cloneObjectAndPosition( selectedObject, x, y ){

  // Clone selected object
  var shape = selectedObject.duplicate();

  // Get the width and height of clone
  var thisWidth = shape.frame().width();
  var thisHeight = shape.frame().height();

  // Center cloned object on the coordinates provided
  shape.frame().x = x - thisWidth/2;
  shape.frame().y = y - thisHeight/2;
}



// Show an error modal
function showErrorMessage( title, message ){
  NSApplication.sharedApplication().displayDialog_withTitle( message, title );
}