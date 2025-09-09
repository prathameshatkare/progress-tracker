# 🧩 Data Structures & Algorithms

A collection of algorithm problems solved with **clear intuition** and **optimized solutions**.

---

## 📋 Problems Solved

| Sr No | Problem Name | Link | Intuition |
|-------|--------------|------|-----------|
| 1 | Two Sum | [LeetCode](https://leetcode.com/problems/two-sum/) | Use hashmap to check complements in one pass |
| 2 | Maximum Subarray | [LeetCode](https://leetcode.com/problems/maximum-subarray/) | Kadane's Algorithm — track running sum, reset if negative, keep max |
| 3 | Valid Anagram | [LeetCode](https://leetcode.com/problems/valid-anagram/) | Count character frequencies and compare |
| 4 | Best Time to Buy and Sell Stock | [LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | Track minimum price seen so far, calculate max profit |
| 5 | Valid Palindrome | [LeetCode](https://leetcode.com/problems/valid-palindrome/) | Two pointers from start and end, ignore non-alphanumeric |
| 6 | Sort Colors | [LeetCode](https://leetcode.com/problems/sort-colors/) | Dutch National Flag Algorithm — use 3 pointers to partition array |
| 7 | Largest Element in an Array | [GFG](https://www.geeksforgeeks.org/c-program-find-largest-element-array/) | Traverse array and keep track of max element |
| 8 | Second Largest Element (without sorting) | [GFG](https://www.geeksforgeeks.org/second-largest-element-in-array/) | Keep track of largest & second largest in single pass |
| 9 | Check if Array is Sorted | [GFG](https://www.geeksforgeeks.org/check-if-an-array-is-sorted/) | Iterate and check if every element ≤ next element |
| 10 | Remove Duplicates from Sorted Array | [LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | Use two-pointer approach to overwrite duplicates |
| 11 | Left Rotate Array by One Place | [GFG](https://www.geeksforgeeks.org/array-rotation/) | Store first element, shift rest left, put first at end |
| 12 | Left Rotate Array by D Places | [GFG](https://www.geeksforgeeks.org/array-rotation/) | Reverse array in parts (or use temp array) |
| 13 | Move Zeros to End | [LeetCode](https://leetcode.com/problems/move-zeroes/) | Two-pointer technique — push non-zero elements forward |
| 14 | Linear Search | [GFG](https://www.geeksforgeeks.org/linear-search/) | Traverse array and check for target element |
| 15 | Find Union of Two Arrays | [GFG](https://www.geeksforgeeks.org/union-of-two-arrays/) | Use set or two-pointer merge (if sorted) |
| 16 | Find Missing Number in Array | [LeetCode](https://leetcode.com/problems/missing-number/) | Use sum formula `n(n+1)/2` – sum of array |
| 17 | Maximum Consecutive Ones | [LeetCode](https://leetcode.com/problems/max-consecutive-ones/) | Count consecutive 1s and reset when 0 appears |
| 18 | Find Number Appearing Once | [LeetCode](https://leetcode.com/problems/single-number/) | XOR all numbers (pairs cancel out, single remains) |
| 19 | Longest Subarray with Sum K (Positives) | [GFG](https://www.geeksforgeeks.org/longest-sub-array-sum-k/) | Sliding window technique |
| 20 | Longest Subarray with Sum K (Pos/Neg) | [GFG](https://www.geeksforgeeks.org/longest-sub-array-with-sum-k/) | Prefix sum + hashmap to store first occurrence |
| 21 | Majority Element (>n/2 times) | [LeetCode](https://leetcode.com/problems/majority-element/) | Moore’s Voting Algorithm |
| 22 | Print Subarray with Maximum Sum | [GFG](https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/) | Kadane’s Algorithm with start/end tracking |
| 23 | Rearrange Array (Alternate Pos/Neg) | [GFG](https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/) | Use two arrays or in-place rotation |
| 24 | Next Permutation | [LeetCode](https://leetcode.com/problems/next-permutation/) | Find first decreasing element from right, swap & reverse |
| 25 | Leaders in an Array | [GFG](https://www.geeksforgeeks.org/leaders-in-an-array/) | Traverse from right, track max and store leaders |
| 26 | Longest Consecutive Sequence | [LeetCode](https://leetcode.com/problems/longest-consecutive-sequence/) | Use set to check starts of sequences |
| 27 | Set Matrix Zeros | [LeetCode](https://leetcode.com/problems/set-matrix-zeroes/) | Mark rows/cols first then set zeroes |
| 28 | Rotate Matrix by 90° | [LeetCode](https://leetcode.com/problems/rotate-image/) | Transpose + reverse each row |
| 29 | Print Matrix in Spiral Order | [LeetCode](https://leetcode.com/problems/spiral-matrix/) | Use 4 pointers (top, bottom, left, right) |
| 30 | Count Subarrays with Given Sum | [LeetCode](https://leetcode.com/problems/subarray-sum-equals-k/) | Prefix sum + hashmap to count occurrences |
