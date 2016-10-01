using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using WebScrapper.Core.Helpers.Registers;
using WebScrapper.Core.Helpers.Application;
using AutoMapper;

namespace WebScrapper.Core.Test.Base
{
    public class TestBase
    {


        public TestBase()
        {
            Mapper.Initialize(cfg => { cfg.AddProfile<AutoMapperProfile>(); });
            new BootstrapperStart();
        }

        private TestContext testContextInstance;
        /// <summary>
        ///Gets or sets the test context which provides
        ///information about and functionality for the current test run.
        ///</summary>
        public TestContext TestContext
        {
            get
            {
                return testContextInstance;
            }
            set
            {
                testContextInstance = value;
            }
        }
    }
}
