using EPS.Common;
using EPS.IDAL;
using EPS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.EFDAL
{
    public class UserDal : BaseDal<User>, IUserDal
    {
        DataModelContainer db = new DataModelContainer();

        public ServiceResult<bool> Login(string username, string password)
        {
            User user = db.User.Where(u => u.UserName == username).FirstOrDefault();
            if (user == null)
            {
                return new ServiceResult<bool>
                {
                    State = false,
                    Message = "用户名不存在"
                };
            }

            if (user.Password != password)
            {
                return new ServiceResult<bool>
                {
                    State = false,
                    Message = "密码错误"
                };
            }

            return new ServiceResult<bool>
            {
                Result = true,
                State = true
            };
        }
    }
}
