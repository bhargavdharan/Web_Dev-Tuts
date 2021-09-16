# CSS - (Cascading Style Sheets)

* Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in markup language such as HTML.

## Advantages of CSS

* Saves time

* Superior styles to HTML

* Multiple Device compatibility

* Global web standards.

## How many ways to apply CSS in web pages.

* Internal CSS

* External CSS

* Inline.

## Syntax of CSS

```Anatomy of a CSS Rule
h1{
    color: orange;
    text-align: center;
}
```

* h1 --- Selector

* color , text-align --- property

* orange, center --- values.

## SELECTORS

1. Tag/Element selector

2. Class selector

3. Id selector

4. pseudo selector  ```tag\class\id:hover{ }```

5. compound selector

## Properties

***properties**

1. color: red / rgba(255,78,0,0) / #333333
2. text-align : left/center/right/justify
3. font-size: 16px / 1em;
4. font-family: arial;

5. background-color: yellow / rgba / hexa-code;
6. border: 2px solid/dotted/dashed red;

7. width: 400px/50%;
8. height: 600px/30%;

9. list-style-type: none/circle/square;
10. list-style-image: url('img.png');

11. background-image: url(pic.gif);
12. background-repeat: no-repeat/repeat-x/repeat-y;
13. background-size: cover;
14. background-position: top right;
15. background-attachment: fixed/scroll;

16. text-decoration: none;

17. margin: 30px;(left/right/top/bottom) (space for outside the element);
18. shorthand property for margin: 0px 30px (top bottom);

19. padding: 30px; (space for inside the element);
20. padding: 0px 20px;(top bottom)

21. cursor: pointer
22. opacity: 0(totally transparent) / 1(not transparent);

23. float: left/right;
24. clear: left/right/both;
25. line-height: 80px;

### External CSS

* write css code in separate file and save it as .css extension

* write below code to add CSS to html file

```<link type="text/css" rel="stylesheet" href="style.css" >```

### Internal CSS

* we style directly in elements / tags.

```<h1 style="color: black; font-size: 2.5em; background:skyblue"></h1>```

## CSS3

### class selector

 The class selector is a way to select all of the elements with the specified class name, and apply styles to each of the matching elements. The selector must start with a period ( . ) and then the class name. The browser will look for all tags in the page that have a class attribute containing that class name.

* first we have to define class in tag ```<h1 class=".className"></h1>```

 ```classSelector
 .className{
     color:red;
 }
 ```

### CSS Layouts

#### 1.Normal Flow Layout

#### 2.The Display property Layout

The display property layouts are two types

1. Flexbox Layout
2. Grid Layout

#### 3. Float property Layout

#### 4. Positioning techniques

There are five types of positioning:

* **Static positioning** is the default that every element gets. It just means "put the element into its normal position in the document layout flow — nothing special to see here".

* **Relative positioning** allows you to modify an element's position on the page, moving it relative to its position in normal flow, as well as making it overlap other elements on the page.

* **Absolute positioning** moves an element completely out of the page's normal layout flow, like it's sitting on its own separate layer. From there, you can fix it to a position relative to the edges of the ```<html>``` element (or its nearest positioned ancestor element). This is useful for creating complex layout effects, such as tabbed boxes where different content panels sit on top of one another and are shown and hidden as desired, or information panels that sit off screen by default, but can be made to slide on screen using a control button.

* **Fixed positioning** is very similar to absolute positioning except that it fixes an element relative to the browser viewport, not another element. This is useful for creating effects such as a persistent navigation menu that always stays in the same place on the screen as the rest of the content scrolls.

* **Sticky positioning** is a newer positioning method that makes an element act like position: static until it hits a defined offset from the viewport, at which point it acts like position: fixed.

#### 5. Multiple column Layout

### Animation

* The animation property in CSS can be used to animate many other CSS properties such as color, background-color, height, or width. Each animation needs to be defined with the ```@keyframes``` at-rule which is then called with the animation property

 ***Sub-properties**

* animation-name: declares the name of the @keyframes at-rule to manipulate.

* animation-duration: the length of time it takes for an animation to complete one cycle.

* animation-timing-function: establishes preset acceleration curves such as ease or linear.

* animation-delay: the time between the element being loaded and the start of the animation sequence (cool examples).

* animation-direction: sets the direction of the animation after the cycle. Its default resets on each cycle.

* animation-iteration-count: the number of times the animation should be performed.

* animation-fill-mode: sets which values are applied before/after the animation.

For example, you can set the last state of the animation to remain on screen, or you can set it to switch back to before when the animation began.

* animation-play-state: pause/play the animation.

* ```animation: anime 2s;```

 ```animation
   @keyframes anime{
    from{
        width: 200px;
    }
    to{
        width: 500px;
    }
}```
