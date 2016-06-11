import Monkberry from 'monkberry';
import 'monkberry-events';
import { Compiler } from 'monkberry/lib/index';
import convert from 'convert-source-map';

window.Monkberry = Monkberry;
Monkberry.reqister = register;
Monkberry.compile = compile;
Monkberry.getView = getView;

const compiler = new Compiler({asModule: false});
let views = {};

function compile(name, template) {
  let sourceNode = compiler.compile(name, template);
  let output = sourceNode.toStringWithSourceMap();

  output.map.setSourceContent(name, template);

  let map = convert.fromJSON(output.map.toString());
  let code = output.code + '\n' + map.toComment();

  // ʕ•ᴥ•ʔ
  eval(code);
}

function register() {
  // Compile scripts.
  let nodes = document.querySelectorAll('script[type="text/monkberry"]');
  for (let i = 0; i < nodes.length; i++) {
    compile(nodes[i].id, nodes[i].textContent);
  }

  // Compile nodes.
  nodes = document.querySelectorAll('[data-monkberry]');
  for (let i = 0; i < nodes.length; i++) {
    let name = nodes[i].getAttribute('data-monkberry');

    // Compile node content.
    compile(name, nodes[i].innerHTML);

    // Update node.
    nodes[i].textContent = '';
    nodes[i].removeAttribute('data-monkberry');
    nodes[i].setAttribute('data-monkberry-loaded', name);

    // Replace node content with rendered app.
    views[name] = Monkberry.render(window[name], nodes[i]);
  }
}

function getView(name) {
  return views[name];
}

function load() {
  if (document.readyState == 'complete' || document.readyState == 'interactive') {
    register();
  }
}

// Start.
document.addEventListener('DOMContentLoaded', load);
load();