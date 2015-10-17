'use strict';

function Result_From_Path(data, path)
{
  var paths = path.split('/');
  var result = data;
  for (var i = 0; i < paths.length; i++) {
    var current = paths[i];
    if(current.length === 0) continue;

    result = result[current];
    if(result == undefined) break;
  }

  return result;
}

global.Result_From_Path = Result_From_Path;