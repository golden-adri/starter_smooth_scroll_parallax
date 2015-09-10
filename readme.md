# Starter kit with Gulp, Babel & Sass

Here is my starter with Gulp, babel, sass, and the vendors : tweenMax & jQuery.

Each tasks of Gulp are separate in the folder /js/gulp/tasks

The class Utils is useful for cross-browser utils.


## Installation
 
```
npm install
```

## Instructions

To add some dom object with parallax, add the class "move" to the object, and add the attribute data-speed with a value between 0 and 1 like this :
```
<div class="move" data-speed="0.3"></div>
```


To launch all the tasks for work (js with sourcemaps) launch :
```
gulp
```

To launch all the tasks for prod (js without sourcemaps & minify css) launch :
```
gulp prod
```

## Thanks

Thanks to <a target="_blank" href="https://github.com/nicolas-daniel">Nicolas Daniel</a> for his some tips.

## Version

1.0.0






