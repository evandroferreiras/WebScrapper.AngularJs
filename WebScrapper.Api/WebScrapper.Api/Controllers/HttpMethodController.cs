using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebScrapper.Api.Controllers
{
    public class HttpMethodController : ApiController
    {
        // GET: api/HttpMethod
        public IEnumerable<object> Get()
        {
            return new object[] { new {id= 1, name = "GET"}, new {id = 2, name = "POST" }};
        }

        // GET: api/HttpMethod/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/HttpMethod
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/HttpMethod/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/HttpMethod/5
        public void Delete(int id)
        {
        }
    }
}
