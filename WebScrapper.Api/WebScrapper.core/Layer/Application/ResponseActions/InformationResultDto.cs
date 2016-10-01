using System;
using WebScrapper.Core.Helpers.Application;

namespace WebScrapper.Core.Layer.Application.ResponseActions
{
    public class InformationResultDto : IDTOEntity
    {
        public Guid Id { get; set; }
        public String CssSelector { get; set; }

        public ResultActionDto ResultAction { get; set; }

        public String ResultName { get; set; }
    }
}