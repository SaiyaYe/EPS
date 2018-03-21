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
        [Ninject.Inject]
        public ICompanyService CompanyService { get; set; }

        [Ninject.Inject]
        public IDepartmentService DepartmentService { get; set; }

        [Ninject.Inject]
        public IGroupService GroupService { get; set; }

        [Ninject.Inject]
        public IEmployeeService EmployeeService { get; set; }

        [Ninject.Inject]
        public IPatrolRouteService PatrolRouteService { get; set; }

        [Ninject.Inject]
        public IDictionaryService DictionaryService { get; set; }

        /// <summary>
        /// 公司部门小组员工选项控件
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/4 3:00
        /// 修改者：
        /// 修改时间：
        public ActionResult CompanyDepartmentGroupEmployee(int companyId = 0, int departmentId = 0, int groupId = 0, int employeeId = 0)
        {
            //公司
            var companyList = CompanyService.GetElementList().Result;
            if (companyList == null)
            {
                return PartialView();
            }

            var selectCompanyList = companyList.Select(u => new SelectListItem
            {
                Text = u.Name,
                Value = u.Id.ToString()
            }).ToList();
            selectCompanyList.Insert(0, new SelectListItem { Text = "请选择公司", Value = "0", Selected = true });

            if (companyId <= 0)
            {
                selectCompanyList[0].Selected = true;
                ViewBag.CompanyList = selectCompanyList;
                ViewBag.DepartmentList = new List<SelectListItem> { new SelectListItem { Text = "请选择部门", Value = "0", Selected = true } };
                ViewBag.GroupList = new List<SelectListItem> { new SelectListItem { Text = "请选择小组", Value = "0", Selected = true } };
                ViewBag.EmployeeList = new List<SelectListItem> { new SelectListItem { Text = "请选择员工", Value = "0", Selected = true } };
                return PartialView();
            }

            var selectedCompanyItem = selectCompanyList.Find(u => u.Value == companyId.ToString());
            if (selectedCompanyItem != null)
            {
                selectedCompanyItem.Selected = true;
            }
            ViewBag.CompanyList = selectCompanyList;

            //部门
            var departmentList = DepartmentService.Where(u => u.CompanyId == companyId).Result;
            var selectDepartmentList = departmentList.Select(u => new SelectListItem
            {
                Text = u.Name,
                Value = u.Id.ToString()
            }).ToList();
            selectDepartmentList.Insert(0, new SelectListItem { Text = "请选择部门", Value = "0", Selected = true });

            if (departmentId <= 0)
            {
                selectDepartmentList[0].Selected = true;
                ViewBag.DepartmentList = selectDepartmentList;
                ViewBag.GroupList = new List<SelectListItem> { new SelectListItem { Text = "请选择小组", Value = "0", Selected = true } };
                ViewBag.EmployeeList = new List<SelectListItem> { new SelectListItem { Text = "请选择员工", Value = "0", Selected = true } };
                return PartialView();
            }

            var selectedDepartmentItem = selectDepartmentList.Find(u => u.Value == departmentId.ToString());
            if (selectedDepartmentItem != null)
            {
                selectedDepartmentItem.Selected = true;
            }
            ViewBag.DepartmentList = selectDepartmentList;

            //小组
            var groupList = GroupService.Where(u => u.DepartmentId == departmentId).Result;
            var selectGroupList = groupList.Select(u => new SelectListItem
            {
                Text = u.Name,
                Value = u.Id.ToString()
            }).ToList();
            selectGroupList.Insert(0, new SelectListItem { Text = "请选择部门", Value = "0", Selected = true });

            if (groupId <= 0)
            {
                selectGroupList[0].Selected = true;
                ViewBag.GroupList = selectGroupList;
                ViewBag.EmployeeList = new List<SelectListItem> { new SelectListItem { Text = "请选择员工", Value = "0", Selected = true } };
                return PartialView();
            }

            var selectedGroupItem = selectGroupList.Find(u => u.Value == groupId.ToString());
            if (selectedGroupItem != null)
            {
                selectedGroupItem.Selected = true;
            }
            ViewBag.GroupList = selectGroupList;

            //员工
            var employeeList = EmployeeService.Where(u => u.GroupId == groupId).Result;
            var selectEmployeeList = employeeList.Select(u => new SelectListItem
            {
                Text = u.Name,
                Value = u.Id.ToString()
            }).ToList();
            selectEmployeeList.Insert(0, new SelectListItem { Text = "请选择员工", Value = "0", Selected = true });

            if (employeeId <= 0)
            {
                selectEmployeeList[0].Selected = true;
                ViewBag.EmployeeList = selectEmployeeList;
                return PartialView();
            }

            var selectedEmployeeItem = selectEmployeeList.Find(u => u.Value == employeeId.ToString());
            if (selectedEmployeeItem != null)
            {
                selectedEmployeeItem.Selected = true;
            }
            ViewBag.EmployeeList = selectEmployeeList;

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
            var departmentList = DepartmentService.Where(u => u.Id == companyId).Result;
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
            var groupList = GroupService.Where(u => u.DepartmentId == departmentId).Result;
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
            var employeeList = EmployeeService.Where(u => u.GroupId == groupId).Result;
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
        /// 巡检路线
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/13 16:10
        /// 修改者：
        /// 修改时间：
        public ActionResult PatrolRoute(int patrolRouteId = 0)
        {
            var patrolRouteList = PatrolRouteService.GetElementList().Result;
            if (patrolRouteList == null)
            {
                return PartialView();
            }

            var selectList = patrolRouteList.Select(u => new SelectListItem
            {
                Text = u.Name,
                Value = u.Id.ToString()
            }).ToList();
            selectList.Insert(0, new SelectListItem { Text = "请选择巡检路线", Value = "0" });

            if (patrolRouteId <= 0)
            {
                selectList[0].Selected = true;
            }
            else
            {
                var item = selectList.Find(u => u.Value == patrolRouteId.ToString());
                if (item != null)
                {
                    item.Selected = true;
                }
            }
            ViewBag.PatrolRouteList = selectList;
            return PartialView();
        }

        /// <summary>
        /// 缺陷类型
        /// </summary>
        /// <param name="defectTypeId">缺陷类型id</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/18 1:58
        /// 修改者：
        /// 修改时间：
        public ActionResult DefectType(int defectTypeId = 0)
        {
            var defectTypeList = DictionaryService.Where(u => u.Code.StartsWith("D1")).Result;
            if (defectTypeList == null)
            {
                return PartialView();
            }

            var selectList = defectTypeList.Select(u => new SelectListItem
            {
                Text = u.Type,
                Value = u.Id.ToString()
            }).ToList();
            selectList.Insert(0, new SelectListItem { Text = "请选择缺陷类型", Value = "0" });

            if (defectTypeId <= 0)
            {
                selectList[0].Selected = true;
            }
            else
            {
                var item = selectList.Find(u => u.Value == defectTypeId.ToString());
                if (item != null)
                {
                    item.Selected = true;
                }
            }
            ViewBag.DefectTypeList = selectList;
            return PartialView();
        }

        /// <summary>
        /// 缺陷等级
        /// </summary>
        /// <param name="defectLevelId">缺陷等级id</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/18 2:09
        /// 修改者：
        /// 修改时间：
        public ActionResult DefectLevel(int defectLevelId = 0)
        {
            var defectLevelList = DictionaryService.Where(u => u.Code.StartsWith("D2")).Result;
            if (defectLevelList == null)
            {
                return PartialView();
            }

            var selectList = defectLevelList.Select(u => new SelectListItem
            {
                Text = u.Type,
                Value = u.Id.ToString()
            }).ToList();
            selectList.Insert(0, new SelectListItem { Text = "请选择缺陷类型", Value = "0" });

            if (defectLevelId <= 0)
            {
                selectList[0].Selected = true;
            }
            else
            {
                var item = selectList.Find(u => u.Value == defectLevelId.ToString());
                if (item != null)
                {
                    item.Selected = true;
                }
            }
            ViewBag.DefectLevelList = selectList;
            return PartialView();
        }

    }
}