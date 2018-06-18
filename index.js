var hp = $.get("http://hp-api.herokuapp.com/api/characters")
.then(function(data){
  for (var i = 0; i<25; i++){
console.log('name : ' + data[i].name + ' house : '+data[i].house)
$('.name').append('<ul class="list-group"><li class="list-group-item">'+'name : ' + data[i].name + ' - House : '+data[i].house+'</li></ul>')
}
});
/*    AUTRE METHODE
.then(function(data){
  data.forEach(function(personage){
  console.log(personnage.name+)
});
}); */
