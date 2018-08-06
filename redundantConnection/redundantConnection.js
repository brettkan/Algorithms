/*

In this problem, a tree is an undirected graph that is connected and has no cycles.

The given input is a graph that started as a tree with N nodes (with distinct values 1, 2, ..., N),
with one additional edge added. The added edge has two different vertices chosen from 1 to N, and was
not an edge that already existed.

The resulting graph is given as a 2D-array of edges. Each element of edges is a pair [u, v] with u < v,
that represents an undirected edge connecting nodes u and v.

Return an edge that can be removed so that the resulting graph is a tree of N nodes. If there are multiple
answers, return the answer that occurs last in the given 2D-array. The answer edge [u, v] should be in the
same format, with u < v.

Example 1:
Input: [[1,2], [1,3], [2,3]]
Output: [2,3]
Explanation: The given undirected graph will be like this:
  1
 / \
2 - 3

Example 2:
Input: [[1,2], [2,3], [3,4], [1,4], [1,5]]
Output: [1,4]
Explanation: The given undirected graph will be like this:
5 - 1 - 2
    |   |
    4 - 3

Note:
The size of the input 2D-array will be between 3 and 1000.
Every integer represented in the 2D-array will be between 1 and N, where N is the size of the input array.

*/


/**
 * @param {number[][]} edges
 * @return {number[]}
 */
function findRedundantConnection(edges) {
    const graph = new Map()
    const redundantEdges = []

    function dfs(target, current, seen = new Set()) {
       if (current === target) {
           return true
       } else {
           seen.add(current)
       }

       for (let edge of graph.get(current)) {
           // Don't recurse if we have already checked this number
           if (seen.has(edge)) {
               continue
           }

           if (dfs(target, edge, seen)) {
               return true
           }
       }

       return false
    }

    edges.forEach(edge => {
        if (graph.get(edge[0]) && graph.get(edge[1]) && dfs(edge[0], edge[1])) {
            redundantEdges.push(edge)
        }

        graph.set(edge[0], graph.get(edge[0]) || new Set())
        graph.set(edge[1], graph.get(edge[1]) || new Set())

        graph.get(edge[0]).add(edge[1])
        graph.get(edge[1]).add(edge[0])
    })

    return redundantEdges[redundantEdges.length - 1]
}


/**
 * OLD SOLUTION
 * 
function findRedundantConnection(edges) {
    const tree = new Tree(edges)
    return tree.redundantEdges[tree.redundantEdges.length - 1]
}

class Tree {
    constructor(edges) {
        this.nodes = new Map()
        this.redundantEdges = []

        edges.forEach(edge => {
            const firstNode = this.nodes.has(edge[0]) ? this.nodes.get(edge[0]) : new TreeNode(edge[0])
            const secondNode = this.nodes.has(edge[1]) ? this.nodes.get(edge[1]) : new TreeNode(edge[1])

            // check to see if both edges have another connection
            if (firstNode.edges.size && secondNode.edges.size && firstNode.hasConnection(edge[1])) {
                this.redundantEdges.push(edge)
            }

            // Add second node as edge to first node
            firstNode.addEdge(secondNode)
            this.nodes.set(edge[0], firstNode)

            // Add first node as edge to second node
            secondNode.addEdge(firstNode)
            this.nodes.set(edge[1], secondNode)
        })
    }

}

class TreeNode {
    constructor(val) {
        this.val = val
        this.edges = new Set()
    }

    addEdge(edge) {
        this.edges.add(edge)
        return this
    }

    hasConnection(searchVal, alreadyChecked = new Set()) {
        if (this.val === searchVal) {
            return true
        } else {
            alreadyChecked.add(this.val)
        }

        for (let edge of this.edges) {
            // Don't recurse if we have already checked this number
            if (alreadyChecked.has(edge.val)) {
                continue
            }

            if (edge.hasConnection(searchVal, alreadyChecked)) {
                return true
            }
        }

        return false
    }
}

*/


/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

console.log(findRedundantConnection([[1,2], [1,3], [2,3]]))
console.log(findRedundantConnection([[1,2], [2,3], [3,4], [1,4], [1,5]]))
