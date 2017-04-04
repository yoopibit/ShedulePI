using SmartScheduler.Models.DataContexts.Context;
using SmartScheduler.Models.Helpers;
using SmartScheduler.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
namespace SmartScheduler.Services.Controllers
{
    public class AccountController : ApiController
    {
        [Route("login")]
        [HttpPost]
        public HttpResponseMessage Login()
        {
            var re = Request;
            var headers = re.Headers;
            if(Request.Headers.GetValues("Authorization") == null)
            {
                return new HttpResponseMessage(HttpStatusCode.Unauthorized);

            }
            else
            {
                var resp = new HttpResponseMessage(HttpStatusCode.InternalServerError);

                var httpRequestHeader = Request.Headers.GetValues("Authorization").FirstOrDefault();

                //httpRequestHeader = httpRequestHeader.Substring("Authorization".Length);

                string[] httpRequestHeaderValues = httpRequestHeader.Split(':');

                string username = Encoding.UTF8.GetString(Convert.FromBase64String(httpRequestHeaderValues[0]));

                string password = Encoding.UTF8.GetString(Convert.FromBase64String(httpRequestHeaderValues[1]));


                //SmartSchedulerContext.Instance.Users.AddUser("s", "a");
                User user = SmartSchedulerContext.Instance.Users.GetUser(username, password);
                if (user == null)
                {
                    return new HttpResponseMessage(HttpStatusCode.Unauthorized);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.OK, SessionHelper.CreateSession(user.UserId));
                }

            }

        }
    }
}
