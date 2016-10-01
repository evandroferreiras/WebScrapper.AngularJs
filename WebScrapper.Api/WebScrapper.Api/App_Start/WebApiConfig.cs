using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json.Serialization;
using System.Net.Http.Headers;
using System.Web.Http.Cors;

namespace WebScrapper.Api
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            var cors = new EnableCorsAttribute("http://192.168.0.16:8080", "*", "*");
            config.EnableCors(cors);
            // Web API configuration and services
            // Configure Web API to use only bearer token authentication.
            config.SuppressDefaultHostAuthentication();
            config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));

            // Web API routes
            config.MapHttpAttributeRoutes();


            config.Routes.MapHttpRoute(
                name: "TypeInformations",
                routeTemplate: "api/TypeInformations/{id}",
                defaults: new { 
                    controller = "TypeInformation",
                    id = RouteParameter.Optional }
            );

            config.Routes.MapHttpRoute(
                name: "HttpMethods",
                routeTemplate: "api/HttpMethods/{id}",
                defaults: new
                {
                    controller = "HttpMethod",
                    id = RouteParameter.Optional
                }
            );

            config.Routes.MapHttpRoute(
                name: "ResultActions",
                routeTemplate: "api/ResultActions/{id}",
                defaults: new
                {
                    controller = "ResultAction",
                    id = RouteParameter.Optional
                }
            );

            config.Routes.MapHttpRoute(
                name: "Items",
                routeTemplate: "api/Items/{id}",
                defaults: new
                {
                    controller = "Item",
                    id = RouteParameter.Optional
                }
            );



            var jsonFormatter = config.Formatters.OfType<JsonMediaTypeFormatter>().FirstOrDefault();
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

        }
    }
}
