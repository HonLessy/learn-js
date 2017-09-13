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
function BiNode(data,lchild,rchild){
    this.data = data;
    this.lchild = lchild;
    this.rchild = rchild;
    this.show = show;
    function show(){
        return this.data;
    };
};
function BiTree(){
    this.root = null;
};
BiTree.prototype = {
    insert:function(data){
        var newNode = new BiNode(data,null,null);
        //判断是否存在根结点，没有将新结点插入
        if(this.root === null){
            this.root = newNode;
        }else{
            //查找根结点
            var current = this.root;
            var parent;
            while(true){
                //将当前结点保存为父节点
                parent = current;
                //将小的结点放在左边
                if(data < current.data){
                    //获取当前结点的左结点
                    currrent = current.lchild;
                    //判断当前结点的左结点是否有数据
                    if(currrent === null){
                        //若没有数据将新结点存入当前结点的左结点
                        parent.lchild = newNode;
                        break;
                    }
                }else{
                    current = current.rchild;
                    if(current === null){
                        //若没有数据将新结点存入当前结点的左结点
                        parent.rchild = newNode;
                        break;
                    }
                }
            }
        }
    },
    searchNode:function(data){
        var current = this.root;
        while(current !== null){
            if(data === current.data){
                return current;
            }else if(data < current.data){
                current = current.lchild;
            }else{
                current = current.rchild;
            }
        }
        return null;
    },
    preOrderTraverse:function(node){
        var data = [];
        _preOrder(node,data);
        console.log(data);
        return data;
    },
};
function _preOrder(node,data){
    if(!(node == null)){
      data.push(node.show());
      _preOrder(node.left,data);
      _preOrder(node.right,data);
    }
};

var T = new BiTree();
T.insert('A');
T.insert('B');
T.insert('C');
T.preOrderTraverse();

```