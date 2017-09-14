# 树
### 定义：树（Tree）是$n(n\ge0) $个结点的有限集。在任意一颗非空树中：（1）有且仅有一个特定的称为根（Root）的结点；（2）当$n>1$时，其余结点可分为$m(m>0)$个互不相交的有限集$T_1,T_2,...,T_m$,其中每一个集合本身又是一棵树，并且称为根的子树（SubTree）。
### 数的结点包含一个数据元素及若干指向其子树的分支。节点拥有的子树数称为结点的度。度为0的结点称为叶子或终端结点。度不为0的结点称为非终端结点或分支结点。除根结点外，分支节点也称为内部结点。树的度是树内各结点的度的最大值。结点的子树的根称为该结点的孩子，相应的，该结点称为孩子的双亲。
### 结点的层次从根开始定义起，根为第一层，根的孩子为第二层。如果将树中结点的各子树看成从左至右是有次序的，则称该树为有序树，否则称为无序树。
# 二叉树
### 二叉树是另一种树形结构，他的特点是每个结点之多只有两颗子树（即二叉树中不存在度大于2的结点），并且，二叉树的子树有左右之分，其次序不能任意颠倒。
### 二叉树具有以下几个重要特性
> 性质1 在二叉树的第$i$层上至多有$2^{i-1}$个结点（$i\ge1$）
> 性质2 深度为$k$的二叉树至多有$2^k-1$个结点（$k\ge1$）
> 性质3 对任何一棵二叉树T，如果其终端结点数为$n_0$,度为2的结点数为$n_2$，则$n_0=n_2+1$  
> 性质4 具有$n$个结点的完全二叉树的深度为$\lfloor log_{2}n \rfloor+1$
> 性质5 如果对一棵有$n$个结点的完全二叉树（其深度为$\lfloor log_{2}n \rfloor+1$）的结点按层序编号（从第1层到第$\lfloor log_{2}n \rfloor+1$层，每层从左到右），则对任意结点$i(1\le i \le n)$有：
> - (1)如果$i=1$,则结点$i$是二叉树的根，无双亲；如果$i>1$，则其双亲PARENT($i$)是结点$\lfloor i/2 \rfloor$
> - (2)如果$2i>n$，则结点$i$无左孩子(结点$i$为叶子结点)；否则其做孩子LCHILD($i$)是结点$2i$
> - (3)如果$2i+1 > n$,则结点$i$无右孩子；否则其右孩子RCHILD($i$)是结点$2i+1$
### 二叉树的实现
```
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
        this.root = newNode;
    }else {
        var current = this.root;
        var parent;
        while(current) {
            parent = current;
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
```
### 遍历二叉树和线索二叉树
#### **遍历二叉树**
##### 在二叉树的一些应用中，常常要求在树中查找具有某种特征的结点，或者对树中全部结点逐一进行某种处理。这就提出了一个遍历二叉树的问题，即如何按照某条搜索路径寻访树中每个结点，使得每个结点均被访问一次，而且仅被访问一次。
##### 基于二叉树的递归定义，可得下属遍历二叉树的递归算法定义：
- ##### **先序遍历二叉树的操作定义为**：
    若二叉树为空，则空操作，否则：
    1. 访问根结点
    2. 先序遍历左子树
    3. 先序遍历右子树
- ##### **中序遍历二叉树的操作定义为**：
    若二叉树为空，则空操作，否则：
    1. 中序遍历左子树
    2. 访问根结点
    3. 中序遍历右子树
- ##### **后序遍历二叉树的操作定义为**：
    若二叉树为空，则空操作，否则：
    1. 后序遍历左子树
    2. 后序遍历右子树
    3. 访问根结点
##### 遍历实现
```
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
```