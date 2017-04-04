using SmartScheduler.Models.DataContexts.Context;
using SmartScheduler.Models.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Filters;

namespace SmartScheduler.Services.Filters
{
    public class RequireAuthorization : ActionFilterAttribute
    {
        public string Role { get; set; }

        public override void OnActionExecuting(System.Web.Http.Controllers.HttpActionContext actionContext)
        {
            Role role = Models.DataContexts.Context.Role.User;
            if (!string.IsNullOrEmpty(Role))
            {
                role = (Role)Enum.Parse(typeof(Role), Role, true);
            }

            string query = actionContext.Request.RequestUri.Query;
            var isTokenHeader = actionContext.Request.Headers.Contains("Token");
            if(!isTokenHeader)
            {
                var response = new HttpResponseMessage
                {
                    Content =
        new StringContent("Header \"Token\" is required!"),
                    StatusCode = HttpStatusCode.BadRequest
                };
                throw new HttpResponseException(response);
            }
            var accessToken = actionContext.Request.Headers.GetValues("Token");

            // we first check for valid token
            if (accessToken != null)
            {
                string token = accessToken.FirstOrDefault();
                bool validToken = false;
                if (!string.IsNullOrEmpty(token))
                    validToken = SessionHelper.GetSession(token) > 0;

                if (!validToken)
                {
                    var response = new HttpResponseMessage
                    {
                        Content =
                            new StringContent("This token is not valid, please refresh token or obtain valid token!"),
                        StatusCode = HttpStatusCode.Unauthorized
                    };
                    throw new HttpResponseException(response);
                }
                else
                {
                    bool isRoleValid = SessionHelper.isRoleValid(role, token);
                    if(!isRoleValid)
                    {
                        var response = new HttpResponseMessage
                        {
                            Content =
                                    new StringContent("You have no right to access method!"),
                            StatusCode = HttpStatusCode.Unauthorized
                        };
                        throw new HttpResponseException(response);
                    }
                }
            }
            else
            {
                var response = new HttpResponseMessage
                {
                    Content =
                        new StringContent("You must supply valid token to access method!"),
                    StatusCode = HttpStatusCode.Unauthorized
                };
                throw new HttpResponseException(response);
            }

            base.OnActionExecuting(actionContext);
        }
    }
}