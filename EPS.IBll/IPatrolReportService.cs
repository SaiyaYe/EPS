using EPS.Common;
using EPS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.IBLL
{
    public interface IPatrolReportService : IBaseService<PatrolReport>
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
        /// 创建时间：2018/3/10 16:10
        /// 修改者：
        /// 修改时间：
        ServiceResultList<PatrolReport> GetPatrolReportList(int companyId, int departmentId, int groupId, int employeeId, int patrolPointId, int patrolRouteId, int pageIndex, int pageSize);

        /// <summary>
        /// 更新巡检报告
        /// </summary>
        /// <param name="patrolScheme">巡检报告</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/14 15:38
        /// 修改者：
        /// 修改时间：
        ServiceResult<bool> UpdatePatrolReport(PatrolReport patrolReport);
    }
}
