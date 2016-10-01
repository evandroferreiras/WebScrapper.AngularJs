using System;
using System.Collections.Generic;
using WebScrapper.Core.Helpers.Application;
using WebScrapper.Core.Helpers.Domain;
using WebScrapper.Core.Layer.Application.ResponseActions;
using WebScrapper.Core.Layer.Domain.ResponseActions;

namespace WebScrapper.Core.Layer.Domain.Actions
{
    public class Action : IDomainEntity
    {
        public Guid Id { get; set; }

        public String Url { get; set; }

        public String HttpMethod { get; set; }

        public IList<Parameter> Parameters { get; set; }

        public ResponseAction ResponseAction { get; set; }
    }
}