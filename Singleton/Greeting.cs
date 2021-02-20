using System;

namespace Singleton
{
    class Greeting
    {
        private static Greeting _instance = null;
        private static object locker = new object();

        public string Name { get; set; }

        private Greeting()
        {
            Console.WriteLine("mesajul a fost creat");
        }
        public static Greeting GetInstance()
        {

            if (_instance == null)
            {
                lock (locker)
                {

                    if (_instance == null)
                        _instance = new Greeting();
                }
            }

            return _instance;
        }
        public void sayHi(string name)
        {
            Console.WriteLine($"welcome, {name}!");
        }
    }
}