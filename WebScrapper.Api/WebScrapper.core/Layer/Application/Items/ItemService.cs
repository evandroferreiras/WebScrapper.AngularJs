using System.Collections.Generic;
using WebScrapper.Core.Helpers.Application;
using WebScrapper.Core.Layer.Domain.Items;
using System.Linq;
using System;

namespace WebScrapper.Core.Layer.Application.Items
{
    public class ItemService : ServiceBase<Item>
    {
        public IList<ItemDto> ListAll()
        {
            var list = AutoMapper.Mapper.Map<IList<Item>, IList<ItemDto>>(Repository.ListAll());
            return list; 
        }

        public ItemDto GetById(Guid id)
        {
            var list = AutoMapper.Mapper.Map<IList<Item>, IList<ItemDto>>(Repository.ListAll());
            return list.First(x => x.Id.Equals(id)); 
        }

        public Guid Add(ItemDto itemDto)
        {
            var item = AutoMapper.Mapper.Map<ItemDto, Item>(itemDto);
            return Repository.Add(item);
        }
    }
}