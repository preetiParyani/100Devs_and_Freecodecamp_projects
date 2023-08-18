class WeightedGraph {
  constructor() {
    this.nodes = new Set(); //set doesn't allow duplicates so the problem of duplicate nodes wouldn't be there.
    this.edges = new Map(); //map stores in key: value pair, so the key is the node and value is the list of nodes connected to that node.
  }
  //addNode wouldn't be called directly but in the addEdge.
  addNode(node) {
    this.nodes.add(node); //this will add the node to the nodes property
    this.edges[node] = new Map(); //node parameter is the name of the node that we want to access the edges property of.
  }

  addEdge(node1, node2, weight) {
    if (!this.nodes.has(node1)) {
      this.addNode(node1);
    }
    if (!this.nodes.has(node2)) {
      this.addNode(node2);
    }
    this.edges[node1][node2] = weight; //its a undirected graph so the distance/weight between the 2 nodes will be the same.
    this.edges[node2][node1] = weight;
  }

  dijkstra(graph, source) {
    const visitedNodes = new Set(); //VisitedNodes set will keep track of the nodes that have been processed.

    // Create a map to keep track of the shortest distance to each node.
    const distances = new Map();
    for (let i = 0; i < graph.nodes; i++) {
      distances[i] = Infinity;
      Is.visitedNodes[i] = false;
    }

    // Set the distance to the source node to 0.
    distances.set(source, 0);

    // Find shortest path for all vertices
    for (let count = 0; count < graph.nodes - 1; count++) {
      // Pick the minimum distance vertex
      // from the set of vertices not yet
      // processed. u is always equal to
      // src in first iteration.
      let u = this.minDistance(distances, visitedNodes);

      // Mark the picked vertex as processed
      visitedNodes[u] = true;

      // Update distance value of the adjacent
      // vertices of the picked vertex.
      for (let v = 0; v < graph.nodes; v++) {
        // Update distance[v] only if is not in
        // visitedNodes, there is an edge from u
        // to v, and total weight of path
        // from src to v through u is smaller
        // than current value of distance[v]
        if (
          !visitedNodes[v] &&
          graph[u][v] != 0 &&
          distances[u] != Infinity &&
          distances[u] + graph[u][v] < distances[v]
        ) {
          distances[v] = distances[u] + graph[u][v];
        }
      }

      // Return the map of distances.
      return distances;
    }
  }
}

const graph = new WeightedGraph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addEdge("A", "B", 10);
graph.addEdge("A", "C", 25);
graph.addEdge("B", "C", 10);
graph.addEdge("B", "D", 30);
graph.addEdge("C", "D", 10);
console.log(graph.dijkstra(graph, "A"));
