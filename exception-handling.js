var list = ['Danny Peck', 'Lydia Eickstaedt'];
try {
  var newHallOfFame = ["Dask Frostring", "Render Tallborn"];
  if (list === undefined) {
    throw new ReferenceError();
  }
  if ((list instanceof Array) === false) {
    throw new TypeError();
  }
  list = list.concat(newHallOfFame);
} catch (error) {
  if (error instanceof ReferenceError) {
    alert(error + "\n" +
         "The HoF roster does not exist as \"list\"!\n" +
         "Check for relocation in master document.");
  }
  if (error instanceof TypeError) {
    alert(error + "\n" +
         "Alas, \"list\" exists, but is no longer an Array.\n" +
         "Check for a disastrous overwrite!");
  }
} finally {
  console.log(list);
}

///////////////////////////////////////////////////////////////

function changeInnerHTMLByIdOrExisting(id, update, existing) {
  try {
    var newElement = undefined;
    document.getElementById(id).innerHTML = update;
  } catch(error) {
    try {
      var elements = document.getElementsByTagName('*');
      for (var i = 0, x = elements.length; i < x; i++) {
        if (elements[i].innerHTML === existing) {
          elements[i].innerHTML = update;
          id = elements[i].id;
          break;
        }
        if (i === x) {
          throw new Error("An existing element" +
                          "was not found.");
        }
      }
    } catch(error2) {
      alert(error2.message + "\nCreating new text node.");
      newElement = document.createTextNode(update);
    }
  } finally {
    if (newElement !== undefined) {
      console.log("Returning new" +
                  "text node...");
      return newElement;
    } else {
      console.log("Modified element \"" + 
                  (id || existing) +
                  "\" with inner HTML \"" +
                  update + "\".");
    }
  }
}

changeInnerHTMLByIdOrExisting("age", "Age: 35", "Age: 34");

