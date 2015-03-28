var fs=require("fs");
var roots=JSON.parse(fs.readFileSync("./roots.json","utf8"));

var vowels=["","ི","ུ","ེ","ོ"];
var suffixes=["ག", "ང", "ད", "ན", "བ", "མ", "ར", "ལ", "ས" ];
var sa2ndSuffixes=["གས", "ངས", "བས", "མས"];
var da2ndSuffixes=["ནད", "རད", "ལད"];

var getRootsWithVowels2D = function(){
	var rootsWithVowels2D=roots.map(function(items){
		var stacksWithVowels=items.map(function(item){
			var letterWithVowels=[];
			for(var i=0; i<vowels.length; i++){
				letterWithVowels.push(item+vowels[i]);
			}
			return letterWithVowels;
		})
		return stacksWithVowels;
	});
}
var rootsWithVowels2D=getRootsWithVowels2D(roots);

var getRootsWithVowels1D = function(){
	var rootsWithVowels1D=[];
	roots.map(function(items){
		items.map(function(item){
			for(var j=0; j<vowels.length; j++){
				rootsWithVowels1D.push(item+vowels[j]);
			}
		});
	});
	return rootsWithVowels1D;
}
var rootsWithVowels1D=getRootsWithVowels1D(roots);

var getRootsWithVowelsWithSuffixes2D = function(){
	var rootsWithVowelsWithSuffixes2D=[];
	rootsWithVowels1D.map(function(item){
		var out=[];
		for(var k=0; k<suffixes.length; k++){
			out.push(item+suffixes[k]);
		}
		rootsWithVowelsWithSuffixes2D.push(out);
	});
	return rootsWithVowelsWithSuffixes2D;
}
var rootsWithVowelsWithSuffixes2D=getRootsWithVowelsWithSuffixes2D();

var getRootsWithVowelsWithSuffixes1D = function(){
	var rootsWithVowelsWithSuffixes1D=[];
	rootsWithVowels1D.map(function(item){
		for(var m=0; m<suffixes.length; m++){
			rootsWithVowelsWithSuffixes1D.push(item+suffixes[m]);
		}
	});
	return rootsWithVowelsWithSuffixes1D;
}
var rootsWithVowelsWithSuffixes1D=getRootsWithVowelsWithSuffixes1D();

var getRootsWithSa2ndSuffixes1D = function(){
	var out=[];
	rootsWithVowels1D.map(function(item){
		for(var i=0; i<sa2ndSuffixes.length; i++){
			out.push(item+sa2ndSuffixes[i]);
		}
	});
	return out;
}
var rootsWithSa2ndSuffixes1D=getRootsWithSa2ndSuffixes1D();

var getRootsWithDa2ndSuffixes1D = function(){
	var out=[];
	rootsWithVowels1D.map(function(item){
		for(var i=0; i<da2ndSuffixes.length; i++){
			out.push(item+da2ndSuffixes[i]);
		}
	});
	return out;
}
var rootsWithDa2ndSuffixes1D=getRootsWithDa2ndSuffixes1D();

var possibleRootLetters=rootsWithVowels1D.concat(rootsWithVowelsWithSuffixes1D).concat(rootsWithSa2ndSuffixes1D).concat(rootsWithDa2ndSuffixes1D);
fs.writeFileSync("possibleRootLetters.json",JSON.stringify(possibleRootLetters,""," "),"utf8");
console.log(possibleRootLetters.length);