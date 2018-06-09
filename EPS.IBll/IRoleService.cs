using EPS.Common;
using EPS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.IBLL
{
    public interface IRoleService : IBaseService<Role>
    {
        /// <summary>
        /// 获取权限列表
        /// </summary>
        /// <param name="pageIndex">页码号</param>
        /// <param name="pagesize">页容量</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/6/9 16:30
        /// 修改者：
        /// 修改时间：
        ServiceResultList<Role> GetRoleList(int pageIndex = 1, int pageSize = 0);
    }
}
