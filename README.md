# Monkberry Standalone
Standalone build of Monkberry for use in browsers.

## CDN

```
https://cdn.jsdelivr.net/monkberry-standalone/latest/monkberry.min.js
```
[other versions on jsDelivr](https://www.jsdelivr.com/projects/monkberry-standalone)

## Usage

Include it to your page.

```html
<script src="https://cdn.jsdelivr.net/monkberry-standalone/latest/monkberry.min.js"></script>
```

Define template with `text/monkberry`.

```html
<script type="text/monkberry" id="component">
    <h1>
        Hello, {{ name }}!
    </h1>
</script>
```

And you now can get access to `component` template.

```js
var view = Monkberry.render(component, document.body);
```

Mark node with `data-monkberry` attribule and it will be replaced with real view of Monkberry.

```html
<div data-monkberry="app">
    <component name="world"></component>
    <p>This is {{ name || 'noname' }}.</p>
</div>
```

To get view instanse call `Monkberry.getView` method.

```js
  var view = Monkberry.getView('app');
  view.update({name: 'Anton'});
```

Also with monkberry-standalone you can compile source code to JavaScript code.

```js
var code = '<div>{{ text }}</div>';
var source = Monkberry.compile('name', code);
```

