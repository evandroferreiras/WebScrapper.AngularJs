using System;
using System.Collections.Generic;
using WebScrapper.Core.Helpers.Application;
using WebScrapper.Core.Layer.Application.ResponseActions;

namespace WebScrapper.Core.Layer.Application.Actions
{
    public class ActionDto : IDTOEntity
    {
        public Guid Id { get; set; }

        public String Url { get; set; }

        public String HttpMethod { get; set; }

        public IList<ParameterDto> Parameters { get; set; }

        public ResponseActionDto ResponseAction { get; set; }
    }
}