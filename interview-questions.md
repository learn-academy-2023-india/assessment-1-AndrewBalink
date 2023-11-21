# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. Tip: if you don't know the answer try answering a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: AB

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer:

Researched answer:

1. What is git? What is the difference between git and Github?

Your answer: Git is a free open source version control software used on our local machine (computer). Github is an online platform for version control allowing for collaboration to share your code with other developers and to copy other developer projects. 

Researched answer: Git is a free and open source distributed version control system designed to handle small and large projects with speed and efficency. Github is an online hosting service for version control using Git. It provides a platform for colllabortation, allowing multiple people to work on a project at the same time without overwriting eachother's changes. 


2. What is the difference between an array's index and its value?

Your answer: The array's index is the numerical value starting with 0 and counting by for each element in the array. The array's value is the actual data stored at the index of the array, such as a number or string. 

Researched answer: An array is a special type of object used for storing multiple values in a single variable. Each value in an aray has a specific postion, known as its index. The index is a numerical value that represents the postion of an element in the array. Array indices start from 0 and go up by 1 for each element. The first element of an array is at index 0, the second is at 1, and so on...  The value is the actual data that is stored at the index in the array. This can be any type of data, such as a number, string, object, another array, etc. For example, in the array 'let fruits = ["strawberry", "blueberry", "raspberry"];' - "strawberry" is a value in the array and is located at index 0. "blueberry" is another value located at index 1, and "raspberry" is another value located at index 2. 

3. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different.

Your answer: The similarities of arrays and strings is that you can get to any letter in a string or any item in a array by its "position" or actual term index. You can fnd out how many letters in a string or how many items in an array using length property. You can also go through each letter in a string or each item in an array one by one. The differences between strings and arrays are: you can change the items in an array, but you cannot change the letters in a string. Arrays have special actions called methods that let you add or remove items, and strings do not have this. A string can only hold letters. An array can hold many different things like numbers, other arrays, or other strings. Strings are usually used for woking with text, whereas arrays work with different pieces of data.  

Researched answer: Both can be accessed by their index. For example, if you have a string var string = "Hello"; you can access the first character by string[0] which will return "H". Likewise, if you have an array var array = [1, 2, 3]; you can access the first element by array[0], which will return "1". Both arrays and strings have a length property. For strings, it returns the number of characters in the string. For an array, it returns the number of elements in the array. Lastly, both also have iteration. Both can be iterated over using loops or other methods like forEach (for arrays) and forOf(both for arrays and strings). The differences between arrays and strings is that strings are immutable, meaning once created they cannot be changed. Arrays are mutable, which means you can change the array by adding, removing, or changing its elements. Strings and arrays also differ because they have different methods. Arrays have methods like shift, unshift, push, splice, etc. in order to add or remove elements. Strings do not because again, they are immutable. Both also have different concatenation. When concatenating two strings or join them, the result is a new string. However, when performed with arrays, it merges the two arrays into one. 

4. STRETCH: What are the four pillars of object oriented programming?

Researched answer: 1. Encapsulation - This is the process of hiding internal details of how an object works. It allows the data to be hidden from outside view and can only be accessed through methods. 2. Inheritance - This allows one class to inherit the properties and methods of another class. It promotes reusability and is a way to add new features to an existing class without modifying it. 3. Polymorphism - This allows one interface to be used for a general class of actions. It allows methods to behave differently based on the object that is calling them. 4. Abstraction - This is the process of simplifying complex systems by breaking them down into smaller, more manageable parts. It allows the programmer to focus on the essential features of the object.

## Looking Ahead: Terms for Next Week

Research and define the following terms. Hint: use the syllabus!

1. Higher-order Functions: Higher-order functions are built in methods in JavaScript. They are a specific subset of built in methods that take a function as an argument. Often higher-order functions are designed to operate on arrays. The function passed as an argument will execute once for every item in the array. This makes higher-order functions incredible useful for iteration.

2. Jest: Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. Jest was created by Facebook and used by Twitter, Spotify, and Airbnb.

3. Objects: Objects consist of collections of key:value pairs stored in curly braces. The key is a data type of symbol and the value is any valid data type in JavaScript.
