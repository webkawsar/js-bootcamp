

// Palindrome Checker

function palindrome(str) {
  

    const lowercaseStr = str.toLowerCase();
    const matchesStr = lowercaseStr.match(/[a-zA-Z0-9]/g);

    const reversedValue = matchesStr.reverse();
    const isTrue = reversedValue.join('') === lowercaseStr.match(/[a-zA-Z0-9]/g).join('');

    return isTrue;
}

console.log(palindrome("not a palindrome"));















