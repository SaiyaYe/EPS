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
    public class PatrolPointService : BaseService<PatrolPoint>, IPatrolPointService
    {
        IPatrolPointDal dal = DbFactory.GetDal<PatrolPoint>(typeof(PatrolPoint).Name) as IPatrolPointDal;
        IPatrolRouteDal patrolRouteDal = DbFactory.GetDal<PatrolRoute>(typeof(PatrolRoute).Name) as IPatrolRouteDal;
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
            var query = dal.Query();

            if (patrolRouteId > 0)
            {
                var patrolPointList = patrolRouteDal.Find(patrolRouteId).Result.PatrolPoint;
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
    }
}
