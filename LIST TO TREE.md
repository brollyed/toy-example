Given an input list of objects with this definition:

```
public class InputItem {
  public int ID { get; set; }
  public int ParentID { get; set; }
}
```

Write a function that converts the list of inputs into a tree, where each node in the tree has this definition:

```
public class TreeNode {
  public int ID { get; set; }
  public List<TreeNode> Children { get; set; }
}
```

e.g.
```
public static TreeNode ListToTree(List<InputItem> inputs) {
    ....
}
```

Example:
```
ID      Parent ID
-----------------
1       1                                        1
2       1                                       / \
3       1                                      2   3
4       2                                     / \   \
5       2                                    4   5   6
6       3
```