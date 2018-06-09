using EPS.BLL;
using EPS.Common;
using EPS.IBLL;
using EPS.Model;
using EPS.UI.Portal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.ComponentModel.DataAnnotations;


namespace EPS.UI.Portal.Controllers
{

    public class SystemManagementController : BaseController
    {
        [Ninject.Inject]
        public IEmployeeService EmployeeService { get; set; }

        [Ninject.Inject]
        public IDepartmentService DepartmentService { get; set; }

        [Ninject.Inject]
        public IGroupService GroupService { get; set; }

        [Ninject.Inject]
        public IRoleService RoleService { get; set; }

        [Ninject.Inject]
        public IUserService UserService { get; set; }

        /// <summary>
        /// Employees the list.
        /// </summary>
        /// <returns>
        /// </returns>
        /// 创建者：王一鹤
        /// 创建日期：2018/5/8 9:09
        /// 修改人：
        /// 修改日期：
        public ActionResult EmployeeList()
        {
            return View();
        }


        public ActionResult _EmployeeList(int companyId = 0, int departmentId = 0, int groupId = 0, int employeeId = 0, int patrolRouteId = 0, int pageIndex = 1, int pagesize = 0)
        {
            List<EmployeeModel> modelList = new List<EmployeeModel>();

            pagesize = pagesize == 0 ? ControllerCommon.PageSize : pagesize;
            var result = EmployeeService.GetEmployeeList(companyId, departmentId, groupId, employeeId, pagesize, pageIndex);
            List<Employee> employeeList = result.Result;
            foreach (var item in employeeList)
            {
                EmployeeModel model = new EmployeeModel()
                {
                    Id = item.Id,
                    Number = item.Number,
                    Name = item.Name,
                    GroupId = item.GroupId,
                    GroupName = item.Group.Name,
                    DepartmentId = item.DepartmentId,
                    DepartmentName = item.Department.Name,
                    CompanyId = item.CompanyId,
                    CompanyName = item.Company.Name

                };
                modelList.Add(model);
            }

            GetPaginationModel(modelList.Count, result.TotalCount, pageIndex, pagesize);

            ViewBag.Model = modelList;
            return PartialView();

        }
        /// <summary>
        /// Adds the employee.
        /// </summary>
        /// <returns>
        /// </returns>
        /// 创建者：王一鹤
        /// 创建日期：2018/5/8 16:28
        /// 修改人：
        /// 修改日期：
        public ActionResult AddEmployee()
        {
            return View();
        }
        [HttpPost]
        public ActionResult AddEmployee(EmployeeModel model)
        {
            Employee employee = new Employee()
            {
                Number = model.Number,
                Name = model.Name,
                GroupId = model.GroupId,
                DepartmentId = model.DepartmentId,
                CompanyId = model.CompanyId
            };
            var result = EmployeeService.Add(employee);
            if (!result.State)
            {
                return Content(result.Message);
            }

            return RedirectToAction("EmployeeList");
        }
        /// <summary>
        /// Updates the employee.
        /// </summary>
        /// <param name="employeeId">The employee identifier.</param>
        /// <returns>
        /// </returns>
        /// 创建者：王一鹤
        /// 创建日期：2018/5/8 16:28
        /// 修改人：
        /// 修改日期：
        public ActionResult UpdateEmployee(int employeeId)
        {
            Employee employee = EmployeeService.Find(employeeId).Result;
            EmployeeModel model = new EmployeeModel
            {
                Id = employee.Id,
                Number = employee.Number,
                Name = employee.Name,
                CompanyId = employee.CompanyId,
                CompanyName = employee.Company.Name,
                DepartmentId = employee.DepartmentId,
                DepartmentName = employee.Department.Name,
                GroupId = employee.GroupId,
                GroupName = employee.Group.Name,


            };

            return View(model);
        }
        [HttpPost]
        public ActionResult UpdateEmployee(EmployeeModel model)
        {
            Employee employee = new Employee
            {
                Id = model.Id,
                Number = model.Number,
                Name = model.Name,
                GroupId = model.GroupId,
                DepartmentId = model.DepartmentId,
                CompanyId = model.CompanyId,
            };
            var result = EmployeeService.UpdateEmployee(employee);
            return RedirectToAction("EmployeeList");
        }
        /// <summary>
        /// Deletes the employee by identifier.
        /// </summary>
        /// <param name="employeeId">The employee identifier.</param>
        /// <param name="fc">The fc.</param>
        /// <returns>
        /// </returns>
        /// 创建者：王一鹤
        /// 创建日期：2018/5/8 16:28
        /// 修改人：
        /// 修改日期：
        [HttpPost]
        public ActionResult DeleteEmployeeById(int employeeId, FormCollection fc = null)
        {
            var result = EmployeeService.DeleteById(employeeId);
            return Json(result);
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

            return View();
        }
        public ActionResult _DepartmentList(int companyId = 0, int departmentId = 0, int pageIndex = 1, int pagesize = 0)
        {
            List<DepartmentModel> modelList = new List<DepartmentModel>();

            pagesize = pagesize == 0 ? ControllerCommon.PageSize : pagesize;
            var result = DepartmentService.GetDepartmentList(companyId, departmentId, pagesize, pageIndex);
            List<Department> departmentList = result.Result;
            foreach (var item in departmentList)
            {
                DepartmentModel model = new DepartmentModel()
                {
                    Id = item.Id,
                    Number = item.Number,
                    Name = item.Name,
                    CompanyId = item.CompanyId,
                    CompanyName = item.Company.Name,

                };
                modelList.Add(model);
            }

            GetPaginationModel(modelList.Count, result.TotalCount, pageIndex, pagesize);

            ViewBag.Model = modelList;
            return PartialView();
        }
        /// <summary>
        /// Adds the department.
        /// </summary>
        /// <returns>
        /// </returns>
        /// 创建者：王一鹤
        /// 创建日期：2018/5/8 17:57
        /// 修改人：
        /// 修改日期：
        public ActionResult AddDepartment()
        {
            return View();
        }
        [HttpPost]
        public ActionResult AddDepartment(DepartmentModel model)
        {
            Department department = new Department()
            {
                Number = model.Number,
                Name = model.Name,
                CompanyId = model.CompanyId
            };
            var result = DepartmentService.Add(department);
            if (!result.State)
            {
                return Content(result.Message);
            }

            return RedirectToAction("DepartmentList");
        }
        /// <summary>
        /// Updates the department.
        /// </summary>
        /// <param name="departmentId">The department identifier.</param>
        /// <returns>
        /// </returns>
        /// 创建者：王一鹤
        /// 创建日期：2018/5/8 18:01
        /// 修改人：
        /// 修改日期：
        public ActionResult UpdateDepartment(int departmentId)
        {
            Department department = DepartmentService.Find(departmentId).Result;
            DepartmentModel model = new DepartmentModel
            {
                Id = department.Id,
                Number = department.Number,
                Name = department.Name,
                CompanyId = department.CompanyId,

            };

            return View(model);
        }
        [HttpPost]
        public ActionResult UpdateDepartment(DepartmentModel model)
        {
            Department department = new Department
            {
                Id = model.Id,
                Number = model.Number,
                Name = model.Name,
                CompanyId = model.CompanyId,
            };
            var result = DepartmentService.UpdateDepartment(department);
            return RedirectToAction("DepartmentList");
        }
        [HttpPost]
        public ActionResult DeleteDepartmentById(int departmentId, FormCollection fc = null)
        {
            var result = DepartmentService.DeleteById(departmentId);
            return Json(result);
        }


