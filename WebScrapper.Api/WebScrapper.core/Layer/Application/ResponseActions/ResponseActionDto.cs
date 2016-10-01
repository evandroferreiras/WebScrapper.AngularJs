using System;
using System.Collections.Generic;
using WebScrapper.Core.Helpers.Application;

namespace WebScrapper.Core.Layer.Application.ResponseActions
{
    public class ResponseActionDto : IDTOEntity
    {
        public Guid Id { get; set; }

        public IList<ExtractInformationDto> ExtractInformations { get; set; }

        public IList<InformationResultDto> InformationResults { get; set; }
    }
}