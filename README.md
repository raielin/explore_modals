Exploring Modals
=========================== 
Tutorials, exercises, sample extensions, and notes created/used while learning to build modals.

##CSS Positioning

###Static
All HTML elements are positioned static, by default, and even without specifying. Static elements will appear in the natural order indicated in your HTML document, unless a specific position is identified.

###Relative
The use of the term “relative” may confuse some in the case of CSS positioning. If you try to set an element to `position: relative;` without specifying further, it will have no effect on that element’s positioning. What you’ve basically told the stylesheet to do is position that element relative to itself. By specifying an attribute, such as `position: relative;` and `top: 50px;`, that element’s position will shift 50 pixels beneath where it would naturally appear if it were positioned static.

###Absolute
Elements that are positioned absolutely can be relocated anywhere you specify, with no regard to the rest of the HTML document. Likewise, the rest of the HTML document and the elements therein will ignore the absolutely positioned element. An absolutely positioned element can also be used to overlap other elements, which is what we’ll be coming back to in a moment.

###Fixed
A fixed element will remain in the same spot in a user’s web browser, meaning its position will not change if a user decides to scroll through a page.

##References
* https://blog.udemy.com/css-overlay/
* http://tympanus.net/codrops/2013/11/07/css-overlay-techniques/
* http://codepen.io/SaraSoueidan/pen/42d073445ebb26c569db9d2dd7395af2
