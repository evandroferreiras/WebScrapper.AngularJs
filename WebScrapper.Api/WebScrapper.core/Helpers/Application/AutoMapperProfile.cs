using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebScrapper.Core.Layer.Application.Actions;
using WebScrapper.Core.Layer.Application.Items;
using WebScrapper.Core.Layer.Application.ResponseActions;
using WebScrapper.Core.Layer.Domain.Actions;
using WebScrapper.Core.Layer.Domain.Items;
using WebScrapper.Core.Layer.Domain.ResponseActions;
using Action = WebScrapper.Core.Layer.Domain.Actions.Action;
namespace WebScrapper.Core.Helpers.Application
{
    public class AutoMapperProfile : Profile
    {

        public AutoMapperProfile()
        {
            CreateMap<Action, ActionDto>();
            CreateMap<TypeInformation, TypeInformationDto>();
            CreateMap<ResultAction, ResultActionDto>();
            CreateMap<ResponseAction, ResponseActionDto>();
            CreateMap<InformationResult, InformationResultDto>();
            CreateMap<ExtractInformation, ExtractInformationDto>();
            CreateMap<Item, ItemDto>();
            CreateMap<Parameter, ParameterDto>();

            CreateMap<ActionDto, Action>();
            CreateMap<TypeInformationDto, TypeInformation>();
            CreateMap<ResultActionDto, ResultAction>();
            CreateMap<ResponseActionDto, ResponseAction>();
            CreateMap<InformationResultDto, InformationResult>();
            CreateMap<ExtractInformationDto, ExtractInformation>();
            CreateMap<ItemDto, Item>();
            CreateMap<ParameterDto, Parameter>();

        }       
    }
}
