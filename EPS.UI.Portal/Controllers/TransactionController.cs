using EPS.BLL;
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

    public class TransactionController : BaseController
    {
        IPatrolSchemeService patrolSchemeService = new PatrolSchemeService();
        IPatrolReportService patrolReportService = new PatrolReportService();
        IEmployeeService employeeService = new EmployeeService();

        /// <summary>
        /// Schemes the list.
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/1/31 10:03
        /// 修改者：
        /// 修改时间：
        public ActionResult SchemeList(int companyId = 0, int departmentId = 0, int groupId = 0, int employeeId = 0)
        {
            List<PatrolScheme> patrolSchemeList = patrolSchemeService.GetPatrolSchemeList(companyId, departmentId, groupId, employeeId).Result;

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
            List<PatrolReport> patrolReportList = patrolReportService.GetElementList().Result;
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
            //var result=
            return View();
        }

        /// <summary>
        /// Adds the scheme.
        /// </summary>
        /// <param name="model">The model.</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/13 19:03
        /// 修改者：
        /// 修改时间：
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
            var result = patrolSchemeService.Add(patrolScheme);
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
        [HttpPost]
        public ActionResult DeleteSchemeById(int schemeId, FormCollection fc = null)
        {
            var result = patrolSchemeService.DeleteById(schemeId);
            return Json(result);
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
            PatrolScheme scheme = patrolSchemeService.Find(schemeId).Result;
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
        /// Updates the scheme.
        /// </summary>
        /// <param name="model">The model.</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/13 19:03
        /// 修改者：
        /// 修改时间：
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
            var result = patrolSchemeService.UpdateScheme(patrolScheme);
            return RedirectToAction("SchemeList");
        }
    }
}