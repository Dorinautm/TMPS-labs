using System;
using System.Threading.Tasks;

namespace Singleton
{
    class Program
    {
        static void Main(string[] args)
        {
            Greeting.GetInstance().Name = "dude";
            Greeting.GetInstance().sayHi("dude");

        }
    }
}
