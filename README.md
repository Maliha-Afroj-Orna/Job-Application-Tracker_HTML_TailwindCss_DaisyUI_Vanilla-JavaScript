1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

=> i) getElementById 
	-> We can use it to select one element by ID. 
	-> getElementById('id');

  ii) getElementsByClassName 
	-> We can use it to select all elements by Class Name. 
	-> getElementsByClassName('className');

 iii) querySelector 
	-> We can use it to select the first matching element by using Css selector
	-> querySelector('.className') / querySelector('#id') / querySelector('tagName')

  iv) querySelectorAll
	-> We can use it to select all the matching elements by using Css selector
	-> querySelectorAll('.className') / querySelectorAll('#id') / querySelectorAll('tagName')


2. How do you create and insert a new element into the DOM?

=> i) First select the element where i want to insert the new element
  ii) Second create a new element
 iii) Third inset text into the new element
  iv) Finally append the new element to the selected element

	-> const section = document.getElementById('section')
	   const div = document.createElement('div');
           div.innerText = "This is new div";
	   section.appendChild(div);


3. What is Event Bubbling? And how does it work?

=> i) Event Bubbling means an event starts from the target element and moves to it's parent element. 
   
  ii) ( <body>
	  <div>  
            <button></button>
          </div>
        </body> )
	
	-> If I click the button, first the button's event will run then the div and finally the body. (Bottom to Top)


4. What is Event Delegation in JavaScript? Why is it useful?

=> i) Event Delegation means adding event listener to the parent element instead of it's many child element.
  ii) Event Delegation is useful because it makes the code cleaner and short. It is also easy to use. It uses Event Bubbling.


5. What is the difference between preventDefault() and stopPropagation() methods?

=> i) preventDefault() -> It stops the default browser behavior. Like refresh after form submission.
 
  ii) stopPropagation() -> It stops the event from bubbling to it's parent element.


