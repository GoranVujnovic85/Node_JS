// Javascript program to count number of trees in a forest.
 
// This class represents a directed graph 
// using adjacency list representation 
var V; // No. of vertices 
 
// Array of lists for 
// Adjacency List Representation 
var adj; 
// Constructor 
function Graph( v) 
{ 
    V = v; 
    adj = Array.from(Array(v), ()=>Array());
} 
// Function to add an edge into the graph 
function addEdge(v, w) 
{ 
    adj[v].push(w); // Add w to v's list. 
} 
// A function used by DFS 
function DFSUtil(v, visited) 
{ 
    // Mark the current node as 
    // visited and print it 
    visited[v] = true; 
     
    // Recur for all the vertices 
    // adjacent to this vertex 
    for(var i of adj[v]) 
    { 
        var n = i; 
        if (!visited[n])
        {
            DFSUtil(n, visited); 
        }
    }
} 
// The function to do DFS traversal.
// It uses recursive DFSUtil() 
function countTrees()
{ 
    // Mark all the vertices as not visited
    // (set as false by default in java) 
    var visited = Array(V).fill(false); 
    var res = 0;
     
    // Call the recursive helper function 
    // to print DFS traversal starting from 
    // all vertices one by one 
    for(var i = 0; i < V; ++i) 
    {
        if (visited[i] == false)
        { 
            DFSUtil(i, visited); 
            res ++;
        }
    }
    return res;
} 
 
// Driver code
Graph(5); 
addEdge(0, 1); 
addEdge(0, 2); 
addEdge(3, 4); 
console.log(countTrees()); 