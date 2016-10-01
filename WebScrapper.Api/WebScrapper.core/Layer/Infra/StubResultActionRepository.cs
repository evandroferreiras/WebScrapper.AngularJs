using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebScrapper.Core.Helpers.Repository;
using WebScrapper.Core.Layer.Application.ResponseActions;
using WebScrapper.Core.Layer.Domain.ResponseActions;

namespace WebScrapper.Core.Layer.Infra
{
    public class StubResultActionRepository : StubRepository<ResultAction>    
    {
        public StubResultActionRepository() : base(new List<ResultAction>{
            new ResultAction(){
                Id = Guid.NewGuid(),
                Name = "Export to CSV",
            },
            new ResultAction(){
                Id = Guid.NewGuid(),
                Name = "Save to Variable",
            }
        })
        {
            
        }
    }
}
