using EPS.Common;
using EPS.DALFactory;
using EPS.IBLL;
using EPS.IDAL;
using EPS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.BLL
{
    public class PatrolSchemeService : BaseService<PatrolScheme>, IPatrolSchemeService
    {
        /// <summary>
        /// 获取巡检计划列表
        /// </summary>
        /// <param name="pageSize">页容量</param>
        /// <param name="pageIndex">页码号</param>
        /// <param name="companyId">公司Id</param>
        /// <param name="departmentId">部门Id</param>
        /// <param name="groupId">小组Id</param>
        /// <param name="employeeId">员工Id</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/13 10:51
        /// 修改者：
        /// 修改时间：
        public ServiceResultList<PatrolScheme> GetPatrolSchemeList(int companyId = 0, int departmentId = 0, int groupId = 0, int employeeId = 0, int patrolRouteId = 0, int pageSize = 15, int pageIndex = 1)
        {
            var query = DbSession.EntityQueryable<PatrolScheme>().Query();
            if (companyId > 0)
            {
                query = query.Where(u => u.Employee.CompanyId == companyId);
            }

            if (departmentId > 0)
            {
                query = query.Where(u => u.Employee.DepartmentId == departmentId);
            }

            if (groupId > 0)
            {
                query = query.Where(u => u.Employee.GroupId == groupId);
            }

            if (employeeId > 0)
            {
                query = query.Where(u => u.EmployeeId == employeeId);
            }

            if (patrolRouteId > 0)
            {
                query = query.Where(u => u.PatrolRouteId == patrolRouteId);
            }

            int totalCount = query.Count();
            var result = query.OrderBy(u => u.Id)
                              .Skip(pageSize * (pageIndex - 1))
                              .Take(pageSize);

            return new ServiceResultList<PatrolScheme>
            {
                Result = result.ToList(),
                TotalCount = totalCount,
                State = true
            };
        }

        /// <summary>
        /// 更新巡检计划
        /// </summary>
        /// <param name="scheme">巡检计划</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/13 10:52
        /// 修改者：
        /// 修改时间：
        public ServiceResult<bool> UpdateScheme(PatrolScheme scheme)
        {
            var model = DbSession.EntityQueryable<PatrolScheme>().Find(scheme.Id).Result;
            if (model == null)
            {
                return new ServiceResult<bool>
                {
                    State = false,
                    Message = "找不到该巡检计划"
                };
            }
            model.Number = scheme.Number;
            model.PatrolRouteId = scheme.PatrolRouteId;
            model.EmployeeId = scheme.EmployeeId;
            model.StartDate = scheme.StartDate;
            model.EndDate = scheme.EndDate;

            DbSession.SaveChanges();
            return new ServiceResult<bool>()
            {
                Result = true,
                State = true
            };
        }
    }
}
