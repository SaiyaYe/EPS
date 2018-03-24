using EPS.Common;
using EPS.DALFactory;
using EPS.EFDAL;
using EPS.IBLL;
using EPS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.BLL
{
    public class UserService : BaseService<User>, IUserService
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
        public ServiceResult<User> Login(string username, string password)
        {
            User user = DbSession.EntityQueryable<User>().Where(u => u.UserName == username).FirstOrDefault();
            if (user == null)
            {
                return new ServiceResult<User>
                {
                    State = false,
                    Message = "用户名不存在"
                };
            }

            if (user.Password != password)
            {
                return new ServiceResult<User>
                {
                    State = false,
                    Message = "密码错误"
                };
            }

            if (!user.Available)
            {
                return new ServiceResult<User>
                {
                    State = false,
                    Message = "该用户已被冻结"
                };
            }

            return new ServiceResult<User>
            {
                Result = user,
                State = true
            };
        }
    }
}
