With constant DOM changes with JS and Ajax, it's increasingly tough to know when to init JS from a broswer extension that requires elements on a given website.

In my solution, I added doc ready for basic page loads, then a function that that detects ajax calls, and calls our init function when the ajax call is complete. The JS will load on document ready, but any ajax request will update the function call once the ajax request is complete.

We can add many event listeners for loading and changes (images, DOMNodeInserted, DOMNodeRemoved, DOMAttrModified), though these have negative site speed effects and result in rapidly calling our init functions, so I chose not to add in my solution.