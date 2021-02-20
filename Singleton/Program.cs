using System;
using System.Threading.Tasks;

namespace Singleton
{
    class Program
    {
        static void Main(string[] args)
        {
            Greeting.GetInstance().Name = "boo";
            Greeting.GetInstance().sayHi("boo");

        }
    }
}
