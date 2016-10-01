using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebScrapper.Core.Layer.Application.Items;

namespace WebScrapper.Api.Controllers
{
    public class ItemController : ApiController
    {

        private ItemService _itemService;


        public ItemController()
        {
            _itemService = new ItemService();
        }
        // GET: api/Item
        public IEnumerable<ItemDto> Get()
        {
            return _itemService.ListAll().AsEnumerable<ItemDto>();
        }

        // GET: api/Item/5
        public ItemDto Get(Guid id)
        {
            return _itemService.GetById(id);
        }

        // POST: api/Item
        public HttpResponseMessage Post([FromBody]ItemDto itemDto)
        {
            Guid id = _itemService.Add(itemDto);
            var response = Request.CreateResponse<ItemDto>(HttpStatusCode.Created, itemDto);

            string uri = Url.Link("Items", new { id = id });
            response.Headers.Location = new Uri(uri);
            return response;
        }

        // PUT: api/Item/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Item/5
        public void Delete(int id)
        {
        }
    }
}
