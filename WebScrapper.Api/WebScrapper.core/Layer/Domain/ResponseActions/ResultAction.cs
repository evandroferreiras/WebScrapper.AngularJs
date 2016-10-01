using System;
using WebScrapper.Core.Helpers.Application;
using WebScrapper.Core.Helpers.Domain;

namespace WebScrapper.Core.Layer.Domain.ResponseActions
{
    public class ResultAction : IDomainEntity
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
    }
}