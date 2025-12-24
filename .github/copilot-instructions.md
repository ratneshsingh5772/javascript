# AI Coding Agent Instructions

## Project Overview
This is a collection of simple JavaScript educational scripts demonstrating fundamental JavaScript concepts including value types vs reference types and callback functions.

## Key Concepts
- **Primitives** (string, number): Copied by value - changes to one variable don't affect others
- **Objects**: Copied by reference - changes to one variable affect all references to the same object
- **Callbacks**: Functions passed as arguments to handle asynchronous operations, data processing, and events

## Running the Code
```bash
node valuetype.js    # Demonstrates value vs reference types
node callbacks.js    # Demonstrates callback functions and asynchronous patterns
```

## Code Patterns
- Use `let` for variable declarations (ES6+ style)
- Demonstrate concepts through console logging
- Examples show:
  - Value types: `let x = "Ratnesh"; let y = x;` - y retains original value when x changes
  - Reference types: `let p = { name: "Ratnesh" }; let q = p;` - q reflects changes made through p
  - Callbacks: `processNumbers(numbers, square)` - passing functions as arguments
  - Async callbacks: `setTimeout(() => { ... }, 2000)` - delayed execution

## Development Notes
- Individual script files with no dependencies
- Educational purpose - focuses on JavaScript fundamentals
- No build process, tests, or complex workflows required
- Browser-specific code (like DOM manipulation) is commented out for Node.js compatibility
- Output appears in console showing results and timing

## File Structure
- `valuetype.js` - Demonstrates primitive vs reference type behavior
- `callbacks.js` - Shows callback functions, async patterns, and event handling examples