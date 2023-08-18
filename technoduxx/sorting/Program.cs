using System;

namespace selsort
{

    public class SelectionSort
    {
        public static void Sort(int[] array)
        {
            for (int i = 0; i < array.Length - 1; i++)
            {
                int minIndex = i;
                for (int j = i + 1; j < array.Length; j++)
                {
                    if (array[j] < array[minIndex])
                    {
                        minIndex = j;
                    }
                }
                int temp = array[i];
                array[i] = array[minIndex];
                array[minIndex] = temp;
            }
        }

        public static void Main(string[] args)
        {
            int[] array = { 10, 4, 2, 5, 4, 7, 8, 98, 7, 51, 32 };

            Sort(array);

            Console.WriteLine("The sorted array is:");
            for (int i = 0; i < array.Length; i++)
            {
                Console.Write(array[i] + " ");
            }
        }
    }

}
// string name = "preeti";
// Console.WriteLine($"hello {name}");

// using System{
//     Console.WriteLine("Enter username:");
//     // Create a string variable and get user input from the keyboard and store it in the variable
// string userName = Console.ReadLine();

// // Print the value of the variable (userName), which will display the input value
// Console.WriteLine("Username is: " + userName);
// }