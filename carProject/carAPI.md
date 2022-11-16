# Carsstorage API

## cars.json

```json
[
  { "model": "Bored T-module", "licence": "-ABC-1" },
  { "model": "Nova", "licence": "XYZ-123" },
  { "model": "Bored T-module", "licence": "GTF-10" },
  { "model": "GTX", "licence": "B-1" }
]
```

**search(key,value)**

Function returns an array of cars that matches given criteria. If no match, returns an empty array

if the parameters are missing, returns all cars in an array.

#### parameters:

- key: model or licence
- value: value to be searched

### Examples

```js
search("model", "Nova");
```

returns

```json
[{ "model": "Nova", "licence": "XYZ-123" }]
```

```js
search("model", "Bored T-model");
```

returns

```json
[
  {"model":"Bored T-model", "licence":"ABC-1},
  { "model":"Bored T-module", "licence":"GTF-10" },
]
```
