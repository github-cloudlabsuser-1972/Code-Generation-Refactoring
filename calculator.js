class Calculator {
    // Validates that inputs are numbers
    static validateNumbers(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Inputs must be numbers.');
        }
    }

    // Adds two numbers
    static add(a, b) {
        this.validateNumbers(a, b);
        return a + b;
    }

    // Subtracts the second number from the first
    static subtract(a, b) {
        this.validateNumbers(a, b);
        return a - b;
    }

    // Multiplies two numbers
    static multiply(a, b) {
        this.validateNumbers(a, b);
        return a * b;
    }

    // Divides the first number by the second
    static divide(a, b) {
        this.validateNumbers(a, b);
        if (b === 0) {
            throw new Error('Division by zero is not allowed.');
        }
        return a / b;
    }
}

// Test cases
try {
    console.log('Addition:', Calculator.add(10, 5)); // 15
    console.log('Subtraction:', Calculator.subtract(10, 5)); // 5
    console.log('Multiplication:', Calculator.multiply(10, 5)); // 50
    console.log('Division:', Calculator.divide(10, 5)); // 2

    // Error cases
    console.log('Division by zero:', Calculator.divide(10, 0)); // Error
} catch (error) {
    console.error('Error:', error.message);
}

try {
    console.log('Invalid input:', Calculator.add(10, 'a')); // Error
} catch (error) {
    console.error('Error:', error.message);
}
