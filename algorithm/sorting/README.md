# 排序
几乎每个人接触到编程的第一个程序都是从hello world开始。
但是只有掌握了一种排序算法后，编程大门才算真正打开。

js中，原生Array对象中的sort方法，经过底层优化([array源码](https://github.com/v8/v8/blob/ad82a40509c5b5b4680d4299c8f08d6c6d31af3c/src/js/array.js))后，速度很快，一般情况下是够用的，但是这并不能阻止我们了解各种排序算法的实现。

[快速了解js各种排序方法与sort的对比](https://blog.csdn.net/qq_30100043/article/details/72763614)

### 快速排序
第二喜欢的排序算法。[我的实现](./quick_sort\quick_sort.js)中
```
while(l<r){
        while(l<r && arr[l]<x) l++;
        while(l<r && arr[r]>=x)r--;
        if(l<r) swap(arr,l,r);
    }
    swap(arr,l,right);
```
也可以写成
```
while(l<r){
        while(l<r && arr[l]<x) l++;
        while(l<r && arr[r]>=arr[l])r--;
        if(l<r) swap(arr,l,r);
    }
```
两种实现方式中，第二种可能更好理解一点，虽然实际交换次数可能更多一些。
另外，相比于算法导论中的实现方式，这两种写法的交换动画更有趣一些（如果你能脑补出来的话）。
比如这样的：

![算法导论实现方式](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

