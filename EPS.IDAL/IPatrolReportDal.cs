using EPS.Common;
using EPS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.IDAL
{
    public interface IPatrolReportDal : IBaseDal<PatrolReport>
    {
        /// <summary>
        /// 更新巡检报告
        /// </summary>
        /// <param name="patrolReport">巡检报告</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/14 15:41
        /// 修改者：
        /// 修改时间：
        ServiceResult<bool> UpdatePatrolReport(PatrolReport patrolReport);
    }
}
