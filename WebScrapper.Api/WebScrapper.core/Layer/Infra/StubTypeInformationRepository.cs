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
    public class StubTypeInformationRepository : StubRepository<TypeInformation>
    {
        public StubTypeInformationRepository()
            : base(new List<TypeInformation>
            {
                new TypeInformation(){
                    Id = Guid.NewGuid(),
                    Name = "Table"
                },
                new TypeInformation(){
                    Id = Guid.NewGuid(),
                    Name = "Element"
                }
            })
        {

        }
    }
}
