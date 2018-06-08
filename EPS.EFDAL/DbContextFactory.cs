using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Text;
using System.Threading.Tasks;
using EPS.ASModel;

namespace EPS.EFDAL
{
    public class DbContextFactory
    {
        /// <summary>
        /// 获取当前上下文
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/12 0:47
        /// 修改者：
        /// 修改时间：
        public static DbContext GetCurrentDbContext()
        {
            //一次请求共用一个实例。 上下文都可以做到切换。  
            DbContext db = CallContext.GetData("DbContext") as DbContext; 
            if (db == null)
            {
                db = new AsModel();
                CallContext.SetData("DbContext", db); //SetData存储给定对象并将其与指定名称关联  
            }
            return db;
        }
    }
}
