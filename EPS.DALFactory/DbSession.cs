using EPS.Common;
using EPS.EFDAL;
using EPS.IDAL;
using EPS.Model;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Text;
using System.Threading.Tasks;

namespace EPS.DALFactory
{
    public class DbSession : IDbSession
    {
        #region dal实例
        //public IMenuDal MenuDal { get { return DbFactory.GetDal<Menu>(typeof(Menu).Name) as IMenuDal; } }

        //public ICompanyDal CompanyDal { get { return DbFactory.GetDal<Company>(typeof(Company).Name) as ICompanyDal; } }

        //public IDepartmentDal DepartmentDal { get { return DbFactory.GetDal<Department>(typeof(Department).Name) as IDepartmentDal; } }

        //public IGroupDal GroupDal { get { return DbFactory.GetDal<Group>(typeof(Group).Name) as IGroupDal; } }
        #endregion

        //public IQueryable<TEntity> EntityQueryable<TEntity>(OrmStrategy strategy, bool cache) where TEntity : class, new()
        //{
        //    var alias = DataSource.GetDataSource(strategy, Operation.Read);
        //    return cache ? this.OpenSession(alias).Query<TEntity>() : this.OpenStatelessSession(alias).Query<TEntity>();
        //}

        /// <summary>
        /// 获取当前上下文
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/11 22:20
        /// 修改者：
        /// 修改时间：
        public static DbContext GetCurrentContext()
        {
            DbContext db = CallContext.GetData("DbContext") as DbContext;
            if (db == null)
            {
                db = new DataModelContainer();
                CallContext.SetData("DbContext", db);
            }

            return db;
        }

        /// <summary>
        /// 保存修改
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/11 17:32
        /// 修改者：
        /// 修改时间：
        public ServiceResult<bool> SaveChanges()
        {
            DbContext db = DbContextFactory.GetCurrentDbContext();
            try
            {
                db.SaveChanges();
                return new ServiceResult<bool>
                {
                    Result = true,
                    State = true
                };
            }
            catch (Exception e)
            {
                return new ServiceResult<bool>
                {
                    State = false,
                    Message = e.ToString()
                };
            }
        }
    }
}
