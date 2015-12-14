function cloneAlongPath(){

  // Top layer is the selected object
  var selectedObject = ctx.selection[1];

  // Bottom layer is the path
  var selectedPath = ctx.selection[0];

  // Number of points on path
  var pathPoints = selectedPath.layers().objectAtIndex(0).path().points();

  // Ask user for how many sections they want to divide the path into
  var numberOfCopies = ctx.document.askForUserInput_initialValue("How many sections, bro?", pathPoints.count() );

  // Only continue if a number is specified
  if( numberOfCopies > 0){

    // Get bezier of path
    var path = selectedPath.bezierPathWithTransforms();

    // Calculate how far apart each clone should be
    var lengthOfStep = path.length()/numberOfCopies;

    // Cycle through each point on path
    for(var i=0; i<=numberOfCopies; i++) {

      var thisPoint = path.pointOnPathAtLength( lengthOfStep * i );
      // Make a clone of the selected object & position it where the point is
      cloneObjectAndPosition( selectedObject, thisPoint.x, thisPoint.y );
    }

    // Remove original object
    selectedObject.removeFromParent();
  }

}