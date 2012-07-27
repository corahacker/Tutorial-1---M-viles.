var map = Ti.Map.createView({
	top:20,
	height:300,
	mapType: Titanium.Map.STANDARD_TYPE,
	region:{latitude:21.504116, longitude:-104.897504, latitudeDelta:0.005, longitudeDelta:0.005},
	animate:true,
	regionFit:true,
	userLocation:true
});



var ant = Ti.Map.createAnnotation({
	latitude:21.504116,
	longitude:-104.897504,
	title:"Tepic",
	subtitle:'La Loma de Tepic.',
	pincolor:Titanium.Map.ANNOTATION_GREEN,
	animate:true,
	myid:2 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECT
});


map.addAnnotation(ant);

var tabgroup= Ti.UI.createTabGroup();

var win1 = Ti.UI.createWindow({
	title:"Tab1",
	backgroundColor:"#ffffff"
})


win1.add(map);


var tab1 = Ti.UI.createTab({
	
	title:"Tab1",
	window:win1
});



var win2 = Ti.UI.createWindow({
	title:"Tab2",
	backgroundColor:"#ffffff"
});



var tab2 = Ti.UI.createTab({
	
	title:"Tab2",
	window:win2
});


tabgroup.addTab(tab1);
tabgroup.addTab(tab2);

tabgroup.open();












