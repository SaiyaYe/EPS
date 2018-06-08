using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EPS.Common;
using EPS.DALFactory;
using EPS.IBLL;
using EPS.IDAL;
using EPS.ASModel;

namespace EPS.BLL
{
    /// <summary>
    /// 类名称：PatrolReportService
    /// 命名空间：EPS.BLL
    /// 创建者：王一鹤
    /// 创建日期：2018/2/2
    /// </summary>
    /// <seealso cref="EPS.BLL.BaseService{EPS.Model.PatrolReport}" />
    public class PatrolReportService : BaseService<PatrolReport>, IPatrolReportService
    {
        /// <summary>
        /// 获取巡检报告列表
        /// </summary>
        /// <param name="companyId">公司id</param>
        /// <param name="departmentId">部门id</param>
        /// <param name="groupId">小组id</param>
        /// <param name="employeeId">员工id</param>
        /// <param name="patrolPointId">巡检点id</param>
        /// <param name="patrolRouteId">巡检线路id</param>
        /// <param name="pageIndex">页码号</param>
        /// <param name="pagesize">页容量</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/10 16:11
        /// 修改者：
        /// 修改时间：
        public ServiceResultList<PatrolReport> GetPatrolReportList(int companyId, int departmentId, int groupId, int employeeId, int patrolPointId, int patrolRouteId, int pageIndex, int pageSize)
        {
            var query = DbSession.EntityQueryable<PatrolReport>().Query();
            if (companyId > 0)
            {
                query = query.Where(u => u.ReportEmployee.CompanyId == companyId);
            }

            if (departmentId > 0)
            {
                query = query.Where(u => u.ReportEmployee.DepartmentId == departmentId);
            }

            if (groupId > 0)
            {
                query = query.Where(u => u.ReportEmployee.GroupId == groupId);
            }

            if (employeeId > 0)
            {
                query = query.Where(u => u.ReportEmployeeId == employeeId);
            }

            if (patrolPointId > 0)
            {
                query = query.Where(u => u.PatrolPointId == patrolRouteId);
            }

            if (patrolRouteId > 0)
            {
                query = query.Where(u => u.PatrolRouteId == patrolRouteId);
            }

            int totalCount = query.Count();
            var result = query.OrderBy(u => u.Id)
                              .Skip(pageSize * (pageIndex - 1))
                              .Take(pageSize);

            return new ServiceResultList<PatrolReport>
            {
                Result = result.ToList(),
                TotalCount = totalCount,
                State = true
            };
        }

        /// <summary>
        /// 更新巡检报告
        /// </summary>
        /// <param name="patrolReport"></param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/14 15:41
        /// 修改者：
        /// 修改时间：
        public ServiceResult<bool> UpdatePatrolReport(PatrolReport patrolReport)
        {
            var model = DbSession.EntityQueryable<PatrolReport>().Find(patrolReport.Id).Result;
            if (model == null)
            {
                return new ServiceResult<bool>
                {
                    State = false,
                    Message = "找不到该巡检计划"
                };
            }
            //model.Number = scheme.Number;
            //model.PatrolRouteId = scheme.PatrolRouteId;
            //model.EmployeeId = scheme.EmployeeId;
            //model.StartDate = scheme.StartDate;
            //model.EndDate = scheme.EndDate;

            DbSession.SaveChanges();
            return new ServiceResult<bool>()
            {
                Result = true,
                State = true
            };
        }
    }
}
