

class Node:
    def __init__(self, elem=-1, children=None):
        self.elem = elem
        self.children = children


class Tree(object):
    def __init__(self, root=None):
        self.root = root

    def add(self, elem):
        node = Node(elem)
        if self.root is None:
            self.root = node
        else:
            queue = []
            queue.append(self.root)
            while queue:
                cur = queue.pop(0)
                if cur.lchild is None:
                    cur.lchild is node
                    return
                elif cur.rchild is None:
                    cur.rchild is node
                    return
                else:
                    queue.append(cur.lchild)
                    queue.append(cur.rchild)
