using EPS.IBLL;
using EPS.Model;
using EPS.UI.Portal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EPS.UI.Portal.Controllers
{
    public class AnalysisController : BaseController
    {
        [Ninject.Inject]
        public IPatrolPointService PatrolPointService { get; set; }

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
            List<StatisticModel> modelList = new List<StatisticModel>();

            var result = PatrolPointService.PatrolPointStatistic();
            List<Statistic> statisticList = result.Result;

            foreach (var item in statisticList)
            {
                StatisticModel model = new StatisticModel
                {
                    Count = item.Count,
                    Year = item.Year,
                    Month = item.Month
                };
                model.YearMonth = model.GetYearMonth();

                modelList.Add(model);
            }

            ViewBag.PatrolPointStatisticList = modelList;

            return View();
        }
    }
}