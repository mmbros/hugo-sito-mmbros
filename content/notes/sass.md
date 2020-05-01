+++
date = "2015-11-03T23:00:00+01:00"
lastmod = "2020-04-30T10:21:39+0200"
draft = true
title = "Sass"
subtitle = "Syntactically Awesome Style Sheets"
description = "Sass is a preprocessor scripting language that is compiled into Cascading Style Sheets (CSS)"
tags = ["web", "html", "css", "stylesheet"]
categories = "Dev"
+++

## Links

* [Sass](http://sass-lang.com/) is an extension of CSS3 which adds nested rules, variables, mixins, selector inheritance, and more. Sass generates well formatted CSS and makes your stylesheets easier to organize and maintain

* [The beginner’s guide to Sass](http://www.webdesignerdepot.com/2013/11/the-beginners-guide-to-sass/)

* [Breakpoint](http://breakpoint-sass.com/) Really Simple, Organized, Media Queries with Sass

* [Compass](http://compass-style.org/) is an open-source CSS Authoring Framework. Compass uses Sass (and Ruby)

* [How to write simple, elegant CSS with Compass & Sass](http://www.webdesignerdepot.com/2013/11/how-to-write-simple-elegant-css-with-compass-sass/)

* [Susy](http://susy.oddbird.net/) is an agnostic set of tools for creating powerful, custom layouts. We provide the language, but you provide all the opinions. Use a grid, don’t use a grid, or use a combination of grids — it’s all up to you. Your markup, your design, your opinions | our math

* [Getting Started with Susy](http://susydocs.oddbird.net/en/latest/install/)





## Sass Color Functions

[source](https://www.w3schools.com/sass/sass_functions_color.asp)

We have divided the color functions in Sass into three parts: Set color
functions, Get color functions, and Manipulate color functions:

### Sass Set Color Functions

<table class="functions">
<thead>
<tr>
<th>Function</th>
<th>Description & Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>rgb</strong>(<var>red</var>, <var>green</var>, <var>blue</var>)</td>
<td>
Sets a color using the <em>Red-Green-Blue (RGB) model</em>. An RGB color value
is specified with: rgb(<var>red</var>, <var>green</var>, <var>blue</var>). Each parameter defines the intensity
of that color and can be an integer between 0 and 255, or a percentage value
(from 0% to 100%).

<table class="examples">
<caption>Example</caption>
<tbody>
<tr><td>rgb(0, 0, 255);</td><td>rendered as blue because the blue parameter is set to its highest value (255) and the others are set to 0</td></tr>
</tbody>
</table>

</td>
</tr>

<tr>
<td><strong>rgba</strong>(<var>red</var>, <var>green</var>, <var>blue</var>, <var>alpha</var>)</td>
<td>
Sets a color using the <em>Red-Green-Blue-Alpha (RGBA) model</em>. RGBA color values are
an extension of RGB color values with an alpha channel - which specifies the
opacity of the color. The <var>alpha</var> parameter is a number between 0.0 (fully
transparent) and 1.0 (fully opaque).

<table class="examples">
<caption>Example</caption>
<tbody>
<tr><td>rgba(0, 0, 255, 0.3);</td><td>// rendered as blue with opacity</td></tr>
</tbody>
</table>

</td>
</tr>

<tr>
<td><strong>hsl</strong>(<var>hue</var>, <var>saturation</var>, <var>lightness</var>)</td>
<td>
Sets a color using the <em>Hue-Saturation-Lightness (HSL) model</em>- and represents a
cylindrical-coordinate representation of colors. <var>Hue</var> is a degree on the color
wheel (from 0 to 360) - 0 or 360 is red, 120 is green, 240 is blue. <var>Saturation</var>
is a percentage value; 0% means a shade of gray and 100% is the full color.
<var>Lightness</var> is also a percentage; 0% is black, 100% is white.

<table class="examples">
<caption>Examples</caption>
<tbody>
<tr><td>hsl(120, 100%, 50%);</td><td>// green</td></tr>
<tr><td>hsl(120, 100%, 75%);</td><td>// light green</td></tr>
<tr><td>hsl(120, 100%, 25%);</td><td>// dark green</td></tr>
<tr><td>hsl(120,  60%, 70%);</td><td>// pastel green</td></tr>
</tbody>
</table>

</td>
</tr>

<tr>
<td><strong>hsla</strong>(<var>hue</var>, <var>saturation</var>, <var>lightness</var>, <var>alpha</var>)</td>
<td>
Sets a color using the <em>Hue-Saturation-Lightness-Alpha (HSLA) model</em>. HSLA color
values are an extension of HSL color values with an alpha channel - which
specifies the opacity of the color. The <var>alpha</var> parameter is a number between 0.0
(fully transparent) and 1.0 (fully opaque).

<table class="examples">
<caption>Examples</caption>
<tbody>
<tr><td>hsl(120, 100%, 50%, 0.3);</td><td>// green with opacity</td></tr>
<tr><td>hsl(120, 100%, 75%, 0.3);</td><td>// light green with opacity</td></tr>
</tbody>
</table>


</td>
</tr>

<tr>
<td><strong>grayscale</strong>(<var>color</var>)</td>
<td>
Sets a gray color with the same lightness as color.

<table class="examples">
<caption>Example</caption>
<tbody>
<tr><td>grayscale(#7fffd4);</td><td>Result: #c6c6c6</td></tr>
</tbody>
</table>

</td>
</tr>

<tr>
<td><strong>complement</strong>(<var>color</var>)</td>
<td>
Sets a color that is the complementary color of color.

<table class="examples">
<caption>Example</caption>
<tbody>
<tr><td>complement(#7fffd4);</td><td>Result: #ff7faa</td></tr>
</tbody>
</table>

</td>
</tr>


<tr>
<td><strong>invert</strong>(<var>color</var>, <var>weight</var>)</td>
<td>
Sets a color that is the inverse or negative color of color. The weight
parameter is optional and must be a number between 0% and 100%. Default is 100%.

<table class="examples">
<caption>Example</caption>
<tbody>
<tr><td>invert(white);</td><td>Result: black</td></tr>
</tbody>
</table>

</td>
</tr>

</tbody>
</table>










### Sass Get Color Functions

#### red(color)
Returns the red value of color as a number between 0 and 255.


Example:
red(#7fffd4);
Result: 127
red(red);
Result: 255
#### green(color)
Returns the green value of color as a number between 0 and 255.

Example:
green(#7fffd4);
Result: 255
green(blue);
Result: 0

#### blue(color)
Returns the blue value of color as a number between 0 and 255.

Example:
blue(#7fffd4);
Result: 212
blue(blue);
Result: 255

#### hue(color)
Returns the hue of color as a number between 0deg and 255deg.

Example:
hue(#7fffd4);
Result: 160deg

#### saturation(color)
Returns the HSL saturation of color as a number between 0% and 100%.

Example:
saturation(#7fffd4);
Result: 100%

#### lightness(color)
Returns the HSL lightness of color as a number between 0% and 100%.


Example:
lightness(#7fffd4);
Result: 74.9%

#### alpha(color)
Returns the alpha channel of color as a number between 0 and 1.

Example:
alpha(#7fffd4);
Result: 1
#### opacity(color)
Returns the alpha channel of color as a number between 0 and 1.

Example:
opacity(rgba(127, 255, 212, 0.5);
Result: 0.5



### Sass Manipulate Color Functions

#### mix(color1, color2, weight)
Creates a color that is a mix of color1 and color2. The weight parameter must be
between 0% and 100%. A larger weight means that more of color1 should be used. A
smaller weight means that more of color2 should be used. Default is 50%.

#### adjust-hue(color, degrees)
Adjusts the color's hue with a degree from -360deg to 360deg.

Example:
adjust-hue(#7fffd4, 80deg);
Result: #8080ff

#### adjust-color(color, red, green, blue, hue, saturation, lightness, alpha)
Adjusts one or more parameters by the specified amount. This function adds or
subtracts the specified amount to/from the existing color value.

Example:
adjust-color(#7fffd4, blue: 25);
Result:

#### change-color(color, red, green, blue, hue, saturation, lightness, alpha) 
Sets one or more parameters of a color to new values.

Example:
change-color(#7fffd4, red: 255);
Result: #ffffd4

#### scale-color(color, red, green, blue,  saturation, lightness, alpha)
Scales one or more parameters of color.

#### rgba(color, alpha) 
Creates a new color of color with the given alpha channel.

Example:
rgba(#7fffd4, 30%);
Result: rgba(127, 255, 212, 0.3)

#### lighten(color, amount)
Creates a lighter color of color with an amount between 0% and 100%.
The amount parameter increases the HSL lightness by that percent.

#### darken(color, amount)
Creates a darker color of color with an amount between 0% and 100%.
The amount parameter decreases the HSL lightness by that percent.

#### saturate(color, amount) 
Creates a more saturated color of color with an amount between 0% and 100%.
The amount parameter increases the HSL saturation by that percent.

#### desaturate(color, amount) 
Creates a less saturated color of color with an amount between 0% and 100%.
The amount parameter decreases the HSL saturation by that percent.

#### opacify(color, amount) 
Creates a more opaque color of color with an amount between 0 and 1.
The amount parameter increases the alpha channel by that amount.

#### fade-in(color, amount) 
Creates a more opaque color of color with an amount between 0 and 1.
The amount parameter increases the alpha channel by that amount.

#### transparentize(color, amount) 
Creates a more transparent color of color with an amount between 0 and 1.
The amount parameter decreases the alpha channel by that amount.

#### fade-out(color, amount) 
Creates a more transparent color of color with an amount between 0 and 1.
The amount parameter decreases the alpha channel by that amount.

