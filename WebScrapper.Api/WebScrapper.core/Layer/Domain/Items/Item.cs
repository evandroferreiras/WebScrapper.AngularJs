using System;
using System.Collections.Generic;
using WebScrapper.Core.Helpers.Application;
using WebScrapper.Core.Helpers.Domain;

namespace WebScrapper.Core.Layer.Domain.Items
{
    public class Item : IDomainEntity
    {
        public Guid Id { get; set; }

        public String Title { get; set; }

        public String Description { get; set; }

        public IList<Actions.Action> Actions { get; set; }
    }
}