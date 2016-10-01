using System;
using WebScrapper.Core.Helpers.Application;

namespace WebScrapper.Core.Layer.Application.Actions
{
    public class ParameterDto : IDTOEntity
    {
        public Guid Id { get; set; }

        public string Name { get; set; }
        public string Value { get; set; }
    }
}
