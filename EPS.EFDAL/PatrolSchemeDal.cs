using EPS.Common;
using EPS.IDAL;
using EPS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.EFDAL
{
    public class PatrolSchemeDal : BaseDal<PatrolScheme>, IPatrolSchemeDal
    {
        /// <summary>
        /// 更新巡检计划
        /// </summary>
        /// <param name="scheme">巡检计划</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/14 15:42
        /// 修改者：
        /// 修改时间：
        public ServiceResult<bool> UpdateScheme(PatrolScheme scheme)
        {
            PatrolScheme model = Db.Set<PatrolScheme>().Find(scheme.Id);
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

            Db.SaveChanges();
            return new ServiceResult<bool>()
            {
                Result = true,
                State = true
            };
        }
    }
}