        /// <summary>
        /// Groups the list.
        /// </summary>
        /// <returns>
        /// </returns>
        /// 创建者：王一鹤
        /// 创建日期：2018/5/8 16:30
        /// 修改人：
        /// 修改日期：
        public ActionResult GroupList()
        {
            return View();
        }
        public ActionResult _GroupList(int companyId = 0, int departmentId = 0, int groupId = 0, int pageIndex = 1, int pagesize = 0)
        {

            List<GroupModel> modelList = new List<GroupModel>();

            pagesize = pagesize == 0 ? ControllerCommon.PageSize : pagesize;
            var result = GroupService.GetGroupList(companyId, departmentId, groupId, pagesize, pageIndex);
            List<Group> groupList = result.Result;
            foreach (var item in groupList)
            {
                GroupModel model = new GroupModel()
                {
                    Id = item.Id,
                    Number = item.Number,
                    Name = item.Name,
                    DepartmentId = item.DepartmentId,
                    DepartmentName = item.Department.Name,
                    CompanyId = item.CompanyId,
                    CompanyName = item.Company.Name,

                };
                modelList.Add(model);
            }

            GetPaginationModel(modelList.Count, result.TotalCount, pageIndex, pagesize);

            ViewBag.Model = modelList;
            return PartialView();
        }
        /// <summary>
        /// Adds the group.
        /// </summary>
        /// <returns>
        /// </returns>
        /// 创建者：王一鹤
        /// 创建日期：2018/5/8 17:34
        /// 修改人：
        /// 修改日期：
        public ActionResult AddGroup()
        {
            return View();
        }
        [HttpPost]
        public ActionResult AddGroup(GroupModel model)
        {
            Group group = new Group()
            {
                Number = model.Number,
                Name = model.Name,
                DepartmentId = model.DepartmentId,
                CompanyId = model.CompanyId
            };
            var result = GroupService.Add(group);
            if (!result.State)
            {
                return Content(result.Message);
            }

            return RedirectToAction("GroupList");
        }

