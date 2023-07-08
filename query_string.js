querystring = require('querystring');  
const obj = querystring.parse('name=aaa&address=pune');  
console.log(obj); 
// Output:  
// [Object: null prototype] { name: 'aaa', address: 'pune' }
/**
 * Query-String stringify()
 */
querystring = require('querystring');  
const qs = querystring.stringify({name:'aaa',address:'pune'});  
console.log(qs);  
// Output
// name=aaa&address=pune