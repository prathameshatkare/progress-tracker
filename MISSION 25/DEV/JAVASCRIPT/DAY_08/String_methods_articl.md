
---

# 📚 JavaScript String Methods – Complete Guide

This article explains the most commonly used **JavaScript String methods**, how they work, and when to use them — perfect for beginners and as a quick reference.

---

## 🧵 1. String Properties

### **1.1 `length`**

* **Description:** Returns the number of characters in a string.
* **Example:**

```js
const str = "Hello";
console.log(str.length); // 5
```

---

## 🔤 2. String Character Access

### **2.1 `charAt(index)`**

* **Description:** Returns the character at a specific index.
* **Example:**

```js
"Hello".charAt(1); // "e"
```

### **2.2 `charCodeAt(index)`**

* **Description:** Returns the UTF-16 code of the character at the given index.
* **Example:**

```js
"ABC".charCodeAt(0); // 65
```

### **2.3 `codePointAt(index)`**

* **Description:** Returns the Unicode code point value (handles emoji/special characters too).
* **Example:**

```js
"😀".codePointAt(0); // 128512
```

### **2.4 `at(index)`**

* **Description:** Returns the character at the given position (supports negative indices).
* **Example:**

```js
"Hello".at(-1); // "o"
```

### **2.5 `str[index]`**

* **Description:** Access characters using bracket notation (read-only).
* **Example:**

```js
"Hello"[0]; // "H"
```

---

## ✂️ 3. String Extraction

### **3.1 `slice(start, end)`**

* **Description:** Extracts a section of a string.
* **Example:**

```js
"JavaScript".slice(0, 4); // "Java"
"JavaScript".slice(-6);   // "Script"
```

### **3.2 `substring(start, end)`**

* **Description:** Similar to `slice()` but does not support negative indices.
* **Example:**

```js
"JavaScript".substring(4, 10); // "Script"
```

### **3.3 `substr(start, length)`** *(deprecated but still works)*

* **Description:** Extracts a substring of specified length.
* **Example:**

```js
"JavaScript".substr(4, 6); // "Script"
```

---

## 🔗 4. String Combination

### **4.1 `concat(str1, str2, ...)`**

* **Description:** Joins multiple strings into one.
* **Example:**

```js
"Hello".concat(" ", "World"); // "Hello World"
```

---

## 🔠 5. String Case Conversion

### **5.1 `toUpperCase()`**

* Converts string to uppercase.

```js
"hello".toUpperCase(); // "HELLO"
```

### **5.2 `toLowerCase()`**

* Converts string to lowercase.

```js
"HELLO".toLowerCase(); // "hello"
```

---

## ✨ 6. String Normalization

### **6.1 `isWellFormed()`**

* **Description:** Returns `true` if the string is a valid UTF-16 string.
* **Example:**

```js
"\uD83D".isWellFormed(); // false (unpaired surrogate)
```

### **6.2 `toWellFormed()`**

* **Description:** Replaces ill-formed UTF-16 sequences with the replacement character `�`.
* **Example:**

```js
"\uD83D".toWellFormed(); // "�"
```

---

## 🧹 7. String Trimming

### **7.1 `trim()`**

* Removes whitespace from both ends.

```js
"   Hello   ".trim(); // "Hello"
```

### **7.2 `trimStart()` / `trimEnd()`**

* Removes whitespace from start or end.

```js
"   Hello".trimStart(); // "Hello"
"Hello   ".trimEnd();   // "Hello"
```

---

## ➕ 8. String Padding

### **8.1 `padStart(targetLength, padString)`**

* Pads string at the start until it reaches target length.

```js
"5".padStart(3, "0"); // "005"
```

### **8.2 `padEnd(targetLength, padString)`**

* Pads string at the end.

```js
"5".padEnd(3, "0"); // "500"
```

---

## 🔁 9. String Repetition

### **9.1 `repeat(count)`**

* Repeats string `count` times.

```js
"Hi".repeat(3); // "HiHiHi"
```

---

## 🔄 10. String Replacement

### **10.1 `replace(searchValue, newValue)`**

* Replaces the **first occurrence** of a substring or regex match.

```js
"apple apple".replace("apple", "orange"); // "orange apple"
```

### **10.2 `replaceAll(searchValue, newValue)`**

* Replaces **all occurrences**.

```js
"apple apple".replaceAll("apple", "orange"); // "orange orange"
```

---

## 🪓 11. String Splitting

### **11.1 `split(separator, limit)`**

* Splits string into an array based on a separator.

```js
"red,green,blue".split(","); // ["red", "green", "blue"]
```

---

## ✅ Summary Table

| **Method**                           | **Purpose**                     |
| ------------------------------------ | ------------------------------- |
| `length`                             | Get string length               |
| `charAt()`, `at()`, `[]`             | Access characters               |
| `charCodeAt()`, `codePointAt()`      | Get character codes             |
| `slice()`, `substring()`, `substr()` | Extract substrings              |
| `concat()`                           | Join strings                    |
| `toUpperCase()`, `toLowerCase()`     | Change case                     |
| `isWellFormed()`, `toWellFormed()`   | Validate and fix UTF-16 strings |
| `trim()`, `trimStart()`, `trimEnd()` | Remove whitespace               |
| `padStart()`, `padEnd()`             | Add padding                     |
| `repeat()`                           | Repeat strings                  |
| `replace()`, `replaceAll()`          | Replace substrings              |
| `split()`                            | Convert to array                |

---


---

# String Extraction Methods in JavaScript

JavaScript provides three main methods to extract parts of a string:

---

## **1. `slice(start, end)`**

Extracts a section of a string from `start` to **(but not including)** `end`.

```js
"JavaScript".slice(4, 10);  // "Script"
"JavaScript".slice(-6, -1); // "Scrip"
```

✅ Supports **negative indexes** (counts from the end).
❌ Does **not** swap arguments if `start > end`.

---

## **2. `substring(start, end)`**

Similar to `slice()`, but with some differences:

```js
"JavaScript".substring(4, 10);  // "Script"
"JavaScript".substring(10, 4);  // "Script" (arguments swapped)
"JavaScript".substring(-4, 6);  // "JavaSc" (negative → 0)
```

❌ No negative index support (treats negatives as `0`).
✅ Swaps arguments if `start > end`.

---

## **3. `substr(start, length)`** ⚠️ **Deprecated**

Extracts `length` characters starting from `start`.

```js
"JavaScript".substr(4, 6);  // "Script"
"JavaScript".substr(-6, 3); // "Scr"
```

⚠️ Avoid using `substr()` in new code — it’s deprecated.

---

## **Quick Reference**

| Method      | 2nd Param Meaning | Negative Index | Swaps Args |
| ----------- | ----------------- | -------------- | ---------- |
| `slice`     | End index         | ✅ Yes          | ❌ No       |
| `substring` | End index         | ❌ No           | ✅ Yes      |
| `substr`    | Length            | ✅ Yes          | ❌ No       |

---

