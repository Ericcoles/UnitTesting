# Test cases for Dice class

## **constructor**

## 1. no upper bound given

- creates a dice with dot count minimumValue between 1 and maximumValue 6
- initializes dot count to zero

## 2. create dice with upper bounds 2-20

- creates a dice with dot count between 1 and upperbound
  (use minimumValue and maximumValue)
- initializes dot count to zero(tested in test case 1)

### 3. test exceptions

- 0 throws exception `'upper bound too small'`
- 1 throws exception `'upper bound too small'`
- -1 throws exception `'upper bound too small'`
- 21 throws exception `'upper bound too big'`

- 'a' throws exception `'upper boound must be an integer'`
- 2.5 throws exception `'upper bound must be an integer'`

## **roll()**

- create a dice with no upper bound. Upper bpund should be 6. When rolled the dot count should be between 1 and 6.

- create a dice with upper bounds 2-20. => results should be between 2 and 20

## **toString()**

In both cases create a new dice (no upperbound given)

- roll the dice. Compare result string to dots.
- don't roll the dice, returns `'Not roled yet'`
