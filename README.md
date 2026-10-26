# 🧪 DSA Interview Prep for SDETs & QA Engineers

> **TypeScript-first, pattern-driven, test-minded** — a structured approach to cracking the algorithmic rounds that QA and SDET interviews increasingly demand.

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Target Role](https://img.shields.io/badge/Target%20Role-SDET%20%7C%20QA%20Engineer-FF6B6B?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
![Problems](https://img.shields.io/badge/Problems%20Solved-31-4CAF50?style=for-the-badge)

</div>

---
<img width="1254" height="1254" alt="DSA Interview Prep Repository Infographic" src="https://github.com/user-attachments/assets/17aa2f42-4ca6-4b7b-937b-abda16bb48a4" />
## 📌 Why This Repository Exists

Most DSA prep resources are built for **Software Development Engineers (SDEs)** — they optimise for speed, recursion depth, and competitive programming tricks.

**SDET and QA Engineer interviews are different.** Interviewers expect you to think like someone who *tests* systems for a living:

| What SDEs focus on | What SDETs must additionally demonstrate |
|---|---|
| Correct output for happy-path input | Edge case coverage — empty strings, nulls, boundary values |
| Fast algorithmic solution | Readable, self-documenting, type-safe code |
| Abstract complexity analysis | Practical trade-off reasoning (Set vs Array vs Map, in-place vs extra space) |
| Single correct answer | Multiple approaches with pros/cons discussed |
| Pass the test | *Design* the test mentally while writing the solution |

> [!IMPORTANT]
> This repository bridges that gap. Every problem is solved with **test-minded commentary** — the same mental model you'd use writing a test plan, applied to writing an algorithm.

---

## 📂 Repository Structure

```
LeetCode/
├── Arrays_Map_Set/          # HashMap & Set fundamentals
│   ├── LeetCode_1.ts        # Two Sum
│   ├── LeetCode_1480.ts     # Running Sum of 1D Array
│   ├── LeetCode_217.ts      # Contains Duplicate
│   ├── LeetCode_349.ts      # Intersection of Two Arrays
│   ├── LeetCode_387.ts      # First Unique Character in a String
│   └── LeetCode_49.ts       # Group Anagrams
│
├── SlidingWindow/           # Sliding window & substring search
│   ├── leetCode_3.ts        # Longest Substring Without Repeating Characters
│   └── leetCode_28.ts       # Find Index of First Occurrence in a String
│
├── TwoPointer/              # In-place two-pointer techniques
│   ├── LeetCode_26.ts       # Remove Duplicates from Sorted Array
│   ├── LeetCode_283.ts      # Move Zeroes
│   └── LeetCode_88.ts       # Merge Sorted Array
│
├── Sorting/                 # Custom sort & frequency-based ordering
│   ├── LeetCode_75.ts       # Sort Colors (Dutch National Flag)
│   ├── LeetCode_179.ts      # Largest Number
│   ├── LeetCode_451.ts      # Sort Characters By Frequency
│   └── LeetCode_1122.ts     # Relative Sort Array
│
├── StringBasics/            # String parsing, validation & transformation
│   ├── LeetCode_8.ts        # String to Integer (atoi)
│   ├── LeetCode_71.ts       # Simplify Path
│   ├── LeetCode_151.ts      # Reverse Words in a String
│   ├── LeetCode_242.ts      # Valid Anagram
│   ├── LeetCode_468.ts      # Validate IP Address
│   ├── LeetCode_1108.ts     # Defanging an IP Address
│   └── LeetCode_1816.ts     # Truncate Sentence
│
├── Regex/                   # Regex-driven string problems
│   ├── LeetCode_125.ts      # Valid Palindrome
│   └── LeetCode_831.ts      # Masking Personal Information
│
├── StackAndParsing/         # Stack-based structure validation
│   └── LeetCode20.ts        # Valid Parentheses
│
├── InterviewImportant/      # High-frequency SDET interview classics
│   ├── CharacterCount.ts          # Character Frequency Count
│   ├── arrayMaxMin.ts             # Find Min & Max in One Pass
│   ├── compressedStringCount.ts   # Run-Length Encoding (String Compression)
│   ├── countConsonants.ts         # Count Consonants (Filter + Count)
│   ├── secondMinimumValue.ts      # Second Minimum Value
│   └── uniqeAndDuplicateCharacters.ts  # Unique & Duplicate Chars (No Collections)
│
└── README.md
```

---

## 🗂 Problem File Template

Every file in this repository follows a strict, self-contained template. Here is what a complete problem file looks like:

```typescript
/**
 * [Problem Number]. [Problem Title]
 *
 * [Problem description — copied from LeetCode or stated clearly]
 *
 * Example 1:
 *   Input:  ...
 *   Output: ...
 *
 * Constraints:
 *   - ...
 */

// ─── TypeScript Implementation ───────────────────────────────────────────────

function solveProblem(input: Type): ReturnType {
    // Clean, typed, edge-case-safe implementation
    // Inline comments explain each meaningful decision
}

// ─── Test Cases (run directly with: npx tsx <filename>) ──────────────────────

console.log(solveProblem(...)); // expected: ...

// ─── Deep Dive Commentary ─────────────────────────────────────────────────────

/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Plain-English mental model. What is the problem REALLY asking?
 * What would break a naive solution? What QA instincts apply?
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * The trigger phrase / keyword that signals which algorithmic pattern to apply.
 * e.g., "find two elements" → HashMap complement, "longest/shortest subarray" → Sliding Window.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * Trace through a sample input visually, step by step, showing variable state at each iteration.
 *
 * INTERVIEW TIPS:
 * - Clarifying questions to ask upfront (case sensitivity, null input, distinct values, etc.)
 * - Trade-off discussions (Set vs Array, sort vs Map, in-place vs extra space)
 * - Common follow-up questions from interviewers
 * - Edge cases to mention proactively
 *
 * Time Complexity:  O(?) — explanation
 * Space Complexity: O(?) — explanation
 */
```

> [!NOTE]
> The commentary block always comes **after** the implementation and test cases. This keeps the code clean and runnable on its own, while the explanation acts as a built-in "solution guide" you can study after solving.

---

## 🧩 Core Patterns Covered

| Pattern | What It Solves | Problems in This Repo |
|---|---|---|
| **Frequency Map** | Count occurrences, detect duplicates, group by character | Two Sum, Contains Duplicate, Group Anagrams, First Unique Char, Character Count, Count Consonants |
| **Two Pointers (Slow/Fast)** | In-place array manipulation on sorted/partially-ordered arrays | Remove Duplicates, Move Zeroes, Merge Sorted Array |
| **Sliding Window** | Longest/shortest subarray or substring with a constraint | Longest Substring Without Repeating Chars, First Occurrence in String |
| **Prefix Sum** | Cumulative running totals for range queries | Running Sum of 1D Array |
| **Custom Comparator Sort** | Arrange elements by non-standard ordering rules | Largest Number, Relative Sort Array, Sort by Frequency |
| **Stack / LIFO Matching** | Nested structure validation, path resolution, undo operations | Valid Parentheses, Simplify Path |
| **String Normalization** | Clean input before logic (trim, lowercase, strip non-alphanumeric) | Valid Palindrome, Reverse Words, Valid Anagram |
| **Split → Validate → Reconstruct** | Parse structured string formats with specific rules per segment | Validate IP Address, Masking PII, Defang IP, Truncate Sentence |
| **Run-Length / Two-Pass Streak** | Consecutive group scanning, compression, frequency-then-order | String Compression, Sort Colors, Unique & Duplicate Chars |
| **Linear Extremes Tracking** | Find min/max/second-min in one pass without sorting | Array Min/Max, Second Minimum Value |
| **State Machine Parsing** | Multi-stage string-to-integer with overflow clamping | String to Integer (atoi) |
| **Frequency Array (No Collections)** | Fixed-size ASCII array as a drop-in replacement for HashMap | Unique & Duplicate Characters |

---

## ⚡ Quick Start

### Prerequisites

- **Node.js** `v18+` (LTS recommended)
- **`tsx`** for running TypeScript files directly (no compile step needed)

### Install `tsx` globally (one-time setup)

```bash
npm install -g tsx
```

### Run any problem file

```bash
# From the repo root
npx tsx Arrays_Map_Set/LeetCode_1.ts
npx tsx SlidingWindow/leetCode_3.ts
npx tsx InterviewImportant/compressedStringCount.ts
```

> [!TIP]
> Each file is fully self-contained — no imports, no build step, no test runner needed. Just run it and see the output printed to your terminal. This makes it easy to experiment: edit the test cases at the bottom of any file and re-run instantly.

---

## 🎯 SDET Interview Playbook

These are the **5 golden behaviours** that separate a strong SDET DSA performance from a mediocre one:

### 1. 🔍 Clarify Before You Code
Before writing a single line, ask:
- *"Is the input always valid, or do I need to handle null/empty?"*
- *"Is the comparison case-sensitive? Should 'A' and 'a' be treated as the same character?"*
- *"Can values repeat? Are all values distinct?"*
- *"Should I modify the array in-place, or can I return a new one?"*

This shows test-thinking — you're already enumerating your test classes before implementation.

### 2. 📊 State Your Approach and Its Trade-offs
Don't just code. Narrate:
> *"I'll use a HashMap for O(1) lookup. The alternative is sorting first, which is O(n log n) but uses O(1) extra space — I'll go with the Map approach since the problem doesn't restrict space."*

Interviewers at SDET rounds specifically look for this reasoning.

### 3. 🔁 Walk Through a Concrete Example
Before submitting, trace your code on the given example step by step. Say the variable values out loud. This catches off-by-one errors and boundary misses — the exact bugs that testers hunt for in production code.

### 4. 🧱 List Edge Cases Proactively
As an SDET, edge case enumeration is your superpower. Always volunteer:
- Empty input (`[]`, `""`, `0`)
- Single element
- All identical elements
- Negative numbers / mixed signs
- Input at the constraint boundary (`10^5` elements)
- Unicode / special characters (for string problems)

### 5. ✍️ Write Self-Documenting Code
Name your variables as if you're writing a test:
```typescript
// ❌ Avoid
let x = 0, y = m - 1;

// ✅ Prefer
let writePointer = 0, readPointer = m - 1;
```
SDET interviewers notice when code reads like documentation.

> [!TIP]
> After solving, always ask: *"Would I be able to write a test plan for this function right now?"* If yes, your solution is well-structured. If not, revisit your naming and edge case handling.

---

## 📈 Progress Tracker

| Category | Total Problems | Status |
|---|---|---|
| Arrays / Map / Set | 6 | ✅ All solved |
| String Basics | 7 | ✅ All solved |
| Sorting | 4 | ✅ All solved |
| Two Pointer | 3 | ✅ All solved |
| Sliding Window | 2 | ✅ All solved |
| Regex & String Matching | 2 | ✅ All solved |
| Stack & Parsing | 1 | ✅ All solved |
| Interview Classics | 6 | ✅ All solved |
| **Total** | **31** | **✅ 31 / 31** |

---

## 🤝 Contributing — Adding a New Problem

Follow the template strictly so every file stays consistent and learnable.

### Checklist for a new problem file

```
✅ Problem statement copied verbatim (with examples + constraints)
✅ TypeScript solution with explicit types (no `any`)
✅ Inline comments on non-obvious logic decisions
✅ At least 5 test cases covering: happy path, edge cases, boundary values
✅ HOW TO UNDERSTAND THE PROBLEM section
✅ HOW TO RECOGNIZE THE PATTERN section (name the pattern explicitly)
✅ STEP-BY-STEP WALKTHROUGH (trace one example, show variable state)
✅ INTERVIEW TIPS section (clarifying questions + follow-ups + edge cases)
✅ Time & Space Complexity with explanation (not just the Big-O label)
✅ File placed in the correct pattern folder
```

### Naming Convention

```
LeetCode_<number>.ts          →  for official LeetCode problems
<descriptiveName>.ts          →  for interview classics without a LeetCode number
```

> [!NOTE]
> The `InterviewImportant/` folder is reserved for problems that appear frequently in SDET-specific rounds but may not have a direct LeetCode equivalent — things like character frequency maps, run-length encoding, and consonant counting that test string manipulation fundamentals.

---

## 🗺 Roadmap

Planned additions to expand coverage:

- [ ] **Binary Search** — Search in Rotated Sorted Array, Find Peak Element
- [ ] **Linked List** — Reverse a Linked List, Detect Cycle (Floyd's algorithm)
- [ ] **Recursion / Backtracking** — Generate Parentheses, Subsets
- [ ] **Dynamic Programming (Easy)** — Climbing Stairs, House Robber
- [ ] **Tree Traversal** — Level-Order BFS, Inorder/Preorder DFS
- [ ] **Queue / Deque** — Sliding Window Maximum
- [ ] **InterviewImportant additions** — FizzBuzz variants, Matrix rotation, Palindrome number

---

## 📄 License

MIT — use freely for your own interview preparation and learning.

---

<div align="center">

**Built for SDETs who write production-quality code under interview pressure.**

*Study the pattern. Understand the trade-off. Mention the edge case. Get the offer.*

</div>

