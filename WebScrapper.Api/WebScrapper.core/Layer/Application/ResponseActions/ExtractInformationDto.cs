using System;
using WebScrapper.Core.Helpers.Application;

namespace WebScrapper.Core.Layer.Application.ResponseActions
{
    public class ExtractInformationDto : IDTOEntity
    {
        public Guid Id { get; set; }

        public TypeInformationDto TypeInformation { get; set; }

        public String CssSelector { get; set; }

    }
}