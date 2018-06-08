using EPS.Common;
using EPS.ASModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.IBLL
{
    public interface IDepartmentService : IBaseService<Department>
    {
        ServiceResultList<Department> GetDepartmentList(int companyId, int departmentId, int pagesize, int pageIndex);
        ServiceResult<bool> UpdateDepartment(Department department);
    }
}
