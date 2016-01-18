var Name = function() {
    this.test = "testInput";
};

Name.prototype = {
  readFile: function(){
     var reader = new XMLHttpRequest();
     reader.open("GET", "nameList.txt", false);
     reader.send(null);
     var content = reader.responseText;
     var list = content.split('\n');
     var nList = new Array();
     for(var i in list) {
       if(list[i].trim() != "")
          nList.push(list[i]);
     }
     return nList;
  },
  addElement: function(element) {
      alert(element);
  },
  getElement: function(n) {
    return this.awardElement[n];
  }
}
