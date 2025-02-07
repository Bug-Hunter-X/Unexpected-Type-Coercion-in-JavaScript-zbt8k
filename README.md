# Unexpected Type Coercion in JavaScript

This example demonstrates a common error in JavaScript due to its loose typing system.  When you add a number and a string, JavaScript performs string concatenation rather than numerical addition.  This can lead to unexpected results and difficult-to-debug issues.

## Bug
The `myFunction` adds a number and a string.  The expected behavior would be numerical addition (10), but the actual result is string concatenation ('55').

## Solution
Explicit type conversion is required before performing mathematical operations to avoid unintended string concatenation.  The bugSolution.js file provides the solution.  Consider using `parseInt()` or `Number()` to convert the string to a number.