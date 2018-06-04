using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPS.Model;
using EPS.UI.Portal.Models;

namespace EPS.UI.Portal.Controllers
{
   
    /// <summary>
    /// 类名称：SpaceMapServiceController
    /// 命名空间：EPS.UI.Portal.Controllers.
    /// </summary>
    /// 创建者：王一鹤
    /// 创建日期：2018/6/4 9:29
    /// 修改人：
    /// 修改日期：
    /// <seealso cref="System.Web.Mvc.Controller" />
    public class SpaceMapServiceController : BaseController
    {
        // GET: SpaceQueryAnalysis
        public ActionResult SpaceQueryAnalysis()
        {
            return View();
        }
        public ActionResult GeometryTimeChange()
        {
            return View();
        }
        public ActionResult MacroSituationDisplay()
        {
            return View();
        }
    }
}