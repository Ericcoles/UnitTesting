# ComputerStorage API

## Constructor

### **constructor(jsondata)**

Initializes ComputerStorage object

> Parameters:
>
> > The data storage json object is passed as a parameter to the constructor.

> Returns:
>
> >

> Throws:
>
> > If the parameter is missing, constructor throws an error `'data storage missing'`

## Methods

### **get_All_computers_By_processor(searchValue)**

searches computers with given processor

> Parameters:
>
> > searchValue is the processor of the computer to be searched

> Returns:
>
> > Returns an array of computer objects of given processor. If no computer of given processor is found, returns an empty array.

> Throws:
>
> > If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### **get_memory_of_computer_by_name(searchKey)**

returns the memory of the computer matching the name

> Parameters:
>
> > searchKey is the name of the computer

> Returns:
>
> > returns the memory of computer matching the searchKey name or null if no match is found

> Throws:
>
> > If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### **get_computer_accessories(searchKey)**

Returns an array of computer accessories. If none found, returns an empty array.

> Parameters:
>
> > searchKey is the number of the computer

> Returns:
>
> > accessories of the computer as an array or if none is found or it is empty or parameter searchKey is missing, returns an empty array.

> Throws:
>
> >

### **get_a_computer_matching_number(searchKey)**

Method searches the datastorage for an object with given searchKey. Key is unique.

> Parameters:
>
> > searchKey is the primary key number of the computer

> Returns:
>
> > returns the computer object matching the number or null if there is no match

> Throws:
>
> > if parameter searchKey is missing, throws an exception `'missing parameter'`

### **get_total_price_of_computers_by_processor(searchValue)**

returns the total price of all cars that have the same processor than the given searchValue

> Parameters:
>
> > searchValue is the processor of the computer to be searched

> Returns:
>
> > total cumulative price of computers matching the searchValue

> Throws:
>
> > if no computer with the given searchValue is found throws an exeption `'nothing found with given'`. If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown
