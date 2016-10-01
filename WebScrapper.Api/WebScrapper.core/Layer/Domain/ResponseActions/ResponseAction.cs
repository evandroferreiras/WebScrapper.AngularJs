using System;
using System.Collections.Generic;
using WebScrapper.Core.Helpers.Application;
using WebScrapper.Core.Helpers.Domain;

namespace WebScrapper.Core.Layer.Domain.ResponseActions
{
    public class ResponseAction : IDomainEntity
    {
        public Guid Id { get; set; }

        public IList<ExtractInformation> ExtractInformations { get; set; }

        public IList<InformationResult> InformationResults { get; set; }
    }
}