using EPS.BLL;
using EPS.IBLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EPS.UI.Portal.Controllers
{
    public class LoginController : Controller
    {
        [Ninject.Inject]
        public IUserService UserService { get; set; }

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(string username, string password)
        {
            username = username.Trim();
            password = password.Trim();
            var result = UserService.Login(username, password);
            return Json(new { result.State, result.Message });
        }
    }
}