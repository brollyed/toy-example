Given an input list of objects with the following properties:

```
ListNode
--------
  ID: int
  ParentID: int
```

Write a function that converts the list into a tree, where each node in the tree has the following properties:

```
TreeNode
--------
  ID: int
  Children: TreeNode[] (or List<TreeNode>)
``` 
  
e.g.
```
public static TreeNode ListToTree(List<ListNode> input) {
    ....
}
```





Example:
```
ID      Parent ID
-----------------
1       1
2       1
3       1
4       2
5       2
6       3
```
Would produce a tree like this:
```
          1
         / \
        2   3
       / \  |
      4   5 6
```