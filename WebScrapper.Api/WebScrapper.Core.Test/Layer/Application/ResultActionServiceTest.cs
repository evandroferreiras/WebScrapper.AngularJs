using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebScrapper.Core.Layer.Application.ResponseActions;
using WebScrapper.Core.Test.Base;

namespace WebScrapper.Core.Test.Layer.Application
{

    [TestClass]
    public class ResultActionServiceTest : TestBase
    {

        public new TestContext TestContext { get; set; }

        [TestMethod]
        public void ListAll()
        {

            var resultActionService = new ResultActionService();

            var list =resultActionService.ListAll();

            foreach (var ra in list)
            {
                TestContext.WriteLine(ra.Name);
            }

            
        }
    }


}
