﻿using EPS.BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EPS.UI.Portal.Controllers
{
    public class LoginController : Controller
    {
        UserService bll = new UserService();

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(string username, string password)
        {
            username = username.Trim();
            password = password.Trim();
            var result = bll.Login(username, password);
            if (!result.State)
            {
                //ViewData["msg"] = result.Message;
                return Content(result.Message);
            }

            //RedirectToAction("Index", "Home");
            Response.Redirect("/Home/Index");
            return View();
        }
    }
}