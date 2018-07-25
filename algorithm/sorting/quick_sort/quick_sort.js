exports. qsort=(arr)=>{
    let r = arr.length -1;
    qs(arr,0,r);
};
//我的实现
function qs(arr,left,right){
    if(left>=right) return;
    let x =  arr[right];//参考值
    let l = left,r = right;
    while(l<r){
        while(l<r && arr[l]<x) l++;
        while(l<r && arr[r]>=x)r--;//这里 arr[r]>=x x如果换成arr[l] 交换次数可能会多一些，但更容易理解 （1）
        if(l<r) swap(arr,l,r);
    }// l===r 时跳出循环 此时arr[l] === x
    swap(arr,l,right);//将x归位，归位后，x左边全部小于x，右边不小于x；如果（1），则这一步可以省略
    qs(arr,left,l-1);
    qs(arr,l+1,right);
}
// /* 算法导论上的思路用js实现
function qs2(arr,l,r){
    if(l>=r) return;
    let m = partition(arr,l,r);
    qs2(arr,l,m-1);
    qs2(arr,m+1,r);
}
function partition(arr,l,r){
    let x = arr[r];
    let i = l-1;
    for(let j=l; j<r; j++){
        if(arr[j]<=x){
            i+=1;
            swap(arr,i,j);
        }
    }
    swap(arr,i+1,r);
    return i+1;
}
//*/
function swap(arr,l,r){
    let tmp = arr[l];
    arr[l] = arr[r];
    arr[r] = tmp;
}

// var a =  [1,5,3,7,2,34,2,64,34,2];
// qsort(a);
// console.log(a.toString());