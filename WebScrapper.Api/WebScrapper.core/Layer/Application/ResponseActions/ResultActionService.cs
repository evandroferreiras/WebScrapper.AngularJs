using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebScrapper.Core.Helpers.Application;
using WebScrapper.Core.Layer.Domain.ResponseActions;

namespace WebScrapper.Core.Layer.Application.ResponseActions
{
    public class ResultActionService : ServiceBase<ResultAction>
    {
        public IList<ResultActionDto> ListAll()
        {
            var list = AutoMapper.Mapper.Map<IList<ResultAction>, IList<ResultActionDto>>(Repository.ListAll());
            return list;
        }
    }
}