        /// <summary>
        /// Updates the group.
        /// </summary>
        /// <param name="groupId">The group identifier.</param>
        /// <returns>
        /// </returns>
        /// 创建者：王一鹤
        /// 创建日期：2018/5/8 17:01
        /// 修改人：
        /// 修改日期：
        public ActionResult UpdateGroup(int groupId)
        {
            Group group = GroupService.Find(groupId).Result;
            GroupModel model = new GroupModel
            {
                Id = group.Id,
                Number = group.Number,
                Name = group.Name,
                CompanyId = group.CompanyId,
                CompanyName = group.Company.Name,
                DepartmentId = group.DepartmentId,
                DepartmentName = group.Department.Name,

            };

            return View(model);
        }
        [HttpPost]
        public ActionResult UpdateGroup(GroupModel model)
        {
            Group group = new Group
            {
                Id = model.Id,
                Number = model.Number,
                Name = model.Name,
                DepartmentId = model.DepartmentId,
                CompanyId = model.CompanyId,
            };
            var result = GroupService.UpdateGroup(group);
            return RedirectToAction("GroupList");
        }
        [HttpPost]
        public ActionResult DeleteGroupById(int groupId, FormCollection fc = null)
        {
            var result = GroupService.DeleteById(groupId);
            return Json(result);
        }

        /// <summary>
        /// 权限管理
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/6/9 16:27
        /// 修改者：
        /// 修改时间：
        public ActionResult RoleManagementList()
        {
            return View();
        }


        /// <summary>
        /// 权限管理
        /// </summary>
        /// <param name="pageIndex">页码号</param>
        /// <param name="pageSize">页容量</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/6/9 16:45
        /// 修改者：
        /// 修改时间：
        public ActionResult _RoleManagementListList(int pageIndex = 1, int pageSize = 0)
        {
            List<UserModel> modelList = new List<UserModel>();

            pageSize = pageSize == 0 ? ControllerCommon.PageSize : pageSize;
            var result = UserService.GetUserList(pageIndex, pageSize);
            List<User> employeeList = result.Result;
            foreach (var item in employeeList)
            {
                UserModel model = new UserModel()
                {
                    Id = item.Id,
                    UserName = item.UserName,
                    CreateTime = item.CreateTime,
                    EmployeeId = item.EmployeeId,
                    EmployeeName = item.Employee.Name,
                    RoleId = item.RoleId,
                    RoleName = item.Role.Name
                };
                modelList.Add(model);
            }

            GetPaginationModel(modelList.Count, result.TotalCount, pageIndex, pageSize);

            ViewBag.Model = modelList;
            return PartialView();

        }


        /// <summary>
        /// Updates the employee.
        /// </summary>
        /// <param name="employeeId">The employee identifier.</param>
        /// <returns>
        /// </returns>
        /// 创建者：王一鹤
        /// 创建日期：2018/5/8 16:28
        /// 修改人：
        /// 修改日期：
        public ActionResult UpdateRole(int userId)
        {
            User user = UserService.Find(userId).Result;
            UserModel model = new UserModel
            {
                Id = user.Id,
                RoleId = user.RoleId
            };

            return View(model);
        }

        [HttpPost]
        public ActionResult UpdateRole(UserModel model)
        {
            User user = new User
            {
                Id = model.Id,
                RoleId = model.RoleId
            };
            var result = UserService.UpdateRole(user);
            return RedirectToAction("RoleManagementList");
        }
    }
}