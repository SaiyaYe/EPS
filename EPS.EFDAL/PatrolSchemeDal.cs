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
        DataModelContainer db = new DataModelContainer();

        public ServiceResult<bool> UpdateScheme(PatrolScheme scheme)
        {
            PatrolScheme model = db.PatrolScheme.Find(scheme.Id);
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
            model.SchemeDate = scheme.SchemeDate;
            model.StartDate = scheme.StartDate;
            model.EndDate = scheme.EndDate;

            db.SaveChanges();
            return new ServiceResult<bool>()
            {
                Result = true,
                State = true
            };
        }
    }
}
