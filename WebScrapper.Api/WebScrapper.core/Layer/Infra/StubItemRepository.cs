using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebScrapper.Core.Helpers.Repository;
using WebScrapper.Core.Layer.Application.Actions;
using WebScrapper.Core.Layer.Application.Items;
using WebScrapper.Core.Layer.Application.ResponseActions;
using WebScrapper.Core.Layer.Domain.Actions;
using WebScrapper.Core.Layer.Domain.Items;
using WebScrapper.Core.Layer.Domain.ResponseActions;
using Action = WebScrapper.Core.Layer.Domain.Actions.Action;
namespace WebScrapper.Core.Layer.Infra
{
    public class StubItemRepository : StubRepository<Item>
    {


        private static List<Item> _items;

        public static List<Item> Items
        {
            get
            {

                if (_items == null)
                {
                    _items = new List<Item>
                        {
                            new Item()
                                {
                                    Id = Guid.NewGuid(),
                                    Title = "Teste",
                                    Description = "Descrition Test",
                                    Actions = new List<Action>()
                                    {
                                        new Action()
                                        {
                                            Id = Guid.NewGuid(),
                                            Url = "http://www.teste.com/post",
                                            HttpMethod = "POST",
                                            Parameters = new List<Parameter>()
                                            {
                                                new Parameter()
                                                {
                                                    Id = Guid.NewGuid(),
                                                    Name = "Param1",
                                                    Value = "Value1"
                                                }
                                            },
                                            ResponseAction = new ResponseAction()
                                            {
                                                Id = Guid.NewGuid(),
                                                InformationResults = new List<InformationResult>()
                                                {
                                                    new InformationResult()
                                                    {
                                                        Id = Guid.NewGuid(),
                                                        CssSelector = "#test",
                                                        ResultAction = new ResultAction()
                                                        {
                                                            Name = "Export to Csv"
                                                        },
                                                        ResultName = "text.csv"
                                                    }
                                                },
                                                ExtractInformations = new List<ExtractInformation>()
                                                {
                                                    new ExtractInformation()
                                                    {
                                                        Id = Guid.NewGuid(),
                                                        CssSelector = "#test",
                                                        TypeInformation = new TypeInformation()
                                                        {
                                                            Id = Guid.NewGuid(),
                                                            Name = "Table"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                        };

                }
                
                return _items;
            }

        }


        public StubItemRepository()
            : base(Items)
        {

        }

    }
}
