
/**
 * @param {string} string1 - source string
 * @param  {string} string2 - target string
 * @return {string} target appended to source
 */
function concat( string1, string2 ) {
  return string1 + string2;
}

/**
 * @param {string} string - target string
 * @param {string} subStr - substring to remove
 * @return {string} target with substring removed
 */
function remove( string, subStr ) {
  return string.replace(subStr, '');
}