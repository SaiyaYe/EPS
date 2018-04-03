using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EPS.UI.Portal.Controllers
{
    public class AnalysisController : BaseController
    {
        /// <summary>
        /// 线路风险分析
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/4/3 21:46
        /// 修改者：
        /// 修改时间：
        public ActionResult RiskAnalysis()
        {
            return View();
        }
    }
}