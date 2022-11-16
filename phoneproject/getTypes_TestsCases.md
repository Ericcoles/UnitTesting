# Test Cases for

## **getTypes()**

Returns all phone types in an array. The type is added to the result array only once. If there are no phones or no persons, an empty array [] is returned. If the type is empty (empty string or missing) that number is omitted

For example

```json
["home", "work", "mobile"]
```

### Test 1: use default data

Before tests create `register` object from the class Phone Register

```js
register.getTypes();
```

returns

```json
["home", "work", "mobile"]
```

### Test 2: person has no phone

Test data:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": []
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": []
  }
]
```

```js
const register = new PhoneRegister(testData);
register.getTypes();
```

expect this to return an empty array []

### Test 3: no persons in phoneregister

testData is []

returns an empty array []

### Test 4 type is missing or is an empty string

Test data:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": []
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": [
      { "type": "home", "number": "567890123" },
      { "type": "cell", "number": "333333333" },
      { "type": "work", "number": "444444444" }
    ]
  },
  {
    "firstname": "Mary",
    "lastname": "Jones",
    "phones": [
      { "number": "567890123" },
      { "type": "cell", "number": "333333333" },
      { "type": "work", "number": "444444444" }
    ]
  }
]
```

create new register with testData

```js
const regsiter = new PhoneREgister(testData);
register.getTypes();
```

expect to get

```json
["work", "home", "mobile", "cell"]
```

### Test 5. Some phones are missing

testData

```json
 {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": []
  },
  {
    "firstname": "Vera",
    "lastname": "River",
    "phones": [{ "type":"home", "number": "1212121212" },
      { "type": "mobile", "number": "333333333" }
      ]
  }
```

```js
const regsiter = new PhoneREgister(testData);
register.getTypes();
```

expect to get

```json
["mobile", "home"]
```
