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
    public class GroupService : BaseService<Group>, IGroupService
    {
        public ServiceResultList<Group> GetGroupList(int companyId = 0, int departmentId = 0, int groupId = 0,  int pageSize = 15, int pageIndex = 1)
        {
            var query = DbSession.EntityQueryable<Group>().Query();
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
                query = query.Where(u => u.Id == groupId);
            }

           


            int totalCount = query.Count();
            var result = query.OrderBy(u => u.Id)
                              .Skip(pageSize * (pageIndex - 1))
                              .Take(pageSize);

            return new ServiceResultList<Group>
            {
                Result = result.ToList(),
                TotalCount = totalCount,
                State = true
            };
        }
        public ServiceResult<bool> UpdateGroup(Group group)
        {
            var model = DbSession.EntityQueryable<Group>().Find(group.Id).Result;
            if (model == null)
            {
                return new ServiceResult<bool>
                {
                    State = false,
                    Message = "找不到该人员信息"
                };
            }
            model.Number = group.Number;
            model.Name = group.Name;
            model.DepartmentId = group.DepartmentId;
            model.CompanyId = group.CompanyId;
           

            DbSession.SaveChanges();
            return new ServiceResult<bool>()
            {
                Result = true,
                State = true
            };
        }
    }
}
