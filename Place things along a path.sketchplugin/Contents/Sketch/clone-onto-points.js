function cloneOntoPoints(){

  // Top layer is the selected object
  var selectedObject = ctx.selection[1];

  // Bottom layer is the path
  var selectedPath = ctx.selection[0];

  // Get all of the attributes needed from the path
  var path = {
    points: selectedPath.layers().objectAtIndex(0).path().points(),
    x: selectedPath.frame().x(),
    y: selectedPath.frame().y(),
    w: selectedPath.frame().width(),
    h: selectedPath.frame().height(),
  };

  // Cycle through each point on path
  for(var i=0; i<path.points.count(); i++) {

    // Get point object from path
    var thisPoint = path.points.objectAtIndex(i).point();

    // Calculate the points position on artboard
    var xPos = path.x + (thisPoint.x * path.w);
    var yPos = path.y + (thisPoint.y * path.h);

    // Make a clone of the selected object & position it where the point is
    cloneObjectAndPosition( selectedObject, xPos, yPos )
  }

  // Remove original object
  selectedObject.removeFromParent();
}