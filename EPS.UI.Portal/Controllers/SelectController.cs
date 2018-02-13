using EPS.BLL;
using EPS.IBLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace EPS.UI.Portal.Controllers
{
    public class SelectController : Controller
    {
        ICompanyService companyService = new CompanyService();
        IDepartmentService departmentService = new DepartmentService();
        IGroupService groupService = new GroupService();
        IEmployeeService employeeService = new EmployeeService();
        IPatrolRouteService patrolRouteService = new PatrolRouteService();

        /// <summary>
        /// 公司部门小组员工选项控件
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/4 3:00
        /// 修改者：
        /// 修改时间：
        public ActionResult CompanyDepartmentGroupEmployee()
        {
            var companyList = companyService.GetElementList().Result;
            if (companyList == null)
            {
                return PartialView();
            }

            ViewBag.CompanyList = companyList.Select(u => new SelectListItem
            {
                Text = u.Name,
                Value = u.Id.ToString()
            }).ToList();

            return PartialView();
        }

        /// <summary>
        /// 公司改变
        /// </summary>
        /// <param name="companyId">The company identifier.</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/4 3:00
        /// 修改者：
        /// 修改时间：
        public ActionResult CompanyChange(int companyId = 0)
        {
            var departmentList = departmentService.Where(u => u.Id == companyId).Result;
            if (departmentList == null)
            {
                return PartialView("component/SelectOptions", new List<SelectListItem>());
            }

            var model = departmentList.Select(u => new SelectListItem()
            {
                Text = u.Name,
                Value = u.Id.ToString()
            }).ToList();

            StringBuilder result = new StringBuilder();
            result.Append("<option selected=\"selected\" value=0>请选择部门</option>");
            foreach (var item in model)
            {
                result.AppendLine("<option value=" + item.Value + ">" + item.Text + "</option>");
            }
            return Content(result.ToString());
        }

        /// <summary>
        /// Departments the change.
        /// </summary>
        /// <param name="departmentId">The department identifier.</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/4 3:01
        /// 修改者：
        /// 修改时间：
        public ActionResult DepartmentChange(int departmentId = 0)
        {
            var groupList = groupService.Where(u => u.DepartmentId == departmentId).Result;
            if (groupList == null)
            {
                return PartialView("component/SelectOptions", new List<SelectListItem>());
            }

            var model = groupList.Select(u => new SelectListItem()
            {
                Text = u.Name,
                Value = u.Id.ToString()
            }).ToList();

            StringBuilder result = new StringBuilder();
            result.Append("<option selected=\"selected\" value=0>请选择小组</option>");
            foreach (var item in model)
            {
                result.AppendLine("<option value=" + item.Value + ">" + item.Text + "</option>");
            }

            return Content(result.ToString());
        }

        /// <summary>
        /// Groups the change.
        /// </summary>
        /// <param name="groupId">The group identifier.</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/4 3:01
        /// 修改者：
        /// 修改时间：
        public ActionResult GroupChange(int groupId = 0)
        {
            var employeeList = employeeService.Where(u => u.GroupId == groupId).Result;
            if (employeeList == null)
            {
                return PartialView("component/SelectOptions", new List<SelectListItem>());
            }

            var model = employeeList.Select(u => new SelectListItem()
            {
                Text = u.Name,
                Value = u.Id.ToString()
            }).ToList();

            StringBuilder result = new StringBuilder();
            result.Append("<option selected=\"selected\" value=0>请选择员工</option>");
            foreach (var item in model)
            {
                result.AppendLine("<option value=" + item.Value + ">" + item.Text + "</option>");
            }

            return Content(result.ToString());
        }

        /// <summary>
        /// 巡检计划
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/13 16:10
        /// 修改者：
        /// 修改时间：
        public ActionResult PatrolRoute()
        {
            var patrolRouteList = patrolRouteService.GetElementList().Result;
            if (patrolRouteList == null)
            {
                return PartialView();
            }

            ViewBag.PatrolRouteList = patrolRouteList.Select(u => new SelectListItem
            {
                Text = u.Name,
                Value = u.Id.ToString()
            }).ToList();

            return PartialView();
        }

    }
}