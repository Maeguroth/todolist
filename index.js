let myArr = []

function pushData() {

  let inputText = document.getElementById('inputText').value

  myArr.push(inputText)

  let val = ""

  for(i = 0; i < myArr.length; i++) {
    val = val + myArr[i] + " <span onclick='removeData();'>x</span>" + "<br>"
  }

  document.getElementById('show').innerHTML = val

}

function removeData() {

  myArr.splice()

  document.getElementById("show").innerHTML = myArr

}
