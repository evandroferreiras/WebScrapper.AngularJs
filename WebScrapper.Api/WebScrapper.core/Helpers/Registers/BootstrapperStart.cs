using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bootstrap;
using Bootstrap.Ninject;

namespace WebScrapper.Core.Helpers.Registers
{
    public class BootstrapperStart
    {
        public BootstrapperStart()
        {
            Bootstrapper.With.Ninject().Start();
        }
    }
}
