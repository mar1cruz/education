var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

console.log(isAnagram("anagram", "nagaram"));

//https://leetcode.com/problems/valid-anagram/description/
