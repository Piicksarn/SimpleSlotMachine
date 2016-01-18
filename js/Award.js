var Award = function() {
    this.awardList = new Array();
    this.winnerList = new Array();
    this.awardIndex = 0;
    this.nameIndex = 0;
};

Award.prototype = {
  setAward: function(award){
     this.awardList.push(award);
  },
  showAwardList: function(divId) {
    var value = this.awardList[this.awardList.length - 1];
    var li = document.createElement("div");
    var text = document.createTextNode(value);
    li.setAttribute("style", "color:#fff; padding-left: 50px; font-size:20px;");
    li.setAttribute("id", this.awardList.length);
    li.appendChild(text);
    document.getElementById(divId).appendChild(li);
  },
  setModal: function(divId) {
    var value = this.awardList[this.awardList.length - 1];
    var btn = document.createElement("button");
    var text = document.createTextNode(value);
    var str = "btn"+this.awardList.length;
    var func = "getIndexInList(" + this.awardList.length + ");";
    btn.setAttribute("type","button");
    btn.setAttribute("class", "btn");
    btn.setAttribute("id", str);
    btn.setAttribute("onclick", func);
    btn.appendChild(text);
    document.getElementById(divId).appendChild(btn);
  }
}
