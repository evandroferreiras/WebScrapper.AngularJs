using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bootstrap;
using Ninject;
using WebScrapper.Core.Helpers.Domain;
using WebScrapper.Core.Helpers.Repository;

namespace WebScrapper.Core.Helpers.Application
{
    public class ServiceBase<T> where T : IDomainEntity
    {

        protected IRepository<T> Repository;

        public ServiceBase()
        {
            IKernel kernel = (IKernel)Bootstrapper.Container;

            Repository = kernel.Get<IRepository<T>>();
        }
    }
}
