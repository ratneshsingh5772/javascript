# AI Coding Agent Instructions

## Project Overview
This is a simple JavaScript educational script demonstrating the difference between value types (primitives) and reference types (objects) in JavaScript.

## Key Concepts
- **Primitives** (string, number): Copied by value - changes to one variable don't affect others
- **Objects**: Copied by reference - changes to one variable affect all references to the same object

## Running the Code
```bash
node valuetype.js
```

## Code Patterns
- Use `let` for variable declarations (ES6+ style)
- Demonstrate type behavior through console logging
- Examples show:
  - String primitives: `let x = "Ratnesh"; let y = x;` - y retains original value when x changes
  - Objects: `let p = { name: "Ratnesh" }; let q = p;` - q reflects changes made through p

## Development Notes
- Single file script with no dependencies
- Educational purpose - focuses on JavaScript fundamentals
- No build process, tests, or complex workflows required
- Output appears in console showing before/after values

## File Structure
- `valuetype.js` - Main script containing all examples and demonstrations