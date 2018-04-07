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
    public class PatrolPointService : BaseSpatialService<PatrolPoint>, IPatrolPointService
    {
        /// <summary>
        /// 获取巡检点
        /// </summary>
        /// <param name="patrolRouteId">巡检路线id</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/17 20:41
        /// 修改者：
        /// 修改时间：
        public ServiceResultList<PatrolPoint> GetPatrolPointList(int patrolRouteId = 0, int pageSize = 0, int pageIndex = 1)
        {
            var query = DbSession.EntityQueryable<PatrolPoint>().Query();

            if (patrolRouteId > 0)
            {
                var patrolPointList = DbSession.EntityQueryable<PatrolRoute>().Find(patrolRouteId).Result.PatrolPoint;
                var patrolPointIdList = patrolPointList.Select(u => u.Id);
                query = query.Where(u => patrolPointIdList.Contains(u.Id));
            }

            int totalCount = query.Count();
            var result = query.OrderBy(u => u.Id)
                              .Skip(pageSize * (pageIndex - 1))
                              .Take(pageSize);

            return new ServiceResultList<PatrolPoint>
            {
                Result = result.ToList(),
                TotalCount = totalCount,
                State = true
            };
        }

        /// <summary>
        /// 巡检点统计
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/4/7 10:36
        /// 修改者：
        /// 修改时间：
        public ServiceResultList<Statistic> PatrolPointStatistic()
        {
            var result = from patrolPoint in DbSession.EntityQueryable<PatrolPoint>().Query()
                         group patrolPoint by new { patrolPoint.CreateTime.Value.Year, patrolPoint.CreateTime.Value.Month } into statistic
                         select new Statistic
                         {
                             Count = statistic.Count(),
                             Year = statistic.Key.Year,
                             Month = statistic.Key.Month
                         };

            return new ServiceResultList<Statistic>
            {
                Result = result.OrderBy(u => new { u.Year, u.Month }).ToList(),
                State = true
            };
        }
    }
}
