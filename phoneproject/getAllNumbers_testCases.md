# Test cases for getAllNumbers

### **getAllNumbers()**

Returns all phone numbers in an array, each as an object of form:

```json
{
  "firstname": "",
  "lastname": "",
  "phones": []
}
```

The phone object in phones array is of form:

```json
{ "type": "", "number": "" }
```

If a person doesn't have a phone (the phones field is missing or is an empty array), the person is not added into the result array.

if all phones are missing, an empty array is returned.
if all persons are missing, an empty array is returned.

### Test 1: All persons are missing

```js
const register = new PhoneRegister([defaultJson]);

register.getAllNumbers();
```

returns []

### Test 2: Using default data

```js
[
  {
    firstname: "Leila",
    lastname: "Hökki",
    phones: [
      { type: "home", number: "12345678" },
      { type: "work", number: "8765431" },
      { type: "work", number: "05050302" },
    ],
  },
  {
    firstname: "Matt",
    lastname: "River",
    phones: [
      { type: "home", number: "56789659" },
      { type: "mobile", number: "045678912" },
      { type: "work", number: "3214569" },
    ],
  },
  {
    firstname: "Matt",
  },
];
```
