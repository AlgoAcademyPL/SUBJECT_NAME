---
section: Section!
title: Title!
---



# h1 Heading 8-) 
text text text texttext text text texttext text text texttext text text text
text text text texttext text text texttext text text texttext text text text
text text text texttext text text texttext text text texttext text text text
text text text texttext text text texttext text text texttext text text text
## h2 Heading
text text text texttext text text texttext text text texttext text text text
text text text texttext text text texttext text text texttext text text text
text text text texttext text text texttext text text texttext text text text 
### h3 Heading
text text text texttext text text texttext text text texttext text text text
text text text texttext text text texttext text text texttext text text text
text text text texttext text text texttext text text texttext text text text 
#### h4 Heading
text text text texttext text text texttext text text texttext text text text
text text text texttext text text texttext text text texttext text text text 
##### h5 Heading
text text text texttext text text texttext text text texttext text text text
text text text texttext text text texttext text text texttext text text text 
###### h6 Heading

text text text texttext text text texttext text text texttext text text text
text text text texttext text text texttext text text texttext text text text 

## Emphasis

**This is bold text** __This is bold text__

*This is italic text* _This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes are rendered like this
> text tex ttex t tex tt ex t text


## Lists

Unordered

+ Create a list
+ Sub-lists are made by indenting 2 spaces:
    - Marker character change forces new list start:
        * Ac tristique libero volutpat at
        + Facilisis in pretium nisl aliquet
        - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar


## Code

Inline `code`

Block code "fences"

```
Sample text here...
```

Syntax highlighting

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[LINK ZEWNENTRZNY](http://algo.academy) OUTSIDE =>

[LINK WEWNENTRZNY](#h2-heading) TO h3 <= 

[LINK WEWNENTRZNY](../api/basic) To Api basicsf <= 
 

## Footnie 


You can check the definiition of first here[^first].

You can check the definiition of second here[^second].


[^first]: ==This is the first definition.== They allways will be at the end

[^second]: ==This is the second definition.== They allways will be at the end

wef

# Custom

## Images
<img float='left' width='100' src="https://octodex.github.com/images/stormtroopocat.jpg">
<img float='right' width='100'  src="https://octodex.github.com/images/stormtroopocat.jpg">
images can be combined with text easely.images can be combined with text easely.images can be combined with text easely.
images can be combined with text easely.images can be combined with text easely.
images can be combined with text easely.images can be combined with text easely.images can be combined with text easely.
images can be combined with text easely.images can be combined with text easely.
images can be combined with text easely.

But not all of them will combine the same.
<img width='200' title="example of image in center" src="https://octodex.github.com/images/stormtroopocat.jpg">

## Components 

<Info title="To warto wiedzieć!">
Finaliści olimpiady są przyjmowani do wybranych przez siebie szkół ponad podstawowych w całym kraju z pominięciem standardowego procesu rekrutacji. Dodatkowo otrzymują ocenę celującą na koniec roku z informatyki.'
</Info>

<Warning title="Musisz się o tym dowiedziec wiedzieć!">
Finaliści olimpiady są przyjmowani do wybranych przez siebie szkół ponad podstawowych w całym kraju z pominięciem standardowego procesu rekrutacji. Dodatkowo otrzymują ocenę celującą na koniec roku z informatyki.
</Warning>

Nested components

<Warning title="Musisz się o tym dowiedziec wiedzieć!">

<Warning title="Musisz się o tym dowiedziec wiedzieć!">
Finaliści olimpiady są przyjmowani do wybranych przez siebie szkół ponad podstawowych w całym kraju z pominięciem standardowego procesu rekrutacji. Dodatkowo otrzymują ocenę celującą na koniec roku z informatyki.
</Warning>

<Warning title="Musisz się o tym dowiedziec wiedzieć!">
Finaliści olimpiady są przyjmowani do wybranych przez siebie szkół ponad podstawowych w całym kraju z pominięciem standardowego procesu rekrutacji. Dodatkowo otrzymują ocenę celującą na koniec roku z informatyki.
</Warning>

</Warning>

## Video 
Youtube starts at 35 seconds ends at 37 and has no adds
<YouTube title="our new video" linkOrId='m8VSYcLqaLQ' startSeconds='29' endSeconds='44' />


# And What about math ???

You cant display Latex in markdown arent you..? It would be so nice to <Latex text='Know what is $(3\times 4) \div (5-3)$'/>

or to simply understand
<BigLatex title="Waht does it means?" text="$\frac{\partial V}{\partial t} + \frac{1}{2} \sigma^2 S^2 \frac{\partial^2 V}{\partial S^2} + rS\frac{\partial V}{\partial S} - rV = 0$">

Oh, you actually can!


## Definitions 
