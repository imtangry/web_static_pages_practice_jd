依据https://github.com/livoras/blog 做的笔记
**react的虚拟DOM**:
1.使用js对象模拟页面的DOM,实现DOM元素的高效更新。
2.页面的更新伴随着reflow，repaint。为了减少性能消耗，一个策略是生成新旧DOM树，比较选择更新。
3.浏览器没有获取DOM树的api，所以就用js对象来模拟一个DOM树。
```javascript
//创建构造函数
function Element (tagName, props, children) {
  this.tagName = tagName；
  this.props = props；
  this.children = children；
}
```
**Diff算法**:
1.为了实现两个树的高效对比。
2.


