# JavaScript assignment operators

Assignment operators are used in JavaScript to assign values to variables. This document breaks down various types of assignment operators into categories for easier understanding.

## Basic assignment operators

These operators are fundamental for performing arithmetic operations and assigning their results to variables.

### `=`
Assigns the value on the right to the variable on the left.
- **Example:** `x = 5`

### `+=`
Adds the right operand to the left operand and assigns the result to the left operand.
- **Example:** `x += 3` is equivalent to `x = x + 3`

### `-=`
Subtracts the right operand from the left operand and assigns the result to the left operand.
- **Example:** `x -= 2` is equivalent to `x = x - 2`

### `*=`
Multiplies the left operand by the right operand and assigns the result to the left operand.
- **Example:** `x *= 4` is equivalent to `x = x * 4`

### `/=`
Divides the left operand by the right operand and assigns the result to the left operand.
- **Example:** `x /= 5` is equivalent to `x = x / 5`

### `%=`
Takes the modulus using two operands and assigns the result to the left operand.
- **Example:** `x %= 6` is equivalent to `x = x % 6`

### `**=`
Raises the left operand to the power of the right operand and assigns the result to the left operand.
- **Example:** `x **= 3` is equivalent to `x = x ** 3`

## Shift assignment operators

These operators manipulate the bit positions of the left operand.

### `<<=`
This operator shifts the bits of the left operand to the left by the number of places specified by the right operand.

- **Example:** 
  - Given `x = 4`, in binary this is `0100`.
  - Performing `x <<= 2` shifts all bits two places to the left, resulting in `10000`.

<details>
<summary><b>Detailed explanation (click to expand)</b></summary>

#### Initial state
- `0100` represents the binary for 4.

#### Process
- When shifting left (`<<=`), each bit moves left by the specified positions.
- The `1` from the position representing '4' moves left to the position representing '16'.
- Zeros are added on the right to fill the vacated positions.

#### Visual explanation
- **Before shift:** `0 1 0 0`
- **After shift:**  `1 0 0 0 0` (not `010000` because the leading zero does not hold value and is omitted in binary representation).

### Why leading zeros are omitted
- In binary notation, leading zeros do not affect the value of the number. They are placeholders and are generally not displayed in higher-level representations. When bits are shifted left, any bits that move beyond the size limit of the number type are discarded, and new zeros are introduced on the right.

</details>

### `>>=`
The right shift operator (`>>=`) moves the bits of the left operand to the right by the number of places specified by the right operand, while preserving the sign of the number. This means that the leftmost bits are filled with the leftmost bit of the original number (not just with zeros), which is crucial for representing negative numbers in binary form.

- **Example with a positive number:**
  - Suppose `x = 4`. In binary, this is `00000100`.
  - Performing `x >>= 2` shifts all bits two places to the right, resulting in `00000001`, which is `1` in decimal.

- **Example with a negative number:**
  - Suppose `x = -4`. For an 8-bit signed integer, this might be represented as `11111100` (using two's complement notation).
  - Performing `x >>= 2` shifts all bits two places to the right. Since the number is negative (indicated by the leftmost `1`), the shift fills the vacated leftmost bits with `1`s, resulting in `11111111`, which represents `-1` in two's complement notation.

### `>>>=`
Shifts the bits of the left operand to the right by the number of places specified by the right operand, filling the leftmost bits with zeros regardless of the sign.
- **Example:** If `x = 8` (binary 1000), then `x >>>= 2` will result in `x = 2` (binary 0010).

## Bitwise assignment operators

These operators perform bitwise operations on the bits of both operands and assign the result to the left operand.

### `&=`
Applies a bitwise AND operation between the binary representations of the left and right operands. It sets each bit of the result to `1` only if both corresponding bits in the original operands are `1`.
- **Example:** If `x = 6` (binary 0110) and `y = 3` (binary 0011), then `x &= y` will change `x to 2` (binary 0010).

### `|=`
Applies a bitwise OR operation between the binary representations of the left and right operands. It sets each bit of the result to `1` if at least one of the corresponding bits in the original operands is `1`.
- **Example:** If `x = 5` (binary 0101) and `y = 3` (binary 0011), then `x |= y` will change `x to 7` (binary 0111).

### `^=`
Applies a bitwise XOR to both operands and stores the result in the left operand.
- **Example:** If `x = 5` (binary 0101) and `y = 3` (binary 0011), then `x ^= y` will change `x to 6` (binary 0110).

<details>
<summary><b>Detailed explanation (click to expand)</b></summary>

The `^=` operator applies a bitwise XOR (exclusive OR) operation between the binary representations of the left and right operands. It compares each corresponding pair of bits and sets the resulting bit to `1` if and only if exactly one of the two bits is `1`.

#### Bit-by-Bit XOR Operation:
- **First bit (rightmost):** `1 (x)` XOR `1 (y)` = `0` (since both bits are the same)
- **Second bit:** `0 (x)` XOR `1 (y)` = `1` (since the bits are different)
- **Third bit:** `1 (x)` XOR `0 (y)` = `1` (since the bits are different)
- **Fourth bit (leftmost):** `0 (x)` XOR `0 (y)` = `0` (since both bits are the same)

After performing the XOR operation, the resulting binary representation of `x` becomes `0110`, which equals `6` in decimal.

</details>


## Logical assignment operators

These operators perform logical operations based on the values of operands and are especially useful in conditional constructs.

### `&&=`
Assigns the value of the right operand to the left operand only if the left operand is truthy (i.e., evaluates to true in a Boolean context).
- **Example:** If `x = 7` and `y = 3`, then `x &&= y` results in `x = 3`; but if `x = 0`, then `x &&= y` keeps `x = 0`.

### `||=`
Assigns the value of the right operand to the left operand only if the left operand is falsy (i.e., evaluates to false in a Boolean context).
- **Example:** If `x = 0` and `y = 3`, then `x ||= y` results in `x = 3`; but if `x = 7`, then `x ||= y` keeps `x = 7`.

### `??=`
Assigns the value of the right operand to the left operand only if the left operand is null or undefined.
- **Example:** If `x = null` and `y = 5`, then `x ??= y` results in `x = 5`; but if `x = 3`, then `x ??= y` keeps `x = 3`.
