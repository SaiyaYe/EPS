using EPS.Common;
using EPS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.IBLL
{
    public interface IPatrolSchemeService : IBaseService<PatrolScheme>
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
        /// 创建时间：2018/2/13 10:26
        /// 修改者：
        /// 修改时间：
        ServiceResultList<PatrolScheme> GetPatrolSchemeList(int companyId = 0, int departmentId = 0, int groupId = 0, int employeeId = 0, int patrolRouteId = 0, int pageSize = 15, int pageIndex = 1);

        /// <summary>
        /// 更新巡检计划
        /// </summary>
        /// <param name="scheme">巡检计划</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/13 10:26
        /// 修改者：
        /// 修改时间：
        ServiceResult<bool> UpdateScheme(PatrolScheme scheme);
    }
}
