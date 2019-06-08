webpackJsonp([61],{83:function(n,r){n.exports="## Table\r\n\r\nTable for displaying two-dimensional data.\r\n\r\n## Usage\r\n\r\n```html\r\n<m-table id=\"myTable\"></m-table>\r\n\r\n<script>\r\n  const table = document.querySelector('#myTable')\r\n  table.checkbox = true\r\n  table.dataSource = [{\r\n    id: 1,\r\n    name: 'xwang',\r\n    age: 18,\r\n    address: 'Tencent'\r\n  }, {\r\n    id: 2,\r\n    name: 'dntzhang',\r\n    age: 12,\r\n    address: 'Tencent'\r\n  }, {\r\n    id: 3,\r\n    name: 'lucy',\r\n    age: 12,\r\n    address: 'Tencent'\r\n  }, {\r\n    id: 4,\r\n    name: 'john',\r\n    age: 12,\r\n    address: 'Tencent'\r\n  }, {\r\n    id: 5,\r\n    name: 'tim',\r\n    age: 12,\r\n    address: 'Tencent'\r\n  }]\r\n\r\n  table.columns = [{\r\n    title: 'Name',\r\n    key: 'name',\r\n  }, {\r\n    title: 'Age',\r\n    key: 'age',\r\n  }, {\r\n    title: 'Address',\r\n    key: 'address',\r\n  }, {\r\n    title: 'Actions',\r\n    render: (item) => (\r\n      Omi.html`<span>\r\n        <a href=\"javascript:;\" onClick=${e => {\r\n          table.dataSource.splice(table.dataSource.indexOf(item), 1)\r\n          table.update()\r\n        }}>Delete</a>\r\n      </span>`\r\n    )\r\n  }]\r\n\r\n  table.update()\r\n<\/script>\r\n```\r\n\r\n## Usage in Omi\r\n\r\n```jsx\r\n<m-table\r\n  checkbox\r\n  dataSource={this.dataSource}\r\n  columns={this.columns}>\r\n</m-table>\r\n```\r\n\r\n## API\r\n\r\n### Props\r\n\r\n```jsx\r\n{\r\n\tdataSource: any[],\r\n\tcolumns: any[],\r\n\tcheckbox?: boolean\r\n}\r\n```\r\n"}});
//# sourceMappingURL=61.2d876486.chunk.js.map