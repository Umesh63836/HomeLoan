using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace HomeLoan
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            config.EnableCors();
            // Web API routes
            config.MapHttpAttributeRoutes();
            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new System.Net.Http.Headers.MediaTypeHeaderValue("text/html"));

            config.Routes.MapHttpRoute(
            name: "GetFirstList",
            routeTemplate: "api/Admins/getloan"
            );

            //for admin login
            config.Routes.MapHttpRoute(
            name: "GetAdmin",
            routeTemplate: "api/Admins/PostAdmin"
            );

            //for customer login
            config.Routes.MapHttpRoute(
            name: "GetCustomer",
            routeTemplate: "api/Admins/PostCustomer"
            );

            //for changing track status
            config.Routes.MapHttpRoute(
            name: "ChangeStatus",
            routeTemplate: "api/Admins/statuschange"
            );

            //for admin email verification
            config.Routes.MapHttpRoute(
           name: "AdminVerify",
           routeTemplate: "api/Admins/PostEmail"
           );

            //for customer phone verification
            config.Routes.MapHttpRoute(
           name: "UserVerify",
           routeTemplate: "api/Admins/PostContact"
           );


            //for changing admin password
            config.Routes.MapHttpRoute(
          name: "ChnagePassword",
          routeTemplate: "api/Admins/newpass"
          );
            //for changing customer password
            config.Routes.MapHttpRoute(
            name: "ChangeCustomerPassword",
            routeTemplate: "api/Customers/newpassC"
            );

            config.Routes.MapHttpRoute(
            name: "UploadImage",
            routeTemplate: "api/CustomerDocuments/UploadImage"
            );

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
