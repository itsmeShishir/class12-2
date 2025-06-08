# CSS 
 Cascading Style sheet -> it help us to define the style how the page will looks 
 -> HTML -> CSS 

## Why, When,  to use css, 
<!--<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body >
    <h1 style="text-align: center;">HEllo world</h1>
    <a href="#" style="display: block;">Link</a>
    <a href="#">Link2</a>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi eos repudiandae molestiae facere? In architecto sapiente, rerum nostrum assumenda odit!</p>
</body>
</html> -->

## where to use  -> html and css

## When to use
 h1 to h6, p, pre, div, a, section, article, header, footer, main, aside-> elements
 .navbar, .june, .meg -> class 
 #id, #navbar, #june, #meg -> id

## how to use css
 - inline css
   <!-- <h1 style="text-align: center;">HEllo world</h1>
    <a href="#" style="display: block; background-color: red;">Link</a> 
   -->
 - internal css
    <!-- <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            p{
            background-color: yellow;  
            font-size: 30px;
            }
        </style>
    </head>
    <body >
        <h1 style="text-align: center;">HEllo world</h1>
        <a href="#" style="display: block; background-color: red;">Link</a>
        <a href="#">Link2</a>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi eos repudiandae   molestiae facere? In architecto sapiente, rerum nostrum assumenda odit!</p>
    </body>
    </html> -->
    
 - external css
    - make a external file with the .css extension (filename.css)
    - in html <link rel="stylesheet" href="filename.css" >
    - example
      <!-- <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>External css</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body >
            <a href="#" style="display: block; background-color: red;">Link</a>
            <a href="#" class="saugat">Link2</a>
        </body>
        </html> -->

    - externalfile css example
      <!--  .saugat{
            background-color: purple;
        } -->

## how to write the css 
<!-- .saugat{
    background-color: purple;
    font-size: 40px;
}
.saugat -> selector
background-color -> propetie 
:40px , purple -> values,
; -> next line can also write the css code  -->

## How to write the css comment in css file
 - /* this 
    is 
    a multi 
    line
    comment 
   */

## Limitations of the 3 types of selector in css
 - inline -> works for the single line only 
 - internal css -> Priority tara single page ko lagi matra css 
 - external css -> so only works if the name is unique and have the same properties 

## selectors in css
 - * -> this is a univeral selector
 - # -> id selectors
 - . -> class selectors
 - h1 -> elements selectors
 - h1, h2, h3 -> group selector
  
## Priority in css 
 - inline css 
 - internal css
 - external
   - id selctor
   - class selector
   - element selector
   - group selector 
   - universal selector
  
# Color , font , box model -> 