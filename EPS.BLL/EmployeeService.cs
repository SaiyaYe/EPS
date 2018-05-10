using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EPS.Common;
using EPS.IBLL;
using EPS.Model;

namespace EPS.BLL
{
    
    public class EmployeeService : BaseService<Employee>, IEmployeeService
    {
        
        public ServiceResultList<Employee> GetEmployeeList(int companyId = 0, int departmentId = 0, int groupId = 0, int employeeId = 0, int pageSize = 15, int pageIndex = 1)
        {

            var query = DbSession.EntityQueryable<Employee>().Query();
            if (companyId > 0)
            {
                query = query.Where(u => u.CompanyId == companyId);
            }

            if (departmentId > 0)
            {
                query = query.Where(u => u.DepartmentId == departmentId);
            }

            if (groupId > 0)
            {
                query = query.Where(u => u.GroupId == groupId);
            }

            if (employeeId > 0)
            {
                query = query.Where(u => u.Id == employeeId);
            }



            int totalCount = query.Count();
            var result = query.OrderBy(u => u.Id)
                              .Skip(pageSize * (pageIndex - 1))
                              .Take(pageSize);

            return new ServiceResultList<Employee>
            {
                Result = result.ToList(),
                TotalCount = totalCount,
                State = true
            };
        }
        public ServiceResult<bool> UpdateEmployee(Employee employee)
        {
            var model = DbSession.EntityQueryable<Employee>().Find(employee.Id).Result;
            if (model == null)
            {
                return new ServiceResult<bool>
                {
                    State = false,
                    Message = "找不到该人员信息"
                };
            }
            model.Number = employee.Number;
            model.Name = employee.Name;
            model.GroupId = employee.GroupId;
            model.DepartmentId = employee.DepartmentId;
            model.CompanyId = employee.CompanyId;

            DbSession.SaveChanges();
            return new ServiceResult<bool>()
            {
                Result = true,
                State = true
            };
        }
    }

}
