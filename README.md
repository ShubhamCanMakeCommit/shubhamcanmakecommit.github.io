# About
My personal portfolio site created using Jekyll

# Site stucture and constraints
## _config.yml
- This is the main settings file for this jekyll site
- The collections property contains the custom folders that we can create in jekyll. Eg. if we have the yml as below then we can have a `./_projects` folder which would be picked up by jekyll according to the settings. This is useful when we want to group certain content. Grouping can help to have the same layout, styles for the content.
  ```yml
  collections:
    projects:
      ...
  ```
- We can also specify defaults for jekyll to process some directories as we want. Eg. we can specify the layout and permalink default for a directory `./_directory-name` (the underscore `_` is essential) by follwing:
  ```yml
  defaults:
    - scope:
        path: _directory-name
      values:
        layout: _name-of-layout
  ```

### Content files
- It is necessary for content files to have front matter so that jekyll can process them or else they are not rendered.( front matter are three dashes followed by three dashes on another line as shown below)
  ```yml
  ---
  ---
  ```

### Styling - CSS and Sass files
- Jekyll by default processes the sass files in `_sass` folder.
- In the `./assets/styles` folder the css or sass files can be put which can be then linked inside of html files. Even if it is a sass file we can use `.css` extension
- In the sass folder each file(the file name matching to that of component name) is broken down into it's separate component which follows the BEM convention: `component-name__child-of-component--modifier`
Eg. There is a fancy slider component which is imported inside of the `_main.scss` file from `_fancy-slider.scss`.
- Styled components can be used by layouts, includes, pages etc.
- When a component is used in two places and needs to differ in one or two properties then we might add that property inside of `./sass/utility.scss` if that problem arises frequently or maybe create a class for that and add it to the class property after the component class as `component-class own-class`. The class styles might be included in a css file which needs to be attached to the html file.
- We can also leave making a component when we want to just apply a style for fonts, background etc. They are located inside of `./_sass/_default.scss` with their corresponding classes and variables. We can override the variables in a separate css files we just need to substitute our own values and then import `./_sass/_main.scss` as `@import 'main'` 

## _layouts
- Layout template the structure of a html page. 
- In jekyll there is a convention that other layout files inherit from the default layout(generally named as `default.html`) which I don't want to follow and is disallowed.

## _includes
- Includes contain the components which the layouts can use as building blocks to match their own needs like navbar, post, footer, sidebar.
- An include can't include another include but can include styles and other assets.





