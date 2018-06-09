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

        /// <summary>
        /// 获取用户列表
        /// </summary>
        /// <param name="pageIndex">页码号</param>
        /// <param name="pageSize">页容量</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/6/9 16:36
        /// 修改者：
        /// 修改时间：
        public ServiceResultList<User> GetUserList(int pageIndex = 1, int pageSize = 0)
        {
            var query = DbSession.EntityQueryable<User>().Query();

            int totalCount = query.Count();
            var result = query.OrderBy(u => u.Id)
                              .Skip(pageSize * (pageIndex - 1))
                              .Take(pageSize);

            return new ServiceResultList<User>
            {
                Result = result.ToList(),
                TotalCount = totalCount,
                State = true
            };
        }

        /// <summary>
        /// 更新权限
        /// </summary>
        /// <param name="user">用户数据</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/6/9 16:59
        /// 修改者：
        /// 修改时间：
        public ServiceResult<bool> UpdateRole(User user)
        {
            var model = DbSession.EntityQueryable<User>().Find(user.Id).Result;
            if (model == null)
            {
                return new ServiceResult<bool>
                {
                    State = false,
                    Message = "找不到该人员信息"
                };
            }
            model.RoleId = user.RoleId;

            DbSession.SaveChanges();
            return new ServiceResult<bool>()
            {
                Result = true,
                State = true
            };
        }
    }
}
