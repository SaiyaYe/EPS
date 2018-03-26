using EPS.BLL;
using EPS.Common;
using EPS.IBLL;
using EPS.Model;
using EPS.UI.Portal.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EPS.UI.Portal.Controllers
{

    public class TransactionController : BaseController
    {
        [Ninject.Inject]
        public IPatrolPointService PatrolPointService { get; set; }

        [Ninject.Inject]
        public IPatrolSchemeService PatrolSchemeService { get; set; }

        [Ninject.Inject]
        public IPatrolReportService PatrolReportService { get; set; }

        [Ninject.Inject]
        public IEmployeeService EmployeeService { get; set; }

        #region 巡检计划
        /// <summary>
        /// 计划列表
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/10 15:56
        /// 修改者：
        /// 修改时间：
        public ActionResult SchemeList()
        {
            return View();
        }

        /// <summary>
        /// 分部计划列表
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/1/31 10:03
        /// 修改者：
        /// 修改时间：
        public ActionResult _SchemeList(int companyId = 0, int departmentId = 0, int groupId = 0, int employeeId = 0, int patrolRouteId = 0, int pageIndex = 1, int pagesize = 0)
        {
            List<PatrolSchemeModel> modelList = new List<PatrolSchemeModel>();

            pagesize = pagesize == 0 ? ControllerCommon.PageSize : pagesize;
            var result = PatrolSchemeService.GetPatrolSchemeList(companyId, departmentId, groupId, employeeId, patrolRouteId, pagesize, pageIndex);
            List<PatrolScheme> patrolSchemeList = result.Result;
            foreach (var item in patrolSchemeList)
            {
                PatrolSchemeModel model = new PatrolSchemeModel()
                {
                    Id = item.Id,
                    Number = item.Number,
                    EmployeeId = item.EmployeeId,
                    Employee = new EmployeeModel
                    {
                        Id = item.EmployeeId,
                        Name = item.Employee.Name,
                        CompanyId = item.Employee.CompanyId,
                        DepartmentId = item.Employee.DepartmentId,
                        GroupId = item.Employee.GroupId
                    },
                    PatrolRouteId = item.PatrolRouteId,
                    PatrolRouteName = item.PatrolRoute.Name,
                    SchemeDate = item.SchemeDate,
                    StartDate = item.StartDate,
                    EndDate = item.EndDate,
                    IsCompleted = item.IsCompleted,
                    Remark = item.Remark
                };
                modelList.Add(model);
            }

            GetPaginationModel(modelList.Count, result.TotalCount, pageIndex, pagesize);

            ViewBag.Model = modelList;
            return PartialView();
        }

        /// <summary>
        /// 添加巡检计划页面
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

        /// <summary>
        /// 添加巡检计划
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
            var result = PatrolSchemeService.Add(patrolScheme);
            if (!result.State)
            {
                return Content(result.Message);
            }

            return RedirectToAction("SchemeList");
        }

        /// <summary>
        /// 根据id删除巡检计划
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
            var result = PatrolSchemeService.DeleteById(schemeId);
            return Json(result);
        }

        /// <summary>
        /// 更新巡检计划页面
        /// </summary>
        /// <param name="schemeId">The scheme id</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/1 17:11
        /// 修改者：
        /// 修改时间：
        public ActionResult UpdateScheme(int schemeId)
        {
            PatrolScheme scheme = PatrolSchemeService.Find(schemeId).Result;
            PatrolSchemeModel model = new PatrolSchemeModel
            {
                Id = scheme.Id,
                Number = scheme.Number,
                EmployeeId = scheme.EmployeeId,
                Employee = new EmployeeModel
                {
                    Id = scheme.EmployeeId,
                    Name = scheme.Employee.Name,
                    CompanyId = scheme.Employee.CompanyId,
                    DepartmentId = scheme.Employee.DepartmentId,
                    GroupId = scheme.Employee.GroupId
                },
                PatrolRouteId = scheme.PatrolRouteId,
                PatrolRouteName = scheme.PatrolRoute.Name,
                SchemeDate = scheme.SchemeDate,
                StartDate = scheme.StartDate,
                EndDate = scheme.EndDate
            };
            return View(model);
        }

        /// <summary>
        /// 更新巡检计划
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
                StartDate = DateTime.Parse(model.DateRange.Split(new char[] { '-' })[0].Trim()),
                EndDate = DateTime.Parse(model.DateRange.Split(new char[] { '-' })[0].Trim())
            };
            var result = PatrolSchemeService.UpdateScheme(patrolScheme);
            return RedirectToAction("SchemeList");
        }

        /// <summary>
        /// 导出Word报表
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/24 17:06
        /// 修改者：
        /// 修改时间：
        public FileResult ExportWord()
        {
            MemoryStream stream = NpoiOperator.ExportWordStream();
            return File(stream, "application/ms-word", "wordtest.docx");
        }
        #endregion

        #region 巡检结果上报
        /// <summary>
        /// 巡检报告列表
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/10 16:03
        /// 修改者：
        /// 修改时间：
        public ActionResult PatrolReportList()
        {
            return View();
        }

        /// <summary>
        /// 分部巡检报告列表
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/10 15:56
        /// 修改者：
        /// 修改时间：
        public ActionResult _PatrolReportList(int companyId = 0, int departmentId = 0, int groupId = 0, int employeeId = 0, int patrolPointId = 0, int patrolRouteId = 0, int pageIndex = 1, int pagesize = 0)
        {
            List<PatrolReportModel> modelList = new List<PatrolReportModel>();

            pagesize = pagesize == 0 ? ControllerCommon.PageSize : pagesize;
            var result = PatrolReportService.GetPatrolReportList(companyId, departmentId, groupId, employeeId, patrolPointId, patrolRouteId, pageIndex, pagesize);
            List<PatrolReport> patrolReportList = result.Result;
            foreach (var item in patrolReportList)
            {
                PatrolReportModel model = new PatrolReportModel()
                {
                    Id = item.Id,
                    PatrolPointId = item.PatrolPoint.Id,
                    PatrolPoint = new PatrolPointModel
                    {
                        Id = item.PatrolPoint.Id,
                        PoleTowerNumber = item.PatrolPoint.PoleTowerNumber,
                        Latitude = item.PatrolPoint.Latitude,
                        Longitude = item.PatrolPoint.Longitude,
                        CountyId = item.PatrolPoint.CountyId,
                        CountyName = item.PatrolPoint.County.Name,
                        CityId = item.PatrolPoint.County.CityId,
                        CityName = item.PatrolPoint.County.City.Name,
                        ProvinceId = item.PatrolPoint.County.City.ProvinceId,
                        ProvinceName = item.PatrolPoint.County.City.Province.Name
                    },
                    DefectType = new DictionaryModel
                    {
                        Code = item.DefectType.Code,
                        Type = item.DefectType.Type
                    },
                    DefectLevelId = item.DefectLevelId,
                    DefectLevel = new DictionaryModel
                    {
                        Code = item.DefectLevel.Code,
                        Type = item.DefectLevel.Type
                    },
                    ReportEmployeeId = item.ReportEmployeeId,
                    ReportEmployee = new EmployeeModel
                    {
                        Id = item.ReportEmployee.Id,
                        Name = item.ReportEmployee.Name
                    },
                    PatrolRouteName = item.PatrolRoute.Name,
                    ReportTime = item.ReportTime,

                };
                modelList.Add(model);
            }

            GetPaginationModel(modelList.Count, result.TotalCount, pageIndex, pagesize);
            ViewBag.Model = modelList;
            return PartialView();
        }

        /// <summary>
        /// 添加巡检报告页面
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/10 16:29
        /// 修改者：
        /// 修改时间：
        public ActionResult AddPatrolReport()
        {
            return View();
        }

        /// <summary>
        /// 添加巡检报告
        /// </summary>
        /// <param name="model">The model.</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/13 19:03
        /// 修改者：
        /// 修改时间：
        [HttpPost]
        public ActionResult AddPatrolReport(PatrolReportModel model)
        {
            PatrolReport patrolReport = new PatrolReport()
            {
                ReportEmployeeId = model.ReportEmployeeId,
                PatrolRouteId = model.PatrolRouteId,
                ReportTime = DateTime.Now,
                //Dictionary = new Dictionary
                //{
                //    Code = model.DefectCode,
                //    Type = model.DefectType
                //}
            };
            var result = PatrolReportService.Add(patrolReport);
            if (!result.State)
            {
                return Content(result.Message);
            }

            return RedirectToAction("PatrolReportList");
        }

        /// <summary>
        /// 根据id删除巡检计划
        /// </summary>
        /// <param name="schemeId">The scheme id</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/1 16:45
        /// 修改者：
        /// 修改时间：
        [HttpPost]
        public ActionResult DeletePatrolReportById(int PatrolReportId)
        {
            var result = PatrolReportService.DeleteById(PatrolReportId);
            return Json(result);
        }

        /// <summary>
        /// 更新巡检报告页面
        /// </summary>
        /// <param name="patrolReportId">巡检报告id</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/1 17:11
        /// 修改者：
        /// 修改时间：
        public ActionResult UpdatePatrolReport(int patrolReportId)
        {
            PatrolReport patrolReport = PatrolReportService.Find(patrolReportId).Result;
            PatrolReportModel model = new PatrolReportModel
            {
                Id = patrolReport.Id,
                ReportEmployeeId = patrolReport.ReportEmployeeId,
                ReportEmployee = new EmployeeModel
                {
                    Id = patrolReport.ReportEmployeeId,
                    Name = patrolReport.ReportEmployee.Name,
                    CompanyId = patrolReport.ReportEmployee.CompanyId,
                    DepartmentId = patrolReport.ReportEmployee.DepartmentId,
                    GroupId = patrolReport.ReportEmployee.GroupId
                },
                PatrolPointId = patrolReport.PatrolPointId,
                PatrolPoint = new PatrolPointModel
                {
                    PoleTowerNumber = patrolReport.PatrolPoint.PoleTowerNumber
                },
                PatrolRouteId = patrolReport.PatrolRouteId,
                PatrolRouteName = patrolReport.PatrolRoute.Name,
                ReportTime = patrolReport.ReportTime
            };
            return View(model);
        }


        /// <summary>
        /// 更新巡检报告
        /// </summary>
        /// <param name="model">The model.</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/10 16:44
        /// 修改者：
        /// 修改时间：
        [HttpPost]
        public ActionResult UpdatePatrolReport(PatrolReportModel model)
        {
            PatrolReport patrolReport = new PatrolReport
            {
                Id = model.Id,
                PatrolPointId = model.PatrolPointId,
                PatrolRouteId = model.PatrolRouteId,
                ReportEmployeeId = model.ReportEmployeeId,
                DefectTypeId = model.DefectTypeId,
                ReportTime = model.ReportTime,
            };
            var result = PatrolReportService.UpdatePatrolReport(patrolReport);
            return RedirectToAction("PatrolReportList");
        }
        #endregion

        #region 巡检点设置
        /// <summary>
        /// 巡检点列表
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/17 20:26
        /// 修改者：
        /// 修改时间：
        public ActionResult PatrolPointList()
        {
            return View();
        }

        /// <summary>
        /// 分部巡检点列表
        /// </summary>
        /// <param name="PatrolRouteId">巡检路线id</param>
        /// <param name="pageSize">页容量</param>
        /// <param name="pageIndex">页码号</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/17 23:26
        /// 修改者：
        /// 修改时间：
        public ActionResult _PatrolPointList(int PatrolRouteId = 0, int pageSize = 0, int pageIndex = 1)
        {
            List<PatrolPointModel> modelList = new List<PatrolPointModel>();

            pageSize = pageSize == 0 ? ControllerCommon.PageSize : pageSize;
            var result = PatrolPointService.GetPatrolPointList(PatrolRouteId, pageSize, pageIndex);
            List<PatrolPoint> patrolPointList = result.Result;

            foreach (var item in patrolPointList)
            {
                PatrolPointModel model = new PatrolPointModel()
                {
                    Id = item.Id,
                    PoleTowerNumber = item.PoleTowerNumber,
                    PatrolPointTypeId = item.PatrolPointTypeId,
                    PatrolPointType = new DictionaryModel
                    {
                        Id = item.PatrolPointTypeId,
                        Code = item.PatrolPointType.Code,
                        Type = item.PatrolPointType.Type
                    },
                    CountyId = item.CountyId,
                    CountyName = item.County.Name,
                    CityId = item.County.CityId,
                    CityName = item.County.City.Name,
                    ProvinceId = item.County.City.ProvinceId,
                    ProvinceName = item.County.City.Province.Name,
                    CreateTime = item.CreateTime,
                    Latitude = item.Latitude,
                    Longitude = item.Longitude
                };
                modelList.Add(model);
            }

            GetPaginationModel(modelList.Count, result.TotalCount, pageIndex, pageSize);

            ViewBag.Model = modelList;
            return PartialView();

        }

        #endregion

        public ActionResult Set()
        {
            return View();
        }
        public ActionResult SetRouteList()
        {
            return View();
        }
    }
}