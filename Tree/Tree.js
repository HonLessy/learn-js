function BiNode(data,lchild,rchild) {
    this.data = data;
    this.lchild = lchild;
    this.rchild = rchild;
    this.show = show;
}

function show() {
    return this.data;
}

function BiTree() {
    this.root = null;
    this.insert = insert;
    this.inOrderTraverse = inOrderTraverse;
}

function insert(data) {
    var newNode = new BiNode(data,null,null);
    if(this.root == null) {
        //如果根结点为空则将该结点放进根结点
        this.root = newNode;
    }else {
        var current = this.root;
        var parent;
        while(current) {
            //当根结点不为空时
            parent = current;
            //如果传进来的数据比父节点小，则将其置为父节点的左孩子
            if(data <  current.data) {
                current = current.lchild;
                if(current == null) {
                    parent.lchild = newNode;
                    break;
                }
            }else {
                current = current.rchild;
                if(current == null) {
                    parent.rchild = newNode;
                    break;
                }
            }
        }
    }
}
//先序遍历
function preOrderTraverse(node){
    if(!(node === null)){
        console.log(node.show());
        preOrderTraverse(node.lchild);
        preOrderTraverse(node.rchild);
    }
};
// 中序遍历
function inOrderTraverse(node) {
    if(!(node == null)) {
        inOrderTraverse(node.lchild);
        console.log(node.show());
        inOrderTraverse(node.rchild);
    }
};
//后序遍历
function postOrderTraverse(node){
    if(!(node === null)){
        postOrderTraverse(node.lchild);
        postOrderTraverse(node.rchild);
        console.log(node.show());
    }
};
//查找最小值
function GetMin(T){
    var current = T.root;
    //因为较小的值总是在左子树上
    while(!(current.lchild === null)){
        current = current.lchild;
    }
    return current.data;
};
//查找最大值
function GetMax(T){
    var current = T.root;
    while(!(current.rchild === null)){
        current = current.rchild;
    }
    return current.data;
};
//查找给定值
function searchData(T,data){
    //先比较该值和当前结点的值的大小
    var current = T.root;
    while(!(current === null)){
        if(current.data === data){
            return current;
        }else if(data < current.lchild){
            current = current.lchild;
        }else{
            current = current.rchild;
        };
    }
    return null;
};
var T = new BiTree();
T.insert(23);
T.insert(45);
T.insert(16);
T.insert(37);
T.insert(3);
T.insert(99);
T.insert(22);
preOrderTraverse(T.root);
console.log("*****************************");
inOrderTraverse(T.root);
console.log("*****************************");
postOrderTraverse(T.root);
var min = GetMin(T);
console.log("******最小值*****************");
console.log(min);
var max = GetMax(T);
console.log("******最大值*****************");
console.log(max);
var DataNode = searchData(T,99);
console.log(DataNode);
console.log("*****************************");

