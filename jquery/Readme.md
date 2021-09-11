# jQuery

## --- Intro ---

* The purpose of jQuery is to make it much easier to use javascript on your website.

## What is jQuery ?

* jQuery is a lightweight, "write less, do more", javascript library.

* The purpose of jQuery is to make it much easier to use javascript on your website.

* jQuery takes a lot of common tasks that requires many lines of javascript code to accomplish, and wraps them into methods that you can call with a single line of code.

* jQuery also simplifies a lot of the complicated things from javascript, like AJAX calls and DOM Manipulation.

* The jQuery Library contains the following features:

1. HTML/DOM manipulation
2. CSS manipulation
3. HTML event methods
4. Effects and animations
5. AJAX
6. utilities

## Why jQuery ?

* There are lots of other javascript libraries out there, but jQuery is probably the most popular, and also the most extendable.

## Adding jQuery to your web pages

* There are several ways to start using jQuery on your web site.

1. Download the jQuery library from jQuery.com
2. Include jQuery from a CDN, like google.

## jQuery Syntax

* The jQuery syntax is tailor-made for selecting HTML elements and performing some action on the elements.

* Basic syntax: ```$(selector).action()```

* The best practice for jQuery is 'the document ready event -- it wait for the document to be fully loaded and ready before working with it.

```Function
$(document).ready(function(){
    //jquery methods go here....
})
```

## jQuery Effects   -- *Hide and show*

* jQuery.hide() --- Demonstrates a simple jQuery hide() method.

* jQuery.show()  --- it shows the content.

```jQuery

$('#hide').click(function(){
    $("p").hide();
})

$('#show').click(function(){
    #("p").show();
})
```

