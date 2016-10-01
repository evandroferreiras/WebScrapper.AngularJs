using System;
using WebScrapper.Core.Helpers.Application;

namespace WebScrapper.Core.Layer.Application.ResponseActions
{
    public class TypeInformationDto : IDTOEntity
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

    }
}