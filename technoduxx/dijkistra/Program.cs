using System;
using System.Collections.Generic;

class Graph
{

    private Dictionary<int, List<Edge>> adj;
    private int V;

    public Graph(int V)
    {
        this.V = V;
        adj = new Dictionary<int, List<Edge>>();
    }

    public void addEdge(int u, int v, int weight)
    {
        if (!adj.ContainsKey(u))
        {
            adj.Add(u, new List<Edge>());
        }
        adj[u].Add(new Edge(v, weight));

        if (!adj.ContainsKey(v))
        {
            adj.Add(v, new List<Edge>());
        }
        adj[v].Add(new Edge(u, weight));
    }

    public void removeEdge(int u, int v)
    {
        if (adj.ContainsKey(u))
        {
            adj[u].Remove(new Edge(v, 0));
        }
        if (adj.ContainsKey(v))
        {
            adj[v].Remove(new Edge(u, 0));
        }
    }

    public void removeVertex(int u)
    {
        if (adj.ContainsKey(u))
        {
            adj.Remove(u);
            for (int v = 0; v < V; v++)
            {
                if (adj.ContainsKey(v))
                {
                    adj[v].Remove(new Edge(u, 0));
                }
            }
        }
    }

    public void dijkstra(int source)
    {
        var distTo = new int[V];
        for (int i = 0; i < V; i++)
        {
            distTo[i] = int.MaxValue;
        }
        distTo[source] = 0;

        var pq = new PriorityQueue<Vertex>();
        pq.Enqueue(new Vertex(source, 0));

        while (!pq.IsEmpty())
        {
            var u = pq.Dequeue();
            if (u.distance == int.MaxValue)
            {
                break;
            }

            for (var edge : adj[u.index])
            {
                var v = edge.to;
                if (distTo[v] > distTo[u.index] + edge.weight)
                {
                    distTo[v] = distTo[u.index] + edge.weight;
                    pq.Enqueue(new Vertex(v, distTo[v]));
                }
            }
        }

        for (int i = 0; i < V; i++)
        {
            Console.WriteLine("The shortest distance from source to " + i + " is " + distTo[i]);
        }
    }

    public class Vertex
    {
        public int index;
        public int distance;

        public Vertex(int index, int distance)
        {
            this.index = index;
            this.distance = distance;
        }

        public override bool Equals(object obj)
        {
            if (obj is Vertex)
            {
                var other = (Vertex)obj;
                return other.index == index && other.distance == distance;
            }
            return false;
        }

        public override int GetHashCode()
        {
            return index * 10 + distance;
        }
    }

    public class Edge
    {
        public int to;
        public int weight;

        public Edge(int to, int weight)
        {
            this.to = to;
            this.weight = weight;
        }
    }
}

class Program
{
    static void Main(string[] args)
    {
        var graph = new Graph(5);
        graph.addEdge(0, 1, 10);
        graph.addEdge(0, 2, 5);
        graph.addEdge(1, 2, 2);
        graph.addEdge(1, 3, 1);
        graph.addEdge(2, 3, 4);
        graph.addEdge(3, 4, 7);

        graph.dijkstra(1);
    }
}
