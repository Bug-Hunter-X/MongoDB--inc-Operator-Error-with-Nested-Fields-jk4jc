# MongoDB $inc Operator Error with Nested Fields

This repository demonstrates a common error when using the `$inc` operator in MongoDB to update nested fields.  The `$inc` operator is designed to increment a numeric value, but it can throw errors or produce unexpected results if the target field doesn't exist or is not numeric. This example shows the problem and provides a corrected solution using the `$inc` operator correctly in conjunction with the `$setOnInsert` operator.

## Problem
The provided `bug.js` file showcases the problematic code.  It attempts to increment a nested field without first ensuring its existence.

## Solution
The `bugSolution.js` file presents a corrected approach.  It uses the `$setOnInsert` operator to create the nested field with a default value if it doesn't exist. This ensures that the `$inc` operator has a numeric value to increment.