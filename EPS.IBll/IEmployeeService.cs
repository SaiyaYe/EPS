using EPS.Common;
using EPS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.IBLL
{
    public interface IEmployeeService : IBaseService<Employee>
    {
        ServiceResultList<Employee> GetEmployeeList(int companyId = 0, int departmentId = 0, int groupId = 0, int employeeId = 0,  int pageSize = 15, int pageIndex = 1);
        ServiceResult<bool> UpdateEmployee(Employee employee);
    }
}
