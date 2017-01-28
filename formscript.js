var newref = firebase.database().ref('forms/')
var form = document.getElementById('form');
form.onsubmit = function(e){
  e.preventDefault();
  var item = {
    name: form.name.value,
    loc: form.loc.value,
    date: form.date.value,
    start_time: form.start_time.value,
    end_time: form.end_time.value,
    desc: form.desc.value,
  }
  newref.push(item);
}
//newref.push().key
//newref.set({"swag":"dog"})
