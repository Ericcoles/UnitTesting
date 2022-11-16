# Test Cases for constructor

## Test that the missing parameter throws an exception

```js
new PhoneRegister();
```

This will throw an exception `'phone data missing'`

##################

you could test also if the data passed to the contructor is assigned to an inner field, but that requires knowledge of objects inner workings
(name of the field) so let just stick to the API and test this later as a side effect of other tests.
