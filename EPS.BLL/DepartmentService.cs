using EPS.Common;
using EPS.IBLL;
using EPS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.BLL
{
    public class DepartmentService : BaseService<Department>, IDepartmentService
    {
        public ServiceResultList<Department> GetDepartmentList(int companyId = 0, int departmentId = 0,int pageSize = 15, int pageIndex = 1)
        {
            var query = DbSession.EntityQueryable<Department>().Query();
            if (companyId > 0)
            {
                query = query.Where(u => u.CompanyId == companyId);
            }

            if (departmentId > 0)
            {
                query = query.Where(u => u.Id == departmentId);
            }
            
            int totalCount = query.Count();
            var result = query.OrderBy(u => u.Id)
                              .Skip(pageSize * (pageIndex - 1))
                              .Take(pageSize);

            return new ServiceResultList<Department>
            {
                Result = result.ToList(),
                TotalCount = totalCount,
                State = true
            };
        }
        public ServiceResult<bool> UpdateDepartment(Department department)
        {
            var model = DbSession.EntityQueryable<Department>().Find(department.Id).Result;
            if (model == null)
            {
                return new ServiceResult<bool>
                {
                    State = false,
                    Message = "找不到该人员信息"
                };
            }
            model.Number = department.Number;
            model.Name = department.Name;
            model.CompanyId = department.CompanyId;


            DbSession.SaveChanges();
            return new ServiceResult<bool>()
            {
                Result = true,
                State = true
            };
        }
    }
}
