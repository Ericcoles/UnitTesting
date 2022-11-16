# Test Cases for getPersonsNumbersByType

### **getPersonsNumbersByType(firstname,lastname,type)**

Method returns an array of phone numbers of given `type`belonging to a given person with give `firstname`and `lastname``

if no person with given name is foud, an empty array [] is returned.
if no person with given number is foud, an empty array [] is returned.
if at least one parameter is ,ossong. an exception `'missing parameter'`is thrown

For example the work number of Leila Hökki:

```json
["87654321", "05040302"]
```

Before tests create reigster object with default data

### Test 1: work numbers of Leila Hökki

```js
register.getPersonNumbersByType("Leila", "Hökki", "work");
```

returns

```json
["87654321", "05040302"]
```

### Test 2: mobile numbers of Matt River

```js
register.getPersonNumbersByType("Matt", "River", "mobile");
```

return

```json
["045678912"]
```

### Test 2B: home numbers of Matt River

```js
register.getPersonNumbersByType("Matt", "River", "home");
```

return

```json
["56789659"]
```

### TEst 3: wrong type or name returns an empty array

```js
register.getPersonNumbersByType("Matt", "River", "x");
register.getPersonNumbersByType("Matt", "x", "mobile");
register.getPersonNumbersByType("x", "River", "mobile");
```

### Test 4: Missing parameter throws an exception: 'missing parameter'

```js
register.getPersonNumbersByType("Matt", "River");
register.getPersonNumbersByType("Matt");
register.getPersonNumbersByType();
```

### Test 5: if data is empty array (no persons found)

```js
const register = new PhoneRegister([]);
register.getPersonNumbersByType("Matt", "River", "mobile");
```

returns [];
