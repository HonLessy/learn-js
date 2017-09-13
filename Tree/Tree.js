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
