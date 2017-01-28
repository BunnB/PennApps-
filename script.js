/*
alert("hello");
var key;
var data;
var array = [];
var ref = firebase.database().ref('events');
var today = new Date();
var curr_day = today.getDate(); //curr day
var _id = 0;
//child id, set id path = null if passed.
/*
ref.on('value',function(snap){
    snap.forEach(function(childSnapshot){
        key = childSnapshot.key;
        data = childSnapshot.val();
        id = childSnapshot.name();
        var index = data.description.lastIndexOf(',');
        var data_date = data.description.substr(index-2,2);
        data_date = parseInt(data_date);
        //console.log(data_date)
        //console.log(curr_day)
        if(data_date < curr_day){ref.child(key).remove();}//removes data if from yesterday
*/

//alert("hello2")
