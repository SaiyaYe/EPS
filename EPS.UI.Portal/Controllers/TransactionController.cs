using EPS.BLL;
using EPS.Model;
using EPS.UI.Portal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EPS.UI.Portal.Controllers
{

    public class TransactionController : BaseController
    {
        PatrolSchemeService bll = new PatrolSchemeService();
        PatrolReportService bll1 = new PatrolReportService();

        /// <summary>
        /// Schemes the list.
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/1/31 10:03
        /// 修改者：
        /// 修改时间：
        public ActionResult SchemeList()
        {

            List<PatrolScheme> patrolSchemeList = bll.GetElementList().Result;
            List<PatrolSchemeModel> modelList = new List<PatrolSchemeModel>();

            foreach (var item in patrolSchemeList)
            {
                PatrolSchemeModel model = new PatrolSchemeModel()
                {
                    Id = item.Id,
                    Number = item.Number,
                    EmployeeId = item.EmployeeId,
                    EmployeeName = item.Employee.Name,
                    PatrolRouteId = item.PatrolRouteId,
                    PatrolRouteName = item.PatrolRoute.Name,
                    SchemeDate = item.SchemeDate,
                    StartDate = item.StartDate,
                    EndDate = item.EndDate
                };
                modelList.Add(model);
            }

            ViewBag.Model = modelList;
            return View();
        }

        public ActionResult PatrolReportList()
        {
            List<PatrolReport> patrolReportList = bll1.GetElementList().Result;
            List<PatrolReportModel> modelList = new List<PatrolReportModel>();

            foreach (var item in patrolReportList)
            {
                PatrolReportModel model = new PatrolReportModel()
                {

                    PoleTowerName = item.PatrolPoint.PoleTowerNumber,
                    DefectCode = item.Dictionary.Code,
                    DefectType = item.Dictionary.Type,
                    PatrolRouteName = item.PatrolRoute.Name,
                    ReportTime = item.ReportTime,
                };
                modelList.Add(model);
            }

            ViewBag.Model = modelList;
            return View();
        }

        /// <summary>
        /// Adds the scheme.
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/1 16:45
        /// 修改者：
        /// 修改时间：
        public ActionResult AddScheme()
        {
            return View();
        }

        [HttpPost]
        public ActionResult AddScheme(PatrolSchemeModel model)
        {
            PatrolScheme patrolScheme = new PatrolScheme()
            {
                EmployeeId = model.EmployeeId,
                Number = model.Number,
                PatrolRouteId = model.PatrolRouteId,
                SchemeDate = DateTime.Now,
                StartDate = DateTime.Parse(model.DateRange.Split(new char[] { '-' })[0].Trim()),
                EndDate = DateTime.Parse(model.DateRange.Split(new char[] { '-' })[1].Trim()),
            };
            var result = bll.Add(patrolScheme);
            if (!result.State)
            {
                return Content(result.Message);
            }

            return RedirectToAction("SchemeList");
        }

        /// <summary>
        /// Deletes the scheme by id
        /// </summary>
        /// <param name="schemeId">The scheme id</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/1 16:45
        /// 修改者：
        /// 修改时间：
        public ActionResult DeleteSchemeById(int schemeId)
        {
            PatrolScheme scheme = bll.Find(schemeId).Result;
            PatrolSchemeModel model = new PatrolSchemeModel
            {
                Id = scheme.Id,
                Number = scheme.Number,
                EmployeeId = scheme.EmployeeId,
                EmployeeName = scheme.Employee.Name,
                PatrolRouteId = scheme.PatrolRouteId,
                PatrolRouteName = scheme.PatrolRoute.Name,
                SchemeDate = scheme.SchemeDate,
                StartDate = scheme.StartDate,
                EndDate = scheme.EndDate
            };
            return View(model);
        }


        /// <summary>
        /// Deletes the scheme by id
        /// </summary>
        /// <param name="schemeId">The scheme id</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/1 16:45
        /// 修改者：
        /// 修改时间：
        [HttpPost]
        public ActionResult DeleteSchemeById(int schemeId, FormCollection fc)
        {
            bll.DeleteById(schemeId);
            return RedirectToAction("SchemeList");
        }

        /// <summary>
        /// Updates the scheme.
        /// </summary>
        /// <param name="schemeId">The scheme id</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/1 17:11
        /// 修改者：
        /// 修改时间：
        public ActionResult UpdateScheme(int schemeId)
        {
            PatrolScheme scheme = bll.Find(schemeId).Result;
            PatrolSchemeModel model = new PatrolSchemeModel
            {
                Id = scheme.Id,
                Number = scheme.Number,
                EmployeeId = scheme.EmployeeId,
                EmployeeName = scheme.Employee.Name,
                PatrolRouteId = scheme.PatrolRouteId,
                PatrolRouteName = scheme.PatrolRoute.Name,
                SchemeDate = scheme.SchemeDate,
                StartDate = scheme.StartDate,
                EndDate = scheme.EndDate
            };
            return View(model);
        }

        [HttpPost]
        public ActionResult UpdateScheme(PatrolSchemeModel model)
        {
            PatrolScheme patrolScheme = new PatrolScheme
            {
                Id = model.Id,
                Number = model.Number,
                PatrolRouteId = model.PatrolRouteId,
                EmployeeId = model.EmployeeId,
                SchemeDate = model.SchemeDate,
                StartDate = model.StartDate,
                EndDate = model.EndDate
            };
            var result = bll.UpdateScheme(patrolScheme);
            return RedirectToAction("SchemeList");
        }
    }
}