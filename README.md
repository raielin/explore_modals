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

##Using HTML <dialog> Element
Most semantic technique is to use HTML `<dialog>` element, which provides in-page dialog box funtionality.

A *dialog* exists in the DOM tree and can be styled using ordinary CSS. For more information see [WHATWG entry](https://html.spec.whatwg.org/multipage/forms.html#the-dialog-element), [MDN: HTML Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog), and [MDN: HTMLDialogElement DOM Interface API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement).

### HTML <dialog> Element

####Key Features
The HTML dialog element has four main features (the fourth one - anchor points - is not yet implemented), three of which are pertinent here:
* Positioning
    - By default, a dialog is centered vertically in the viewport when opened.
    - It is absolutely positioned by default and can be scrolled. Override this by setting position to fixed in CSS and setting `top` and `left` values to center it.
    - Viewport centering occurs regardless of dialog's position in DOM tree.
* Modal Feature
    - Dialogs can be modal.
    - As a modal, dialogs will block the rest of the document.
    - There is a "pending dialog" stack to handle the case of multiple modal dialogs.
    - Includes pseudo element called `::backdrop`, which sets the background behind a modal, creating the dimming overlay effect.
* Always On Top
    - A new stacking layer on top of existing CSS stacking contexts handles "always on top" behavior.
    - Dialog and Fullscreen spec both use top layer. 
    - Modal dialogs reside in the top layer.
    - Don't need set `z-index` manually.

####DOM Interface API
Dialog element comes with an API which provides access to functions like `show()` and `hide()`.

###Pros & Cons

####Pros
* No empty element in markup.
* Dialog element can be placed anywhere in the DOM.
* Creates an overlay that covers the whole viewport area, no matter how far down main content extends, or how far down user scrolls.

####Cons
* Currently only basic support in Chrome and Opera. (Though there is a [polyfill](https://github.com/GoogleChrome/dialog-polyfill) available.)


##References
* https://blog.udemy.com/css-overlay/
* http://tympanus.net/codrops/2013/11/07/css-overlay-techniques/
* [Offical `<dialog>` element demos](http://demo.agektmr.com/dialog/)
* [WHATWG official documentation](https://html.spec.whatwg.org/multipage/forms.html#the-dialog-element)
* [MDN: HTML Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
* [MDN: HTMLDialogElement DOM Interface API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement)
* [`<dialog>` polyfill](https://github.com/GoogleChrome/dialog-polyfill)
* [`<dialog>` tutorial](http://blog.teamtreehouse.com/a-preview-of-the-new-dialog-element)
* [12-16-2013 update on `<dialog>`](http://updates.html5rocks.com/2013/09/dialog-element-Modals-made-easy)
* [7-24-2014 update on `<dialog>`](http://updates.html5rocks.com/2014/07/dialog-element-shipped-in-Chrome-37-Beta)

