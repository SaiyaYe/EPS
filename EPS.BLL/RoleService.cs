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
    public class RoleService : BaseService<Role>, IRoleService
    {
        /// <summary>
        /// 获取权限列表
        /// </summary>
        /// <param name="pageIndex">页码号</param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/6/9 16:33
        /// 修改者：
        /// 修改时间：
        public ServiceResultList<Role> GetRoleList(int pageIndex = 1, int pageSize = 0)
        {
            var query = DbSession.EntityQueryable<Role>().Query();

            int totalCount = query.Count();
            var result = query.OrderBy(u => u.Id)
                              .Skip(pageSize * (pageIndex - 1))
                              .Take(pageSize);

            return new ServiceResultList<Role>
            {
                Result = result.ToList(),
                TotalCount = totalCount,
                State = true
            };
        }
    }
}
