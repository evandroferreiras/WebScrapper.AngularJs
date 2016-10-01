using System;
using System.Collections.Generic;
using WebScrapper.Core.Helpers.Application;

namespace WebScrapper.Core.Layer.Application.Items
{
    public class ItemDto : IDTOEntity
    {
        public Guid Id { get; set; }

        public String Title { get; set; }

        public String Description { get; set; }

        public IList<Actions.ActionDto> Actions { get; set; }
    }
}