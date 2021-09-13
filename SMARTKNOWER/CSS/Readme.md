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

4. pseudo selector

5. compound selector

## Properties

```properties
1.color: red / rgba(255,78,0,0) / #333333
2.text-align : left/center/right/justify
3.font-size: 16px / 1em;
4.font-family: arial;

5.background-color: yellow / rgba / hexa-code
6.list-style-type: none/circle/square
7.list-style-image: url('img.png')
```

### External CSS

* write css code in separate file and save it as .css extension

* write below code to add CSS to html file

```<link type="text/css" rel="stylesheet" href="style.css" >```

### Internal CSS

* we style directly in elements / tags.

```<h1 style="color: black; font-size: 2.5em; background:skyblue"></h1>```
