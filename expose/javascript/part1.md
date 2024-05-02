1. values added: 20
2. final result: 20
3. values added: 20
4. error --> the variable type let has a block scope, and on line 13 result is being returned outside of its scope so the compiler doesn't know what it is
5. error --> the const keyword prevents it from being reassigned, so line 7 ```result = num1 + num2;``` will lead to an error for trying to change the value of result when it has already been assigned to 0.
6. error --> outside of the block scope