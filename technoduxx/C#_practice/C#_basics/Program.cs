using System;
namespace ShortestDistanceAlgo{
    class SPA
{
    static int Nodes = 9;

    //minDistance function is being used to determine am I
    int minDistance(int[] distance, bool[] visitedNodes)
    {
        int minDistanceUnitlNow = int.MaxValue, minIndex = -1;

        for (var node = 0; node < Nodes; node++)
            if (!visitedNodes[node] && distance[node] <= minDistanceUnitlNow)
            {
                minDistanceUnitlNow = distance[node];
                minIndex = node;
            }
        return minIndex;
    }

    void printSolution(int[] distance){
        Console.Write("Node t/ Distance from Source Node/n");
        for(int node = 0; node< Nodes; node++)
        Console.Write(node + distance[node]);
    }

    void dijkstra(int[, ] graph, int src){
        int[] distance = new int[Nodes];
        var visitedNodes= new bool [Nodes];
        for(int i = 0; i< Nodes; i++){
            distance[i] = int.MaxValue;
            visitedNodes[i] = false;
        }
        distance[src]=0;//distance of source is zero
        while(!isAllVisited(visitedNodes))

        
    }
    public static void Main(){
        SPA spa = new SPA();
    }
}

}

//print SOlution function will print the nodes and their distance from the source node




// // See https://aka.ms/new-console-template for more information
// using System;

// namespace Variables
// {
//     class Program
//     {
//         static void Main(string[] args)
//         {
//             // Type your username and press enter
//             Console.WriteLine("Enter username:");

//             // Create a string variable and get user input from the keyboard and store it in the variable
//             string userName = Console.ReadLine();

//             // Print the value of the variable (userName), which will display the input value
//             Console.WriteLine("Username is: " + userName);
//             string name = "preeti";
//             Console.WriteLine($"Hello, {name}!");
//             string firstFriend = "anjali";
//             string secondFriend = "Khushboo";
//             Console.WriteLine($"My friends are {firstFriend} and {secondFriend}");
//             string greeting = "      Hello World!       ";
//             Console.WriteLine($"[{greeting}]");

//             string trimmedGreeting = greeting.TrimStart();
//             Console.WriteLine($"[{trimmedGreeting}]");//trimstart removes the spaces from the starting...

//             trimmedGreeting = greeting.TrimEnd();
//             Console.WriteLine($"[{trimmedGreeting}]");//trimend removes the spaces from the end side...

//             trimmedGreeting = greeting.Trim();//.trim removes every space
//             Console.WriteLine($"[{trimmedGreeting}]");
//             Console.WriteLine();

//             byte number = 2;//in c# we need to specify the type of variables as done...
//             int count = 10;
//             float dot = 54.65f;
//             Console.WriteLine(number + count + dot);//added the above initialized three variables..
//             Convert.ToChar(number);//convert change or type cast .operator helps in defining in what type to change into.
//             System.Console.WriteLine("{0} {1}", byte.MinValue, byte.MaxValue);//this will let you know the range of the datatype..

//             //Type Conversion
//             //Implicit type conversion
//             byte i = 1;
//             int j = i;//since byte is an integral data type so it easily got converted into int and no data loss occurs
//             System.Console.WriteLine(j);

//             int a = 2;
//             // byte b = a;//won't compile

//             //the above one is explicit type conversion is like chote ko bada dena but we still want to do that as we are aware of data loss,
//             //hence in such case we do this
//             byte b = (byte)a;
//             System.Console.WriteLine(b);

//             //next we come to non-compatible types when we try to typecast between literal and integral data types

//             string s = "1";
//             int t = Convert.ToInt32(s);
//             System.Console.WriteLine(t);




//         }
//     }
// }
