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
    /// <summary>
    /// 类名称：SysmanageController
    /// 命名空间：EPS.UI.Portal.Controllers
    /// 创建者：王一鹤
    /// 创建日期：2018/2/2
    /// </summary>
    public class SystemManagementController : BaseController
    {
        [Ninject.Inject]
        IEmployeeService EmployeeService { get; set; }

        [Ninject.Inject]
        IDepartmentService DepartmentService { get; set; }

        [Ninject.Inject]
        IGroupService GroupService { get; set; }

        /// <summary>
        /// Employees the list.
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/3 19:20
        /// 修改者：
        /// 修改时间：
        public ActionResult EmployeeList()
        {
            List<Employee> employeeList = EmployeeService.GetElementList().Result;
            List<EmployeeModel> modelList = new List<EmployeeModel>();

            foreach (var item in employeeList)
            {
                EmployeeModel model = new EmployeeModel()
                {
                    Id = item.Id,
                    Name = item.Name,
                    GroupName = item.Group.Name,
                    GroupId = item.GroupId,
                    DepartmentName = item.Department.Name,
                    DepartmentId = item.Department.Id,
                    CompanyName = item.Company.Name,
                    CompanyId = item.CompanyId,
                };
                modelList.Add(model);
            }

            ViewBag.Model = modelList;
            return View();

        }

        /// <summary>
        /// Departments the list.
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/3 19:20
        /// 修改者：
        /// 修改时间：
        public ActionResult DepartmentList()
        {
            List<Department> departmentList = DepartmentService.GetElementList().Result;
            List<DepartmentModel> modelList = new List<DepartmentModel>();

            foreach (var item in departmentList)
            {
                DepartmentModel model = new DepartmentModel()
                {

                    Id = item.Id,
                    Name = item.Name,
                    CompanyName = item.Company.Name,
                    CompanyId = item.Company.Id,
                };
                modelList.Add(model);
            }

            ViewBag.Model = modelList;
            return View();
        }

        /// <summary>
        /// Groups the list.
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/3 19:21
        /// 修改者：
        /// 修改时间：
        public ActionResult GroupList()
        {
            List<Group> employeeList = GroupService.GetElementList().Result;
            List<GroupModel> modelList = new List<GroupModel>();

            foreach (var item in employeeList)
            {
                GroupModel model = new GroupModel()
                {
                    Id = item.Id,
                    Name = item.Name,
                    DepartmentName = item.Department.Name,
                    DepartmentId = item.DepartmentId,
                    CompanyName = item.Department.Company.Name,
                    CompanyId = item.Department.CompanyId,
                };
                modelList.Add(model);
            }

            ViewBag.Model = modelList;
            return View();
        }
    }
}