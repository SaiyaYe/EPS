using EPS.BLL;
using EPS.Common;
using EPS.IBLL;
using EPS.UI.Portal.Models;
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

            if (result.State)
            {
                System.Web.HttpContext.Current.Session[ControllerCommon.UserSessionKey] = new UserSession
                {
                    EmployeeId = result.Result.EmployeeId,
                    EmployeeName = result.Result.Employee.Name,
                    CompanyId = result.Result.Employee.CompanyId,
                    DepartmentId = result.Result.Employee.DepartmentId,
                    GroupId = result.Result.Employee.GroupId,
                    IsManager = result.Result.Employee.IsTeamLeader,
                    PictureUrl = result.Result.PictureUrl
                }.Serialize();
            }

            return Json(new { result.State, result.Message });
        }
    }
}