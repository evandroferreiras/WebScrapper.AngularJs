using System;
using WebScrapper.Core.Helpers.Application;
using WebScrapper.Core.Helpers.Domain;

namespace WebScrapper.Core.Layer.Domain.ResponseActions
{
    public class ExtractInformation : IDomainEntity
    {
        public Guid Id { get; set; }

        public TypeInformation TypeInformation { get; set; }

        public String CssSelector { get; set; }

    }
}