using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using WebScrapper.Core.Layer.Application;
using WebScrapper.Core.Layer.Application.Items;
using WebScrapper.Core.Test.Base;

namespace WebScrapper.Core.Test.Layer.Application
{
    [TestClass]
    public class ItemServiceTest : TestBase
    {
        public new TestContext TestContext { get; set; }

        public ItemServiceTest() : base()
        {
            
        }

        [TestMethod]
        public void ListAll()
        {

            var itemService = new ItemService();

            var list =itemService.ListAll();

            foreach (var item in list)
            {
                TestContext.WriteLine(item.Title);
            }

            
        }
    }
}
