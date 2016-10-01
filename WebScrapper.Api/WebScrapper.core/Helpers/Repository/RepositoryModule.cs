using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Ninject.Modules;
using WebScrapper.Core.Layer.Application.Items;
using WebScrapper.Core.Layer.Infra;
using WebScrapper.Core.Layer.Application.ResponseActions;
using WebScrapper.Core.Layer.Domain.ResponseActions;
using WebScrapper.Core.Layer.Domain.Items;

namespace WebScrapper.Core.Helpers.Repository
{
    public class RepositoryModule :   NinjectModule
    {
        public override void Load()
        {
            Bind<IRepository<Item>>().To<StubItemRepository>();
            Bind<IRepository<TypeInformation>>().To<StubTypeInformationRepository>();
            Bind<IRepository<ResultAction>>().To<StubResultActionRepository>();

        }
    }
}
