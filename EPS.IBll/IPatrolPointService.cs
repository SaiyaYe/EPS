using EPS.Common;
using EPS.ASModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.IBLL
{
    public interface IPatrolPointService : IBaseSpatialService<PatrolPoint>
    {
        /// <summary>
        /// 获取巡检点
        /// </summary>
        /// <param name="patrolRouteId">巡检路线id</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/17 20:39
        /// 修改者：
        /// 修改时间：
        ServiceResultList<PatrolPoint> GetPatrolPointList(int patrolRouteId = 0, int pageSize = 0, int pageIndex = 1);

        /// <summary>
        /// 巡检点统计
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/4/7 10:36
        /// 修改者：
        /// 修改时间：
        ServiceResultList<Statistic> PatrolPointStatistic(int beginYear = 0, int beginMonth = 0, int endYear = 0, int endMonth = 0);
    }
}
