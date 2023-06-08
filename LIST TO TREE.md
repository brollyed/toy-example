Given these 2 class definitions:
```
public class InputItem {
  public int ID { get; set; }
  public int ParentID { get; set; }
}

public class TreeNode {
  public int ID { get; set; }
  public List<TreeNode> Children { get; set; }
}
```

Write a function that converts the list of inputs into a tree
e.g.
```
public static TreeNode ListToTree(List<InputItem> inputs) {
    ....
}
```

Example:
```
Input                                         Output
ID      Parent ID
-----------------
1       1                                        1
2       1                                       / \
3       1                                      2   3
4       2                                     / \   \
5       2                                    4   5   6
6       3
```