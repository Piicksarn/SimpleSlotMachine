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
     for(var i in list) {
       if(list[i].trim() == "")
       list.splice(i, 1);
     }
     console.log(list.length);

     for(var i in list) {
       console.log(list[i]);
     }
     return list;
  },
  addElement: function(element) {
      alert(element);
  },
  getElement: function(n) {
    return this.awardElement[n];
  }
}
