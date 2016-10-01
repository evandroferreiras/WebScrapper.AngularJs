using System;
using WebScrapper.Core.Helpers.Application;
using WebScrapper.Core.Helpers.Domain;

namespace WebScrapper.Core.Layer.Domain.ResponseActions
{
    public class InformationResult : IDomainEntity
    {
        public Guid Id { get; set; }
        public String CssSelector { get; set; }

        public ResultAction ResultAction { get; set; }

        public String ResultName { get; set; }
    }
}