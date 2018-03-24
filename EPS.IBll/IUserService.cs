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
    }
}
