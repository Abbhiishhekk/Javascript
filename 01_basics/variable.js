const accountId = 13342;
let accountEmail = "abhishek@google.com"
var accountPassword = "12345"
accountCity = "Haldwani"
let accountState;
// accountId = 22343 not allowed because it is cosntant value u cannot change it.

accountEmail = "ab@ab.in"
accountPassword = "212121"
accountCity = "gurgaon"

console.log("accountId")

/*
Prefer not to use var
because of issue in block scope and funtional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])