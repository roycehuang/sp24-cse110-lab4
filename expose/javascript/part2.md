1. the code will print "3" into the log because it is incremented in the for loop until it's value is $\le$ prices.length.
2. 150; the discounted price would continue to be updated until the last iteration of the for loop, which would to the code ```var discountedPrice = prices[2] * (1 - 0.5)``` which is $300 * 0.5 = 150$.
3. 150; the finalPrice is also updated each time the for loop runs, and will hold the last assigned value, which would be ```finalPrice = Math.round(discountedPrice * 100) / 100;``` and the last discountedPrice was 150, so $150*100/100 = 150$
4. This function will not return anything because nothing was printed into the logs, but the code runs the same 
5. error; the let keyword is assigned to ```i``` inside of the for loop block, but is called outside the block, so it is not within the block scope leading to an error
6. error; the let keyword is assigned to ```discountedPrice``` inside the for loop block, so another scope error
7. error; the ley keyword is assigned to ```finalPrice``` inside the for loop block, so another scope error
8. This function will not return anything because nothing was printed into the logs, but the code runs the same 
9. error; the let keyword is assigned to ```i``` inside of the for loop block, but is called outside the block, so it is not within the block scope leading to an error
10. 3; length is assigned initially, so no changing a const variable error, and the length of the prices array is 3.
11. This function will not return anything because nothing was printed into the logs, but the code runs the same 
12. 
    1.  ```student.name```
    2.  ```student['Grade Year']```
    3.  ```student.greeting()```
    4.  ```student['Favorite Teacher'].name```
    5.  ```student.courseLoad[0]```
13. arithmetic
    1.  '32'; concatenation between string and int
    2.  1; treats '3' as an int because subtractions
    3.  3; null has value 0 and $3+0=3$
    4.  '3null'; concatenation because '3' is a string
    5.  4; true has value 1 and $1+3=4$
    6.  0; false and null both have value 0 $0+0=0$
    7.  '3undefined'; concatenation because '3' is a string
    8.  NaN; treats '3' as an int because subtraction, but NaN because undefined
14. comparison
    1.  true; type conversion $2 \ge 1$ is true
    2.  false; comparison is done character by character, and with the first character $2 \gt 1$ so false
    3.  true; == comparison checks with type conversion, so 2 is the same as 2
    4.  false; === comparison checks without type conversion, so int does not equal string
    5.  false; true has value 1 and $1 \ne 2$
    6.  true; ```Boolean(2)``` is true because it's not 1, so true = true
15. The difference between the ```==``` and ```===``` operators are that the double equality means the equality test, whereas ```===``` is a strict equality operator which checks equality without type conversion
16. check ```part2-question16.js```
17. the result will be an array with [2,4,6] although it is not printed out. The for loop loops through the input array [1,2,3] and for each element, it performs a callback to the ```doSomething(num)``` function, which multiplies each of them by 2, and then pushes those to a new array, which leads to [2,4,6]
18. check ```part2-question18.js```
19.  
    1 \
    4 \
    3 \
    2 
20. 
