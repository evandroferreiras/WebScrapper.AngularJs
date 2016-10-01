using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebScrapper.Core.Layer.Application.ResponseActions;

namespace WebScrapper.Api.Controllers
{
    public class TypeInformationController : ApiController
    {
        private TypeInformationService _typeInformationService;
        public TypeInformationController()
        {
            _typeInformationService = new TypeInformationService();
        }

        // GET: api/TypeInformation
        public IEnumerable<TypeInformationDto> Get()
        {
            return _typeInformationService.ListAll().AsEnumerable<TypeInformationDto>();
        }

        // GET: api/TypeInformation/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/TypeInformation
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/TypeInformation/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/TypeInformation/5
        public void Delete(int id)
        {
        }
    }
}
