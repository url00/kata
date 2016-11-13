using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PIE
{
    class Node<T>
    {
        public T Data;
        public Node<T> Next;
    }

    class LinkedList<T>
    {
        private Node<T> head;
        private int size;

        private Node<T> FindNode(int index)
        {
            if (head == null)
            {
                throw new Exception("Empty list.");
            }

            if (index > size)
            {
                throw new Exception("Index out of bounds.");
            }

            var currentNode = head;
            var currentIndex = 0;

            while (currentNode.Next != null && currentIndex != index)
            {
                currentNode = currentNode.Next;
                currentIndex++;
            }

            return currentNode;
        }

        public void InsertBefore(int index, T data)
        {
            var newNode = new Node<T>() { Data = data };

            if (index == 0)
            {
                var oldHead = head;
                head = newNode;
                head.Next = oldHead;
            }
            else
            {
                var nodeBefore = FindNode(index - 1);
                var nodeAfter = nodeBefore.Next;
                nodeBefore.Next = newNode;
                newNode.Next = nodeAfter;
            }

            size++;
        }

        public T DeleteAt(int index)
        {
            T output;

            if (index == 0)
            {
                var newHead = head.Next;
                output = head.Data;
                head = newHead;
            }
            else
            {
                var nodeBefore = FindNode(index - 1);
                var nodeToDelete = nodeBefore.Next;
                var nodeAfter = nodeToDelete.Next;
                nodeBefore.Next = nodeAfter;
                output = nodeToDelete.Data;
            }

            return output;
        }

        public override string ToString()
        {
            var output = "";

            var currentNode = head;
            while (currentNode != null)
            {
                output += currentNode.Data + " ";
                currentNode = currentNode.Next;
            }

            return output;
        }
    }

    class Stack<T>
    {
        private LinkedList<T> list = new LinkedList<T>();

        public void Push(T data)
        {
            list.InsertBefore(0, data);
        }

        public T Pop()
        {
            return list.DeleteAt(0);
        }

        public override string ToString()
        {
            return list.ToString();
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            var list = new LinkedList<int>();
            list.InsertBefore(0, -1);
            list.InsertBefore(1, 0);
            Console.WriteLine(list);
            list.DeleteAt(0);
            Console.WriteLine(list);

            var stack = new Stack<int>();
            stack.Push(7);
            stack.Push(3);
            Console.WriteLine(stack);
            stack.Pop();
            Console.WriteLine(stack);

            Console.ReadLine();
        }
    }
}
