Exploring Modals
=========================== 
Tutorials, exercises, sample extensions, and notes created/used while learning to build modals.

##CSS Positioning

###Static
All HTML elements are positioned static, by default, and even without specifying. Static elements will appear in the natural order indicated in your HTML document, unless a specific position is identified.

###Relative
Typically, an element with a `position: relative;` is created in order to position other element(s) absolutely with respect to the relatively positioned element.

The use of the term “relative” may confuse some in the case of CSS positioning. If you try to set an element to `position: relative;` without specifying further, it will have no effect on that element’s positioning. What you’ve basically told the stylesheet to do is position that element relative to itself. By specifying an attribute, such as `position: relative;` and `top: 50px;`, that element’s position will shift 50 pixels beneath where it would naturally appear if it were positioned static.

###Absolute
Absolutely positioned elements are positioned relative to its containing block which would be given a `position: relative;`.

Elements that are positioned absolutely can be relocated anywhere you specify, with no regard to the rest of the HTML document. Likewise, the rest of the HTML document and the elements therein will ignore the absolutely positioned element. An absolutely positioned element can also be used to overlap other elements, which is what we’ll be coming back to in a moment.

###Fixed
A fixed element will remain in the same spot in a user’s web browser, meaning its position will not change if a user decides to scroll through a page because the element's position is fixed relative to the *initial* containing block, which is typically the viewport -- the browser window or page box.

##Absolute Positioning

###Absolute Overlay Position
Overlay is positioned absolutely **with respect to the body**.

If the overlay is contained in another `div` and that other `div` has a position set to `relative`, **that overlay will be positioned absolutely with respect to its container, not the page body.**

An overlay must be a direct child node of the `body`, or else **none of its ancestors can have a position set to `relative`**.

###Overlay Coverage
To ensure the overlay reaches the bottom of the viewport, *and* increases as the content increases, **set a *minimum* height on the `HTML` element and on the body to 100%** instead of setting a height value.

To make sure overlay's height increases and expands to cover all the content on page scroll, **set a `position:relative;` on the `body` element** so that the overlay's height expands as the body's height expands.

###A Note on z-index
It is **best not to use unnecessarily high `z-index` values**, like `z-index: 999999;`, when positioning elements on top of other elements on a page. This can make it more complicated to keep track of which elements have a z-index of what value. Use z-indices only as needed.

###Pros & Cons

####Pros
* An advantage to this technique is that it is supported in all major browsers and also older ones, down to IE8.

####Cons
* This technique requires an empty `div` in your markup, which is non-semantic.
* The overlay will only cover as far as the main content fills the viewport.

##Fixed Positioning

###Fixed Overlay Position
Instead of positioning overlay absolutely (like above), give overlay fixed positioning and full width and height to cover entire viewport.

Allows overlay to stay in position, covering the whole viewport area, no matter how far down main content extends, or how far down user scrolls.

###A Note on Transforming Overlay's Ancestors
No matter where you put the overlay `div`, it'll get a fixed position with respect to the viewport, ***unless you are transforming one of the overlay's ancestors***, in which case, the transformed element creates a containing block for *all* its positioned descendants, even those that are getting a fixed position.

###Pros & Cons

####Pros
* Don't have to worry about where you put overlay `div` in markup (except in the case where there is a transformed ancestor element).
* This technique is supported in all major browsers.
* Overlay to stays in position, covering the whole viewport area, no matter how far down main content extends, or how far down user scrolls.

####Cons
* This technique requires an empty `div` in your markup, which is non-semantic.

##Using Pseudo-element
Use pseudo-elements to avoid adding empty elements into markup.

Styles and considerations are same as previous techniques, but instead of sytling and positioning an empty element with a class `.overlay`, style the `:before` or `:after` pseudo-element on the `body`.

The pseudo-element itself can be either fixed or absolutely, but the positioning of the body will have to be relative in the case of an absolutely positioned pseudo-element.

###Pros & Cons

####Pros
* No empty element in markup.
* Creates an overlay that covers the whole viewport area, no matter how far down main content extends, or how far down user scrolls.

####Cons
* Pseudo-elements can present more compatability issues with older browsers.


##References
* https://blog.udemy.com/css-overlay/
* http://tympanus.net/codrops/2013/11/07/css-overlay-techniques/
