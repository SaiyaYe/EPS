using EPS.Common;
using EPS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.IBLL
{
    public interface IUserService : IBaseService<User>
    {
        /// <summary>
        /// 登录
        /// </summary>
        /// <param name="username">用户名</param>
        /// <param name="password">密码</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/13 11:09
        /// 修改者：
        /// 修改时间：
        ServiceResult<User> Login(string username, string password);

        /// <summary>
        /// 获取用户列表
        /// </summary>
        /// <param name="pageIndex">页码号</param>
        /// <param name="pageSize">页容量</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/6/9 16:34
        /// 修改者：
        /// 修改时间：
        ServiceResultList<User> GetUserList(int pageIndex = 1, int pageSize = 0);

        /// <summary>
        /// 更新权限
        /// </summary>
        /// <param name="user">用户数据</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/6/9 16:57
        /// 修改者：
        /// 修改时间：
        ServiceResult<bool> UpdateRole(User user);
    }
}
