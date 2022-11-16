# Test Cases for getAllNumbersByType

### **getAllNumbersByType(type)**

Returns an array of objects consisting of names and numbers of given type.

If no number of given type is found, an empty array [] is returned.
if a person have multiple number of given type, each of them will be in it't own object.

if parameter is missing, an exception `'missing parameter'` is thrown.

The format of the returned object is:

```json
[
  { "firstname": "", "lastname": "", "number": { "type": "", "number": "" } },
  { "firstname": "", "lastname": "", "number": { "type": "", "number": "" } }
]
```

For example type work

```json
[{ "firstname": "", "lastname": "", "number": { "type": "", "number": "" } }]
```

### Test 1: get all work numbers using default data

```json
register.getAllNumbersByType(work);
```

return

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "work", "tel": 87654 }
  }
]
```

### Test 2: get all mobile numbers using default data

```js
register.getAllNumbersByType("mobile");
```

``
