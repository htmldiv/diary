# JavaScript中的数组去重


## 方法一：利用ES6的新增数据类型 Set
```
Set类似于数组，但是成员的值都是唯一的，没有重复的值。
例如有一个数组
arry = [1, 2, 3, 5, 3, 1]
```
```javascript
    function uniq() {
        return [...new Set(arry)]
    }
    // 或者
     function uniq() {
        return Array.from(new Set(arry))
    }
    /**
     * 上面两种方法 其中 ...  是扩展运算符(对象展开符)， 可以把数组和类数组，对象，字符串等等直接展开
     * 
     * 第二种方法 from 方法的作用，就是可以把类数组对象、可迭代对象转化为数组。
     * **/
```

----

## 方法二：利用indexOf

```javascript

    function uniq(arry) {
        var result = [];
        for (var i = 0; i < arry.length; i++) {
            if (result.indexOf(arry[i]) === -1) {
                //如 result 中没有 arry[i],则添加到数组中
                result.push(arry[i])
            }
        }
        return result;
    }

```

---

## 方法三：利用 includes

- 该方法和indexOf类似

```javascript
function uniq(arry) {
    var result = [];
    for (var i = 0; i < arry.length; i++) {
        if (!result.includes(arry[i])) {
            //如 result 中没有 arry[i],则添加到数组中
            result.push(arry[i])
        }
    }
    return result;
}
```
---

## 方法四：利用 reduce

```javascript
// reduce 的用法

arr.reduce(function(prev,cur,index,arr) {
    ...
}, init)

// 或者
arr.reduce(function(prev,cur,index,arr){
...
},);

/**
 * arr 表示将要原数组；
    prev 表示上一次调用回调时的返回值，或者初始值 init;
    cur 表示当前正在处理的数组元素；
    index 表示当前正在处理的数组元素的索引，若提供 init 值，则索引为0，否则索引为1；
    init 表示初始值。

    常用的参数只有两个：prev 和 cur。
 * **/

// 数组求和，求乘积

var arr = [1, 2, 3, 4];
var sum = arr.reduce((x, y) => x+y)
var mul = arr.reduce((x, y) => x*y)

console.log(sum);   // 求和 10
console.log(mul);   // 求乘积 24
```

```javascript

    function uniq(arry) {
        return arry.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur], []);
    }
```
---

## 方法五：利用Map

```javascript
function uniq(arry) {
    let map = new Map();
    let result = new Array();
    for (let i = 0; i < arry.length; i++) {
        if (map.has(arry[i])) {
            map.set(arry[i], true);
        } else {
            map.set(arry[i], false);
            result.push(arry[i]);
        }
    }
    return result;
}

