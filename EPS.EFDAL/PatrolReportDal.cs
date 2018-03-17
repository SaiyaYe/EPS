﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EPS.Common;
using EPS.IDAL;
using EPS.Model;

namespace EPS.EFDAL
{
    /// <summary>
    /// 类名称：PatrolReportDal
    /// 命名空间：EPS.EFDAL
    /// 创建者：王一鹤
    /// 创建日期：2018/2/2
    /// </summary>
    /// <seealso cref="EPS.EFDAL.BaseDal{EPS.Model.PatrolReport}" />
    public class PatrolReportDal : BaseDal<PatrolReport>, IPatrolReportDal
    {
        public ServiceResult<bool> UpdatePatrolReport(PatrolReport patrolReport)
        {
            PatrolReport model = Db.Set<PatrolReport>().Find(patrolReport.Id);
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

            Db.SaveChanges();
            return new ServiceResult<bool>()
            {
                Result = true,
                State = true
            };
        }
    }
}
