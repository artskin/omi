webpackJsonp([24],{120:function(n,r){n.exports="## Nav\r\n\r\n\u5bfc\u822a\u7684\u83dc\u5355\u5217\u8868\u3002\r\n\r\n## \u4f7f\u7528\r\n\r\n```html\r\n<m-nav id='myNav' nodes=\"[{\r\n  title: 'p-0',\r\n  id: 1,\r\n  icon: 'account_balance_wallet',\r\n  children: [\r\n    {\r\n      title: 'p-1',\r\n      id: 2,\r\n      icon: 'assignment_ind',\r\n      children: [\r\n        { title: 'p-2', id: 3, icon: 'chrome_reader_mode', checked: true },\r\n        { title: 'p-2.5', id: 13, icon: 'chrome_reader_mode' }\r\n      ]\r\n    },\r\n    {\r\n      title: 'p-4',\r\n      id: 4,\r\n      icon: 'extension',\r\n\r\n      children: [\r\n        {\r\n          title: 'p-5', id: 5, selected: true, icon: 'dashboard', checked: true,\r\n          disabled: true\r\n        },\r\n        { title: '\u9879\u76ee\u516d', id: 6, icon: 'favorite' },\r\n        { title: '\u9879\u76ee7', id: 7 }\r\n      ]\r\n    }\r\n  ]\r\n},\r\n{\r\n  title: 'p-11',\r\n  id: 14,\r\n  icon: 'group_work',\r\n\r\n  children: [\r\n    {\r\n      title: 'p-12', id: 12, icon: 'fingerprint', checked: true\r\n    }\r\n  ]\r\n}]\">\r\n</m-nav>\r\n```\r\n\r\n## Javascript\r\n\r\n```js\r\nvar myNav = document.querySelector('#myNav')\r\nvar nodeData = myNav.props.nodes\r\n\r\nmyNav.addEventListener('toggle', (evt) => {\r\n  const node = getNodeById(evt.detail.id, nodeData)\r\n  node.close = !node.close\r\n  myNav.setAttribute('nodes', nodeData)\r\n})\r\n\r\nmyNav.addEventListener('nodeclick', (evt) => {\r\n  const pre = getNodeById(evt.detail.pre, nodeData)\r\n  pre.selected = false\r\n  const node = getNodeById(evt.detail.id, nodeData)\r\n  node.selected = true\r\n  myNav.setAttribute('nodes', nodeData)\r\n})\r\n\r\nfunction getNodeById(id, nodes) {\r\n  for (let i = 0, len = nodes.length; i < len; i++) {\r\n    let child = nodes[i]\r\n    let target = this._getNodeById(id, child)\r\n    if (target) {\r\n      return target\r\n    }\r\n  }\r\n}\r\n\r\nfunction _getNodeById(id, node) {\r\n  if (node.id === id) return node\r\n  if (node.children) {\r\n    for (let i = 0, len = node.children.length; i < len; i++) {\r\n      let child = node.children[i]\r\n      let target = _getNodeById(id, child)\r\n      if (target) {\r\n        return target\r\n      }\r\n    }\r\n  }\r\n}\r\n```\r\n\r\n## API\r\n\r\n### Props\r\n\r\n```jsx\r\n{\r\n\tnodes: obj\r\n}\r\n```\r\n\r\n### Event\r\n\r\n```jsx\r\n{\r\n\ttoggle: function, \r\n\tnodeclick: function\r\n}\r\n```\r\n"}});
//# sourceMappingURL=24.706c2571.chunk.js.map