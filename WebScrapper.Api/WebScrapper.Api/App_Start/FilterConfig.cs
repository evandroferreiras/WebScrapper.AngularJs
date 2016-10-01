using System.Web;
using System.Web.Mvc;
using System.Web.Http.Cors;

namespace WebScrapper.Api
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());          
        }
    }
}
