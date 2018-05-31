using EPS.Common;
using EPS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.IBLL
{
    public interface IGroupService : IBaseService<Group>
    {
        ServiceResultList<Group> GetGroupList(int companyId, int departmentId, int groupId, int pagesize, int pageIndex);
        ServiceResult<bool> UpdateGroup(Group group);
    }
}
