using EPS.Common;
using EPS.Model;
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
    }
}
