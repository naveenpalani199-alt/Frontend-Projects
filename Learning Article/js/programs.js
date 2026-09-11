/**
 * JS Logic Lab - Programs Registry Data
 * Contains comprehensive metadata, starter templates, verified reference solutions,
 * step-by-step hints, concepts, and automated test suites for all 10 challenges.
 */

const PROGRAMS_DATA = [
  {
    id: 1,
    slug: "armstrong-number",
    title: "Armstrong Number",
    category: "Numbers & Math",
    difficulty: "Intermediate",
    difficultyColor: "bg-amber-100 text-amber-800 border-amber-300",
    badgeColor: "text-amber-600 bg-amber-50",
    summary: "Check if the sum of each digit raised to the power of the total number of digits equals the original number.",
    description: `An **Armstrong number** (also known as a *Narcissistic number*) is a number that is equal to the sum of its own digits each raised to the power of the total number of digits in the number.

### Formula:
For an $n$-digit number:
$$abc... = a^n + b^n + c^n + ...$$

### Key Rules:
- A 3-digit number like **153**: $1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153$ $\\rightarrow$ **Armstrong**.
- A 4-digit number like **1634**: $1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634$ $\\rightarrow$ **Armstrong**.
- A number like **123**: $1^3 + 2^3 + 3^3 = 1 + 8 + 27 = 36 \\neq 123$ $\\rightarrow$ **Not Armstrong**.
- Single digit numbers (1-9) are always Armstrong numbers ($d^1 = d$).`,
    concepts: ["Functions", "While / For Loop", "Modulo Operator (%)", "Math.pow() or Exponentiation (**)", "Number to String"],
    examples: [
      {
        input: "153",
        output: "153 is an Armstrong Number",
        explanation: "1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153"
      },
      {
        input: "1634",
        output: "1634 is an Armstrong Number",
        explanation: "1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634"
      },
      {
        input: "123",
        output: "123 is not an Armstrong Number",
        explanation: "1^3 + 2^3 + 3^3 = 36 !== 123"
      }
    ],
    starterCode: `/**
 * Program 1: Check Armstrong Number
 * @param {number} number - The input number to check
 * @returns {string} - Formatted result string indicating if it's an Armstrong number
 */
function checkArmstrong(number) {
    // 1. Handle non-positive or invalid inputs
    if (typeof number !== "number" || isNaN(number) || number < 0) {
        return "Please enter a valid positive number";
    }

    // 2. Write your logic here:
    // Step a: Find total number of digits
    // Step b: Extract each digit and raise to power of (total digits)
    // Step c: Sum them up and compare with original number
    
    let original = number;
    let sum = 0;
    
    // TODO: Implement your calculation loop here

    // Return the result
    return \`\${number} is \${sum === original ? "" : "not "}an Armstrong Number\`;
}

// Test call
console.log(checkArmstrong(153));
`,
    solutionCode: `function checkArmstrong(number) {
    // Validate input
    if (typeof number !== "number" || isNaN(number) || number < 0) {
        return "Please enter a valid positive number";
    }

    const numStr = number.toString();
    const numDigits = numStr.length;
    let temp = number;
    let sum = 0;

    // Mathematical extraction using modulo and division
    while (temp > 0) {
        const lastDigit = temp % 10;
        sum += Math.pow(lastDigit, numDigits);
        temp = Math.floor(temp / 10);
    }

    // Handle 0 as an Armstrong number (0^1 = 0)
    if (number === 0) sum = 0;

    const isArmstrong = (sum === number);
    return isArmstrong 
        ? \`\${number} is an Armstrong Number\` 
        : \`\${number} is not an Armstrong Number\`;
}

console.log(checkArmstrong(153));
console.log(checkArmstrong(1634));
console.log(checkArmstrong(123));
`,
    hint: "1. Convert the number to a string to get `.length` for power $n$.\n2. Use a `while (temp > 0)` loop.\n3. In each iteration, extract the last digit with `temp % 10`.\n4. Add `Math.pow(lastDigit, n)` or `lastDigit ** n` to your sum.\n5. Remove the last digit with `temp = Math.floor(temp / 10)`.\n6. Compare `sum === originalNumber`.",
    functionName: "checkArmstrong",
    defaultInput: "153",
    inputFormat: "number",
    inputPlaceholder: "e.g. 153 or 1634",
    testCases: [
      { input: [153], expected: "153 is an Armstrong Number", label: "3-Digit Armstrong (153)" },
      { input: [371], expected: "371 is an Armstrong Number", label: "3-Digit Armstrong (371)" },
      { input: [1634], expected: "1634 is an Armstrong Number", label: "4-Digit Armstrong (1634)" },
      { input: [123], expected: "123 is not an Armstrong Number", label: "Non-Armstrong Number (123)" },
      { input: [9], expected: "9 is an Armstrong Number", label: "Single Digit Number (9)" }
    ]
  },
  {
    id: 2,
    slug: "prime-numbers-range",
    title: "Prime Numbers Between Two Numbers",
    category: "Numbers & Math",
    difficulty: "Intermediate",
    difficultyColor: "bg-blue-100 text-blue-800 border-blue-300",
    badgeColor: "text-blue-600 bg-blue-50",
    summary: "Generate and display all prime numbers within a given starting and ending range.",
    description: `A **Prime Number** is a natural number strictly greater than 1 that cannot be formed by multiplying two smaller natural numbers. In other words, it has only two distinct positive divisors: **1 and itself**.

### Key Rules:
- 0 and 1 are **not** prime numbers.
- 2 is the **only even prime number**.
- Negative numbers are not prime numbers.
- If $start > end$, your program should swap them or handle the range smoothly.
- To optimize prime checking, you only need to test divisors up to $\\sqrt{n}$.`,
    concepts: ["Nested Loops", "Conditionals (if/else)", "Math.sqrt() Optimization", "Arrays (.push)", "Helper Functions"],
    examples: [
      {
        input: "start = 10, end = 30",
        output: "[11, 13, 17, 19, 23, 29]",
        explanation: "All numbers between 10 and 30 that have no divisors other than 1 and themselves."
      },
      {
        input: "start = 1, end = 10",
        output: "[2, 3, 5, 7]",
        explanation: "1 is not prime. 2, 3, 5, 7 are prime."
      },
      {
        input: "start = 20, end = 22",
        output: "[]",
        explanation: "No prime numbers exist between 20 and 22."
      }
    ],
    starterCode: `/**
 * Program 2: Prime Numbers Between Two Numbers
 * @param {number} start - Beginning of range
 * @param {number} end - End of range
 * @returns {number[]} - Array of prime numbers in the range
 */
function findPrimesInRange(start, end) {
    // 1. Handle invalid inputs
    if (typeof start !== "number" || typeof end !== "number") {
        return [];
    }

    // 2. Ensure start <= end (swap if needed)
    let min = Math.min(start, end);
    let max = Math.max(start, end);
    
    let primes = [];

    // Write your logic here:
    // Iterate from min to max and check if each number is prime
    
    return primes;
}

// Test call
console.log(findPrimesInRange(10, 30));
`,
    solutionCode: `function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false; // Even numbers > 2 are not prime

    // Check odd divisors up to square root of n
    const limit = Math.sqrt(n);
    for (let i = 3; i <= limit; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

function findPrimesInRange(start, end) {
    if (typeof start !== "number" || typeof end !== "number") {
        return [];
    }

    const min = Math.min(start, end);
    const max = Math.max(start, end);
    const primes = [];

    for (let current = min; current <= max; current++) {
        if (isPrime(current)) {
            primes.push(current);
        }
    }

    return primes;
}

console.log("Primes between 10 and 30:", findPrimesInRange(10, 30));
console.log("Primes between 1 and 10:", findPrimesInRange(1, 10));
`,
    hint: "1. Create a helper function `isPrime(num)` that returns true if `num > 1` and not divisible by any integer from $2$ to $\\sqrt{num}$.\n2. Loop through `current` from `Math.min(start, end)` up to `Math.max(start, end)`.\n3. If `isPrime(current)` is true, `.push(current)` into results.",
    functionName: "findPrimesInRange",
    defaultInput: "10, 30",
    inputFormat: "two-numbers",
    inputPlaceholder: "e.g. 10, 30",
    testCases: [
      { input: [10, 30], expected: [11, 13, 17, 19, 23, 29], label: "Standard Range (10 to 30)" },
      { input: [1, 10], expected: [2, 3, 5, 7], label: "Small Range (1 to 10)" },
      { input: [30, 10], expected: [11, 13, 17, 19, 23, 29], label: "Inverted Range (30 to 10)" },
      { input: [24, 28], expected: [], label: "Range with No Primes (24 to 28)" },
      { input: [2, 2], expected: [2], label: "Single Prime Boundary (2 to 2)" }
    ]
  },
  {
    id: 3,
    slug: "second-largest-second-smallest",
    title: "Second Largest & Second Smallest Number",
    category: "Arrays",
    difficulty: "Difficult",
    difficultyColor: "bg-purple-100 text-purple-800 border-purple-300",
    badgeColor: "text-purple-600 bg-purple-50",
    summary: "Find the second largest and second smallest unique numbers in an unsorted array.",
    description: `Given an array of numbers, determine the **second largest** and **second smallest** distinct numbers.

### Key Rules:
- The array can contain duplicate values (e.g. \`[10, 20, 20, 5, 5]\`). The second largest should be **10** (not 20), and second smallest should be **10** (not 5).
- If the array contains fewer than 2 distinct numbers (e.g. \`[5, 5, 5]\` or \`[7]\`), return \`null\` or an informative message.
- Can be solved in $O(N)$ single pass or through unique filtering + sorting.`,
    concepts: ["Array Traversal", "Infinity / -Infinity", "Duplicate Handling", "Object Return", "Conditionals"],
    examples: [
      {
        input: "[10, 5, 20, 8, 15]",
        output: "{ secondSmallest: 8, secondLargest: 15 }",
        explanation: "Sorted unique: [5, 8, 10, 15, 20]. Second smallest is 8, second largest is 15."
      },
      {
        input: "[5, 5, 5, 2, 8, 8]",
        output: "{ secondSmallest: 5, secondLargest: 5 }",
        explanation: "Sorted unique: [2, 5, 8]. Second smallest is 5, second largest is 5."
      },
      {
        input: "[42]",
        output: "null",
        explanation: "Less than two distinct elements."
      }
    ],
    starterCode: `/**
 * Program 3: Second Largest and Second Smallest Number
 * @param {number[]} arr - Array of numbers
 * @returns {object|null} - Object with secondSmallest and secondLargest, or null
 */
function findSecondMinMax(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        return null;
    }

    // Write your logic here:
    // 1. Extract unique numbers or track 1st/2nd largest & smallest
    // 2. Return { secondSmallest: ..., secondLargest: ... }
    
    let secondSmallest = null;
    let secondLargest = null;

    return {
        secondSmallest,
        secondLargest
    };
}

// Test call
console.log(findSecondMinMax([10, 5, 20, 8, 15]));
`,
    solutionCode: `function findSecondMinMax(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        return null;
    }

    // Filter unique numbers without Set
    const unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && !isNaN(arr[i])) {
            if (!unique.includes(arr[i])) {
                unique.push(arr[i]);
            }
        }
    }

    // If fewer than 2 unique numbers exist
    if (unique.length < 2) {
        return null;
    }

    // Sort ascending numerically
    unique.sort((a, b) => a - b);

    return {
        secondSmallest: unique[1],
        secondLargest: unique[unique.length - 2]
    };
}

console.log(findSecondMinMax([10, 5, 20, 8, 15]));
console.log(findSecondMinMax([5, 5, 5, 2, 8, 8]));
console.log(findSecondMinMax([10]));
`,
    hint: "1. Filter out invalid values and collect unique numbers using a loop with `!unique.includes(num)`.\n2. If `unique.length < 2`, return `null`.\n3. Sort the unique array with `.sort((a, b) => a - b)`.\n4. `secondSmallest` is at index `1`, and `secondLargest` is at index `unique.length - 2`.",
    functionName: "findSecondMinMax",
    defaultInput: "[10, 5, 20, 8, 15]",
    inputFormat: "array-numbers",
    inputPlaceholder: "e.g. [10, 5, 20, 8, 15]",
    testCases: [
      { input: [[10, 5, 20, 8, 15]], expected: { secondSmallest: 8, secondLargest: 15 }, label: "Standard Array [10, 5, 20, 8, 15]" },
      { input: [[5, 5, 5, 2, 8, 8]], expected: { secondSmallest: 5, secondLargest: 5 }, label: "Duplicates Array [5, 5, 5, 2, 8, 8]" },
      { input: [[1, 2, 3, 4]], expected: { secondSmallest: 2, secondLargest: 3 }, label: "Sequential Array [1, 2, 3, 4]" },
      { input: [[7, 7, 7]], expected: null, label: "All Identical Elements [7, 7, 7]" },
      { input: [[-10, -5, -20, -1]], expected: { secondSmallest: -10, secondLargest: -5 }, label: "Negative Numbers [-10, -5, -20, -1]" }
    ]
  },
  {
    id: 4,
    slug: "remove-duplicates-without-set",
    title: "Remove Duplicates Without Using Set",
    category: "Arrays",
    difficulty: "Intermediate",
    difficultyColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    badgeColor: "text-emerald-600 bg-emerald-50",
    summary: "Filter out duplicate items from an array preserving first occurrence order without using ES6 Set.",
    description: `Given an array containing duplicate items, remove all duplicates and return an array with only unique items in the exact order they first appeared.

### Constraint:
**DO NOT USE \`new Set()\` or Set methods.**

### Methods to solve:
1. **Auxiliary Array + \`includes()\` / \`indexOf()\`**: Traverse the original array and append elements to a new array only if not already present.
2. **Frequency/Hash Map Object**: Use an object as a lookup table to mark seen items in $O(1)$ lookup time.
3. **Filter + \`indexOf()\`**: Check if \`arr.indexOf(item) === index\`.`,
    concepts: ["Arrays", "For Loops", "indexOf() / includes()", "Hash Objects / Lookup", "Time Complexity"],
    examples: [
      {
        input: "[1, 2, 3, 2, 4, 1, 5]",
        output: "[1, 2, 3, 4, 5]",
        explanation: "Repeated 2 and 1 are eliminated."
      },
      {
        input: "['apple', 'banana', 'apple', 'orange']",
        output: "['apple', 'banana', 'orange']",
        explanation: "Second 'apple' is eliminated."
      },
      {
        input: "[9, 9, 9, 9]",
        output: "[9]",
        explanation: "All duplicates stripped."
      }
    ],
    starterCode: `/**
 * Program 4: Remove Duplicate Elements Without Using Set
 * @param {Array} arr - The array with potential duplicates
 * @returns {Array} - Array with unique elements
 */
function removeDuplicates(arr) {
    if (!Array.isArray(arr)) {
        return [];
    }

    // NOTE: Do NOT use \`new Set()\`
    // Write your logic here:
    let uniqueArray = [];

    // Loop through arr and build uniqueArray

    return uniqueArray;
}

// Test call
console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));
`,
    solutionCode: `function removeDuplicates(arr) {
    if (!Array.isArray(arr)) return [];

    const uniqueArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        // Check if item already exists in uniqueArray
        if (uniqueArray.indexOf(item) === -1) {
            uniqueArray.push(item);
        }
    }

    return uniqueArray;
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));
console.log(removeDuplicates(["apple", "banana", "apple", "orange"]));
`,
    hint: "1. Create an empty array `const uniqueArray = [];`.\n2. Iterate through each element with a `for` loop.\n3. Check if `uniqueArray.indexOf(element) === -1` (or `!uniqueArray.includes(element)`).\n4. If true, `uniqueArray.push(element)`.\n5. Return `uniqueArray`.",
    functionName: "removeDuplicates",
    defaultInput: "[1, 2, 3, 2, 4, 1, 5]",
    inputFormat: "array-mixed",
    inputPlaceholder: "e.g. [1, 2, 3, 2, 4, 1, 5]",
    testCases: [
      { input: [[1, 2, 3, 2, 4, 1, 5]], expected: [1, 2, 3, 4, 5], label: "Numbers with duplicates" },
      { input: [["a", "b", "a", "c", "b"]], expected: ["a", "b", "c"], label: "String elements" },
      { input: [[10, 10, 10]], expected: [10], label: "All identical numbers" },
      { input: [[]], expected: [], label: "Empty array" },
      { input: [[1, 2, 3]], expected: [1, 2, 3], label: "Already unique array" }
    ]
  },
  {
    id: 5,
    slug: "character-frequency-counter",
    title: "Character Frequency Counter",
    category: "Strings",
    difficulty: "Intermediate",
    difficultyColor: "bg-teal-100 text-teal-800 border-teal-300",
    badgeColor: "text-teal-600 bg-teal-50",
    summary: "Count the occurrence frequency of each character in a string, ignoring whitespace.",
    description: `Given a string, count how many times each character appears in the string.

### Key Rules:
- Whitespace characters (spaces, tabs, newlines) should typically be ignored.
- Return an object mapping each character to its total count (e.g. \`{ p: 1, r: 2, ... }\`).
- Preserves casing or treats characters accurately.`,
    concepts: ["Strings", "For...of Loop", "Objects as Hash Maps", "Conditional Increment", "Regex (\\s)"],
    examples: [
      {
        input: "'programming'",
        output: "{ p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 }",
        explanation: "r, g, and m appear twice; all others appear once."
      },
      {
        input: "'hello world'",
        output: "{ h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }",
        explanation: "Spaces ignored. 'l' appears 3 times, 'o' appears 2 times."
      },
      {
        input: "'aAa'",
        output: "{ a: 2, A: 1 }",
        explanation: "Case-sensitive counting (unless normalized)."
      }
    ],
    starterCode: `/**
 * Program 5: Character Frequency Counter
 * @param {string} str - Input string
 * @returns {object} - Object with character frequencies
 */
function countCharFrequency(str) {
    if (typeof str !== "string") {
        return {};
    }

    // Write your logic here:
    // 1. Create an empty frequency object {}
    // 2. Iterate through each character in the string
    // 3. Skip whitespace
    // 4. Increment the count in the object

    let frequency = {};

    return frequency;
}

// Test call
console.log(countCharFrequency("programming"));
`,
    solutionCode: `function countCharFrequency(str) {
    if (typeof str !== "string") return {};

    const frequency = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        // Skip whitespace characters
        if (char === " " || char === "\\t" || char === "\\n") {
            continue;
        }

        // Increment existing count or initialize to 1
        if (frequency[char]) {
            frequency[char] += 1;
        } else {
            frequency[char] = 1;
        }
    }

    return frequency;
}

console.log(countCharFrequency("programming"));
console.log(countCharFrequency("hello world"));
`,
    hint: "1. Create `const frequency = {};`.\n2. Loop over string with `for (const char of str)` or `for (let i = 0; i < str.length; i++)`.\n3. If `char === ' '`, `continue`.\n4. Update counter: `frequency[char] = (frequency[char] || 0) + 1;`.\n5. Return `frequency`.",
    functionName: "countCharFrequency",
    defaultInput: '"programming"',
    inputFormat: "string",
    inputPlaceholder: 'e.g. "programming" or "hello world"',
    testCases: [
      { input: ["programming"], expected: { p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 }, label: "Word 'programming'" },
      { input: ["hello world"], expected: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }, label: "Phrase with spaces 'hello world'" },
      { input: ["abc"], expected: { a: 1, b: 1, c: 1 }, label: "Unique characters 'abc'" },
      { input: ["   "], expected: {}, label: "Whitespace only '   '" },
      { input: ["112233"], expected: { "1": 2, "2": 2, "3": 2 }, label: "Numeric string '112233'" }
    ]
  },
  {
    id: 6,
    slug: "anagram-checker",
    title: "Anagram Checker",
    category: "Strings",
    difficulty: "Intermediate",
    difficultyColor: "bg-indigo-100 text-indigo-800 border-indigo-300",
    badgeColor: "text-indigo-600 bg-indigo-50",
    summary: "Check if two strings are anagrams of each other ignoring spaces and case.",
    description: `An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Key Rules:
- Case-insensitive (e.g. \`"Listen"\` and \`"Silent"\` are anagrams).
- Ignore spaces and punctuation marks (e.g. \`"Dormitory"\` and \`"Dirty room"\` are anagrams).
- Must have identical letter counts for every character.`,
    concepts: ["String Manipulation", "toLowerCase()", "replace() / Regex", "Array .sort()", "Frequency Comparison"],
    examples: [
      {
        input: "'listen', 'silent'",
        output: "true (Anagram)",
        explanation: "Both strings contain e, i, l, n, s, t exactly once."
      },
      {
        input: "'Dormitory', 'Dirty room'",
        output: "true (Anagram)",
        explanation: "Ignoring spaces and casing, both contain d, i, m, o, o, r, r, t, y."
      },
      {
        input: "'hello', 'world'",
        output: "false (Not Anagram)",
        explanation: "Different letter sets."
      }
    ],
    starterCode: `/**
 * Program 6: Anagram Checker
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 * @returns {boolean} - true if anagrams, false otherwise
 */
function checkAnagram(str1, str2) {
    if (typeof str1 !== "string" || typeof str2 !== "string") {
        return false;
    }

    // Write your logic here:
    // 1. Clean strings: remove spaces/punctuation and convert to lowercase
    // 2. Compare lengths
    // 3. Sort characters or compare character frequencies
    
    return false;
}

// Test call
console.log(checkAnagram("listen", "silent"));
console.log(checkAnagram("hello", "world"));
`,
    solutionCode: `function cleanString(str) {
    // Keep only alphanumeric characters and convert to lower case
    return str
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");
}

function checkAnagram(str1, str2) {
    if (typeof str1 !== "string" || typeof str2 !== "string") {
        return false;
    }

    const clean1 = cleanString(str1);
    const clean2 = cleanString(str2);

    // If cleaned lengths differ, cannot be anagrams
    if (clean1.length !== clean2.length) {
        return false;
    }

    // Sort characters alphabetically and compare
    const sorted1 = clean1.split("").sort().join("");
    const sorted2 = clean2.split("").sort().join("");

    return sorted1 === sorted2;
}

console.log("listen & silent:", checkAnagram("listen", "silent"));
console.log("Dormitory & Dirty room:", checkAnagram("Dormitory", "Dirty room"));
console.log("hello & world:", checkAnagram("hello", "world"));
`,
    hint: "1. Clean both strings using `.toLowerCase().replace(/[^a-z0-9]/g, '')`.\n2. If `clean1.length !== clean2.length`, return `false`.\n3. Sort the characters: `clean.split('').sort().join('')`.\n4. Compare `sorted1 === sorted2`.",
    functionName: "checkAnagram",
    defaultInput: '"listen", "silent"',
    inputFormat: "two-strings",
    inputPlaceholder: 'e.g. "listen", "silent"',
    testCases: [
      { input: ["listen", "silent"], expected: true, label: "Simple Anagram ('listen', 'silent')" },
      { input: ["Dormitory", "Dirty room"], expected: true, label: "With spaces & casing ('Dormitory', 'Dirty room')" },
      { input: ["Astronomer", "Moon starer"], expected: true, label: "Multi-word Anagram ('Astronomer', 'Moon starer')" },
      { input: ["hello", "world"], expected: false, label: "Non-Anagram ('hello', 'world')" },
      { input: ["aab", "abb"], expected: false, label: "Same letters different counts ('aab', 'abb')" }
    ]
  },
  {
    id: 7,
    slug: "missing-number-in-array",
    title: "Missing Number in an Array",
    category: "Arrays",
    difficulty: "Intermediate",
    difficultyColor: "bg-cyan-100 text-cyan-800 border-cyan-300",
    badgeColor: "text-cyan-600 bg-cyan-50",
    summary: "Find the single missing number from an array containing consecutive integers from 1 to n.",
    description: `You are given an array containing distinct integers taken from the range $1$ to $n$ of size $n - 1$. One number from the sequence is missing. Find and return the missing integer.

### Mathematical Approach (Gauss Summation):
The sum of all integers from $1$ to $n$ is given by:
$$\\text{Expected Sum} = \\frac{n \\times (n + 1)}{2}$$
where $n = \\text{array length} + 1$.

$$\\text{Missing Number} = \\text{Expected Sum} - \\text{Actual Sum}$$

This enables an optimal $O(N)$ time and $O(1)$ space solution!`,
    concepts: ["Math Formulas (n*(n+1)/2)", "Array .reduce() or Loop", "Arithmetic Series", "Edge Cases"],
    examples: [
      {
        input: "[1, 2, 3, 5, 6]",
        output: "4",
        explanation: "Range is 1 to 6 (length is 5, so n=6). Expected sum is 6*7/2 = 21. Actual sum is 17. Missing: 21 - 17 = 4."
      },
      {
        input: "[2, 3, 1, 5]",
        output: "4",
        explanation: "Unsorted array from 1 to 5 with 4 missing."
      },
      {
        input: "[1, 2, 3, 4]",
        output: "5",
        explanation: "If 1..4 present, missing is next number 5."
      }
    ],
    starterCode: `/**
 * Program 7: Missing Number in an Array
 * @param {number[]} arr - Array of numbers from 1 to n with 1 missing
 * @returns {number} - The missing number
 */
function findMissingNumber(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }

    // Write your logic here:
    // 1. Determine n = arr.length + 1
    // 2. Calculate expected sum: n * (n + 1) / 2
    // 3. Calculate actual sum of elements in arr
    // 4. Return expectedSum - actualSum

    return null;
}

// Test call
console.log(findMissingNumber([1, 2, 3, 5, 6]));
`,
    solutionCode: `function findMissingNumber(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }

    // Total elements should be n
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;

    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

    return expectedSum - actualSum;
}

console.log("Missing in [1, 2, 3, 5, 6]:", findMissingNumber([1, 2, 3, 5, 6]));
console.log("Missing in [2, 3, 1, 5]:", findMissingNumber([2, 3, 1, 5]));
`,
    hint: "1. Calculate `n = arr.length + 1`.\n2. Compute `expectedSum = (n * (n + 1)) / 2`.\n3. Loop through array to compute `actualSum`.\n4. The answer is `expectedSum - actualSum`.",
    functionName: "findMissingNumber",
    defaultInput: "[1, 2, 3, 5, 6]",
    inputFormat: "array-numbers",
    inputPlaceholder: "e.g. [1, 2, 3, 5, 6]",
    testCases: [
      { input: [[1, 2, 3, 5, 6]], expected: 4, label: "Missing in middle [1, 2, 3, 5, 6]" },
      { input: [[2, 3, 1, 5]], expected: 4, label: "Unsorted array [2, 3, 1, 5]" },
      { input: [[2, 3, 4, 5]], expected: 1, label: "Missing first element 1 [2, 3, 4, 5]" },
      { input: [[1, 2, 3, 4]], expected: 5, label: "Missing last element 5 [1, 2, 3, 4]" },
      { input: [[1]], expected: 2, label: "Single element array [1]" }
    ]
  },
  {
    id: 8,
    slug: "longest-word-in-sentence",
    title: "Find the Longest Word in a Sentence",
    category: "Strings",
    difficulty: "Intermediate",
    difficultyColor: "bg-rose-100 text-rose-800 border-rose-300",
    badgeColor: "text-rose-600 bg-rose-50",
    summary: "Identify and return the word with the greatest length in a given sentence.",
    description: `Given a sentence string, find and return the longest individual word.

### Key Rules:
- Punctuation marks (like commas, periods, exclamation points) should be removed so they don't artificially increase a word's length.
- If there are multiple words with the same maximum length, return the **first** one encountered.
- Handle multiple spaces cleanly.`,
    concepts: ["Strings", "split() / RegExp", "Loops", "String .length", "Punctuation Cleaning"],
    examples: [
      {
        input: "'JavaScript is very powerful'",
        output: "'JavaScript'",
        explanation: "'JavaScript' has 10 letters, which is the longest."
      },
      {
        input: "'The quick brown fox jumped over the lazy dog.'",
        output: "'jumped'",
        explanation: "Punctuation '.' ignored. 'jumped' has 6 letters."
      },
      {
        input: "'Hello world!'",
        output: "'Hello'",
        explanation: "Both 'Hello' and 'world' have 5 letters; 'Hello' is first."
      }
    ],
    starterCode: `/**
 * Program 8: Find the Longest Word in a Sentence
 * @param {string} sentence - The sentence to analyze
 * @returns {string} - The longest word
 */
function findLongestWord(sentence) {
    if (typeof sentence !== "string" || sentence.trim() === "") {
        return "";
    }

    // Write your logic here:
    // 1. Split the sentence into words
    // 2. Strip punctuation marks from words
    // 3. Track and return the word with the maximum length

    let longestWord = "";

    return longestWord;
}

// Test call
console.log(findLongestWord("JavaScript is very powerful"));
`,
    solutionCode: `function findLongestWord(sentence) {
    if (typeof sentence !== "string" || sentence.trim() === "") {
        return "";
    }

    // Split by whitespace
    const rawWords = sentence.trim().split(/\\s+/);
    let longestWord = "";

    for (let i = 0; i < rawWords.length; i++) {
        // Strip non-alphanumeric/hyphen punctuation
        const cleanWord = rawWords[i].replace(/[^a-zA-Z0-9-]/g, "");

        if (cleanWord.length > longestWord.length) {
            longestWord = cleanWord;
        }
    }

    return longestWord;
}

console.log(findLongestWord("JavaScript is very powerful"));
console.log(findLongestWord("The quick brown fox jumped over the lazy dog."));
console.log(findLongestWord("Code, test, debug, repeat!"));
`,
    hint: "1. Split sentence by spaces using `.trim().split(/\\s+/)`.\n2. Initialize `let longestWord = ''`.\n3. In a loop, strip punctuation using `.replace(/[^a-zA-Z0-9-]/g, '')`.\n4. If `cleanWord.length > longestWord.length`, set `longestWord = cleanWord`.\n5. Return `longestWord`.",
    functionName: "findLongestWord",
    defaultInput: '"JavaScript is very powerful"',
    inputFormat: "string",
    inputPlaceholder: 'e.g. "JavaScript is very powerful"',
    testCases: [
      { input: ["JavaScript is very powerful"], expected: "JavaScript", label: "Sentence with 'JavaScript'" },
      { input: ["The quick brown fox jumped over the lazy dog."], expected: "jumped", label: "Sentence with punctuation" },
      { input: ["Love to code every single day"], expected: "single", label: "Words with tie ('single' is 6)" },
      { input: ["Hi"], expected: "Hi", label: "Single word 'Hi'" },
      { input: ["   spaced   out   words   here   "], expected: "spaced", label: "Multiple spaces" }
    ]
  },
  {
    id: 9,
    slug: "most-repeated-number",
    title: "Number Frequency & Most Repeated Number",
    category: "Arrays",
    difficulty: "Difficult",
    difficultyColor: "bg-fuchsia-100 text-fuchsia-800 border-fuchsia-300",
    badgeColor: "text-fuchsia-600 bg-fuchsia-50",
    summary: "Count frequencies of numbers in an array and determine the most repeated number and its count.",
    description: `Given an array of numbers, calculate how many times each number occurs, and identify the **most repeated number** (the mode) along with its occurrence count.

### Key Rules:
- Return an object detailing the result (e.g. \`{ mostRepeated: 2, occurrences: 3, frequencyTable: { ... } }\`).
- Handle ties gracefully (if multiple numbers share the highest frequency, return all tied numbers or the primary winner with frequency).
- Handle arrays with all unique numbers (each has occurrence = 1).`,
    concepts: ["Arrays", "Frequency Hash Map", "For...in / Object.entries", "Max Tracking", "Tie Resolution"],
    examples: [
      {
        input: "[2, 4, 2, 5, 2, 4, 6]",
        output: "{ mostRepeated: 2, occurrences: 3 }",
        explanation: "2 appears 3 times, 4 appears 2 times, others appear 1 time."
      },
      {
        input: "[1, 1, 2, 2, 3]",
        output: "{ mostRepeated: [1, 2], occurrences: 2 }",
        explanation: "Both 1 and 2 are tied with 2 occurrences."
      },
      {
        input: "[10, 20, 30]",
        output: "{ mostRepeated: [10, 20, 30], occurrences: 1 }",
        explanation: "All numbers appear once."
      }
    ],
    starterCode: `/**
 * Program 9: Number Frequency and Most Repeated Number
 * @param {number[]} arr - Array of numbers
 * @returns {object} - Object with mostRepeated, occurrences, and frequencyTable
 */
function findMostRepeatedNumber(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }

    // Write your logic here:
    // 1. Build a frequency table object
    // 2. Track the maximum frequency count
    // 3. Find the number(s) that match the maximum frequency
    
    return {
        mostRepeated: null,
        occurrences: 0,
        frequencyTable: {}
    };
}

// Test call
console.log(findMostRepeatedNumber([2, 4, 2, 5, 2, 4, 6]));
`,
    solutionCode: `function findMostRepeatedNumber(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }

    const freq = {};
    let maxCount = 0;

    // Build frequency table
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        freq[num] = (freq[num] || 0) + 1;
        if (freq[num] > maxCount) {
            maxCount = freq[num];
        }
    }

    // Collect all numbers that reached maxCount
    const topNumbers = [];
    for (const key in freq) {
        if (freq[key] === maxCount) {
            topNumbers.push(Number(key));
        }
    }

    return {
        mostRepeated: topNumbers.length === 1 ? topNumbers[0] : topNumbers,
        occurrences: maxCount,
        frequencyTable: freq
    };
}

console.log(findMostRepeatedNumber([2, 4, 2, 5, 2, 4, 6]));
console.log(findMostRepeatedNumber([1, 1, 2, 2, 3]));
`,
    hint: "1. Loop through `arr` to populate a `freq` object: `freq[num] = (freq[num] || 0) + 1;`.\n2. Keep track of `maxCount = Math.max(maxCount, freq[num])`.\n3. Loop through `freq` keys to collect numbers where `freq[key] === maxCount`.\n4. If 1 number has the max, return `topNumbers[0]`; if tied, return `topNumbers`.",
    functionName: "findMostRepeatedNumber",
    defaultInput: "[2, 4, 2, 5, 2, 4, 6]",
    inputFormat: "array-numbers",
    inputPlaceholder: "e.g. [2, 4, 2, 5, 2, 4, 6]",
    testCases: [
      { 
        input: [[2, 4, 2, 5, 2, 4, 6]], 
        expected: { mostRepeated: 2, occurrences: 3 }, 
        label: "Clear winner [2, 4, 2, 5, 2, 4, 6]",
        validator: (result) => result && (result.mostRepeated === 2 || (Array.isArray(result.mostRepeated) && result.mostRepeated[0] === 2)) && result.occurrences === 3
      },
      { 
        input: [[1, 1, 2, 2, 3]], 
        expected: { occurrences: 2 }, 
        label: "Tied winners [1, 1, 2, 2, 3]",
        validator: (result) => result && result.occurrences === 2 && (Array.isArray(result.mostRepeated) ? result.mostRepeated.includes(1) && result.mostRepeated.includes(2) : (result.mostRepeated === 1 || result.mostRepeated === 2))
      },
      { 
        input: [[9, 9, 9]], 
        expected: { mostRepeated: 9, occurrences: 3 }, 
        label: "All identical [9, 9, 9]",
        validator: (result) => result && result.occurrences === 3
      },
      { 
        input: [[5]], 
        expected: { mostRepeated: 5, occurrences: 1 }, 
        label: "Single element [5]",
        validator: (result) => result && result.occurrences === 1
      }
    ]
  },
  {
    id: 10,
    slug: "array-rotation",
    title: "Array Rotation",
    category: "Arrays",
    difficulty: "Challenge",
    difficultyColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    badgeColor: "text-emerald-600 bg-emerald-50",
    summary: "Rotate an array to the right by k positions, gracefully handling k > length.",
    description: `Given an array of elements and an integer $k$, rotate the array to the **right** by $k$ steps.

### Example:
Input: \`arr = [1, 2, 3, 4, 5], k = 2\`
- 1st rotation: \`[5, 1, 2, 3, 4]\`
- 2nd rotation: \`[4, 5, 1, 2, 3]\`
Output: \`[4, 5, 1, 2, 3]\`

### Key Edge Cases:
- **$k > \\text{length}$**: If array length is 5 and $k = 7$, rotating by 7 is identical to rotating by $7 \\pmod 5 = 2$ positions!
- **$k = 0$ or negative $k$**: Handle zero rotations or normalize negative steps.
- **Empty array**: Return \`[]\`.`,
    concepts: ["Array Slicing / Splice", "Modulo Operator (k % n)", "Array Spread / Concatenation", "In-place Reversal"],
    examples: [
      {
        input: "arr = [1, 2, 3, 4, 5], k = 2",
        output: "[4, 5, 1, 2, 3]",
        explanation: "Last 2 elements [4, 5] move to front."
      },
      {
        input: "arr = [10, 20, 30, 40], k = 6",
        output: "[30, 40, 10, 20]",
        explanation: "k = 6 % 4 = 2. Rotated by 2 positions."
      },
      {
        input: "arr = [1], k = 10",
        output: "[1]",
        explanation: "1 element array remains unchanged."
      }
    ],
    starterCode: `/**
 * Program 10: Array Rotation
 * @param {Array} arr - The array to rotate
 * @param {number} k - Number of positions to rotate right
 * @returns {Array} - The rotated array
 */
function rotateArray(arr, k) {
    if (!Array.isArray(arr) || arr.length <= 1) {
        return arr || [];
    }

    // Write your logic here:
    // 1. Calculate effective rotations: effectiveK = k % arr.length
    // 2. Handle negative k if any
    // 3. Slice and rearrange the elements

    let rotated = [];

    return rotated;
}

// Test call
console.log(rotateArray([1, 2, 3, 4, 5], 2));
`,
    solutionCode: `function rotateArray(arr, k) {
    if (!Array.isArray(arr) || arr.length <= 1) {
        return arr ? [...arr] : [];
    }

    const n = arr.length;
    // Calculate normalized k
    let effectiveK = k % n;
    if (effectiveK < 0) {
        effectiveK += n; // Handle negative rotation
    }

    if (effectiveK === 0) {
        return [...arr];
    }

    // Slice last effectiveK elements and combine with starting elements
    const tail = arr.slice(n - effectiveK);
    const head = arr.slice(0, n - effectiveK);

    return tail.concat(head);
}

console.log("Rotate [1,2,3,4,5] by 2:", rotateArray([1, 2, 3, 4, 5], 2));
console.log("Rotate [10,20,30,40] by 6:", rotateArray([10, 20, 30, 40], 6));
console.log("Rotate [1,2,3] by 0:", rotateArray([1, 2, 3], 0));
`,
    hint: "1. Handle `effectiveK = k % arr.length`.\n2. If `effectiveK === 0`, return a copy of the array.\n3. Extract the last `effectiveK` elements using `arr.slice(-effectiveK)`.\n4. Extract the front elements with `arr.slice(0, arr.length - effectiveK)`.\n5. Return `[...tail, ...head]`.",
    functionName: "rotateArray",
    defaultInput: "[1, 2, 3, 4, 5], 2",
    inputFormat: "array-and-number",
    inputPlaceholder: "e.g. [1, 2, 3, 4, 5], 2",
    testCases: [
      { input: [[1, 2, 3, 4, 5], 2], expected: [4, 5, 1, 2, 3], label: "Rotate by 2: [1, 2, 3, 4, 5]" },
      { input: [[10, 20, 30, 40], 6], expected: [30, 40, 10, 20], label: "k > length: [10, 20, 30, 40], k=6" },
      { input: [[1, 2, 3], 0], expected: [1, 2, 3], label: "Rotate by 0: [1, 2, 3]" },
      { input: [[7, 8, 9], 3], expected: [7, 8, 9], label: "Rotate by full length k=3" },
      { input: [[1], 5], expected: [1], label: "Single element array [1], k=5" }
    ]
  }
];

// Helper to look up a program by ID or Slug
function getProgramById(id) {
    const numId = parseInt(id, 10);
    return PROGRAMS_DATA.find(p => p.id === numId) || PROGRAMS_DATA[0];
}

function getProgramBySlug(slug) {
    return PROGRAMS_DATA.find(p => p.slug === slug) || PROGRAMS_DATA[0];
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = { PROGRAMS_DATA, getProgramById, getProgramBySlug };
}
