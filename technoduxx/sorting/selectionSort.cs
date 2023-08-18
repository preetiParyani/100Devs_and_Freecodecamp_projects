using System
public class SelectionSort
{
    public static void Sort(int[array])
    {
        for (int i = 0; i < array.Length - 1; ++i)
        {
            int minIndex = i
            for (int j = 0; j < array.length; j++)
            {
                if (array[j] > array[minIndex])
                {
                    minIndex = j
                }
            }
            int temp = array[i]
           array[i] = array[minIndex]
           array[minIndex] = temp
        }
    }

    public static void Main(string[] args)
    {
        int[] array = { 10, 4, 2, 5, 4, 7, 8, 98, 7, 51, 32 }

        SelectionSort.Sort(array)

        Console.WriteLine("The sorted array is:")
        for (int i = 0; i < array.length; i++)
        {
            Console.WriteLine(array[i]);
        }
    }
}