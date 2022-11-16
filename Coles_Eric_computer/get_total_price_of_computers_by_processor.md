### **get_total_price_of_computers_by_processor(searchValue)**

returns the total price of all computers that have the same processor than the given searchValue

> Parameters:
>
> > searchValue is the processor of the computer to be searched

> Returns:
>
> > total cumulative price of computers matching the searchValue

> Throws:
>
> > if no computer with the given searchValue is found throws an exeption `'nothing found with given'`. If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

////

# Test Cases for returns the total price of all books that have the same author.

### **get_total_price_of_books_by_author(searchValue)**

returns the total price of all books that have the same author than the given searchValue

> Parameters:

>

> > searchValue is the author of the book to be searched

> Returns:

>

> > total cumulative price of books matching the searchValue

> Throws:

>

> > if no book with the given searchValue is found throws an exeption `'nothing found with given search value'`. If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### Test 1: If a parameter searchValue has then return total cumulative price of books matching the searchValue

```js
bookStorage.get_total_price_of_books_by_author("Layla Jones");
```

return 148

### Test 2: If a parameter searchValue has not found throw error says 'nothing found with given search value'

```js
bookStorage.get_total_price_of_books_by_author("Zoe Jones");
```

throws an exception `'nothing found with given search value'`

### Test 3: missing parameter throws an exception: 'missing parameter'

```js
bookStorage.get_total_price_of_books_by_author();
```

throws an exception `'missing parameter'`
