using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebScrapper.Core.Helpers.Application;
using WebScrapper.Core.Layer.Domain.ResponseActions;

namespace WebScrapper.Core.Layer.Application.ResponseActions
{
    public class TypeInformationService : ServiceBase<TypeInformation>
    {
        public IList<TypeInformationDto> ListAll()
        {
            var list = AutoMapper.Mapper.Map<IList<TypeInformation>, IList<TypeInformationDto>>(Repository.ListAll());
            return list;


        }
    }
}
