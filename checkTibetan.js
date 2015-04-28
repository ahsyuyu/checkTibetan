var fs=require("fs");
var glob=require("glob");
var letters=JSON.parse(fs.readFileSync("possibleRootLetters_sort.json","utf8"));

var indexOfSorted = function (array, obj) { 
    var low = 0,
    high = array.length-1;
    while (low < high) {
      var mid = (low + high) >> 1;
      array[mid] < obj ? low = mid + 1 : high = mid;
    }
    if(array[low] != obj) return -1;
    return low;
 }

var processBampo = function(fn){
	var out=[];
	var bampo = fs.readFileSync(fn,"utf8");
  var pageContent = bampo.split(/<pb id="(\d+.\d+[ab])"\/>/);//[text,pb,text,pb, ...]
  var filename = fn.split("/")[3].substr(0,10);

  for(var i=0; i<pageContent.length; i+=2){
    pageContent[i].replace(/[\u0f20-\u0fbf]+/g,function(m){
     var index = indexOfSorted(letters,m);
     if(index == -1) out.push([pageContent[i-1],m]);//console.log(pageContent[i-1],m);
    }); 
  }
  fs.writeFileSync("./result/"+filename+".txt",JSON.stringify(out,""," "),"utf8");
}

glob("../jiangkangyur/001/*.xml",function(err,files){
  files.map(processBampo);
});

//processBampo("../jiangkangyur/001/lj0001_001.xml");

//fs.writeFileSync("possibleRootLetters_sort.json",JSON.stringify(letters.sort(),""," "),"utf8");