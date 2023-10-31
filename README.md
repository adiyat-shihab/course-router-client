 - **Add at least 3 Project features**
  
  1.When course is selected and user try to select again the same course there is a toast showing that "Already Selected"
  
  2.User can't select more than 20 hour. 
 
  3.User can see how much remaining hour's left. If user select more than remaining hour that coross the reamining      hour that use can see a toast that are inform user that they can't select more course

- **Discuss how you managed the state in your assignment project.**

I was use 5 state

**1. card**

**2. dataForCart**

**3. totalTime**

**4. totalPrice**

**5. credit**

**6. reamaining**

### Card state : 
This state is my main state in react. When i fetch data i was store all of data in card state.

### dataForCard state : 

this state is used for get single data  that recive when button clicked where  the data got to cart functionality.


### totalTime : 

this state is used for store calculated of total credit time.

### totalPrice : 

this is for store total calculated price.

### credit : 

when course button click and get the credit time this state is get that time and apply them for calculte the  total credit time.

### reamaining : 

this state is store remaining time and use the value for condition when remaining value is less than 0.


implementing axios, tanstack query
