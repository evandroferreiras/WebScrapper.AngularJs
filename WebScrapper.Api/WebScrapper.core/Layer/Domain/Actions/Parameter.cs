using System;
using WebScrapper.Core.Helpers.Application;
using WebScrapper.Core.Helpers.Domain;

namespace WebScrapper.Core.Layer.Domain.Actions
{
    public class Parameter : IDomainEntity
    {
        public Guid Id { get; set; }

        public string Name { get; set; }
        public string Value { get; set; }
    }
}
