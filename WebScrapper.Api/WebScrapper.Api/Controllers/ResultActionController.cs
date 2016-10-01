using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebScrapper.Core.Layer.Application.ResponseActions;

namespace WebScrapper.Api.Controllers
{
    public class ResultActionController : ApiController
    {

        private ResultActionService _resultAction;

        public ResultActionController()
        {
            _resultAction = new ResultActionService();
        }

        // GET: api/ResultAction
        public IEnumerable<ResultActionDto> Get()
        {
            return _resultAction.ListAll().AsEnumerable<ResultActionDto>();
        }

        // GET: api/ResultAction/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/ResultAction
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/ResultAction/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ResultAction/5
        public void Delete(int id)
        {
        }
    }
}
