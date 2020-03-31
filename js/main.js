
// surnames list
var surname = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
console.log(surname);
// I ask the surname at the user
var userSurname = prompt ( "Insert surname" ).toUpperCase ( );

while  ( userSurname.length <= 0 )  {
  userSurname = prompt ( "Inserisci il tuo Cognome" ).toUpperCase ( ) ;
}
alert('the first letter of your surname must be capitalized')
// add the surname to the list
surname.push ( userSurname );
// to order list
surname.sort ( ) ;

for ( var i = 0;  i < surname.length ;  i++ )  {
  document.getElementById ( "surname-list" ).innerHTML += "<li>" + surname[i] + "</li>";
}
// I write the position of user's surname in the list
var position = surname.indexOf ( userSurname ) + 1;
document.getElementById ( "position" ).innerHTML = "you are in the position" + position;