# Lab 8 - Starter

## Hamza Dehaini - A17612377

---

## "Check Your Understanding"


**1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.**

    - Within a Github action that runs whenever code is pushed. Because tp run the tests in GitHub Actions makes sure that all the tests are ran properly and consistently.

**2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)**

    - No, since end to end tests are meant to test areas where users would interact with the software. You would be better off using unit tests to thest if unctions are returning the correct output in the code.
  
**3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.**

    - Yes, I would use a unit test to test the "message" feature of a messaging application since it offers control over the environment and gives the ability to isolate functionalitys to see if they work.

**4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.**

    - Yes, since unit tests are to tests the functionalities of an application, it would be very usefull to see of the "max message length" feature would work.