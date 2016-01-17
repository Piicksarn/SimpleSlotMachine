var Name = function() {
    this.test = "testInput";
};

Name.prototype = {
  readFile: function(){
     var reader = new XMLHttpRequest();
     reader.open("GET", "nameList.txt", false);
     reader.send(null);
     var content = reader.responseText;
     var list = content.split('\n');;
     return list;
  },
  addElement: function(element) {
      alert(element);
  },
  getElement: function(n) {
    return this.awardElement[n];
  }
}
