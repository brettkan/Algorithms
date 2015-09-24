/* Parsing an API response
 *
 * Suppose you are calling a JSON API that responds to requests using a nested
 * hash table (associative array), where the values are either other hash tables,
 * or strings, with no other possible options.
 *
 * Given a sequence of keys, write a method that traverses the hash table to return
 * the string stored at the terminal key in the sequence.
 */

function parse(hashtable, keys)
{
  var keysCopy = keys.slice(0);
  var current = hashtable[keysCopy.shift()];
  
  if (current === undefined) {
    throw new Error('Invalid keys entered');
  }

  if (keysCopy.length === 0) {
    return current;
  } else {
    return parse(current, keysCopy);
  }
}

var input = {
  k1: 'v1',
  k2: {
    k21: 'v21',
    k22: {
      k221: 'v221'
    }
  },
  k3: {
    k31: 'v31'
  }
};

var keys = ['k2', 'k22', 'k221'];

if (output = parse(input, keys) === 'v221')
{
  console.log('Success!');
}
else
{
  console.log("Output did not match 'v221'", output);
}