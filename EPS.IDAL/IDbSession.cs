using EPS.Common;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.IDAL
{
    public interface IDbSession
    {
        /// <summary>
        /// 查询实体
        /// </summary>
        /// <typeparam name="TEntity">The type of the entity.</typeparam>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/20 9:51
        /// 修改者：
        /// 修改时间：
        IBaseDal<TEntity> EntityQueryable<TEntity>() where TEntity : class, new();

        /// <summary>
        /// 保存修改
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/20 9:50
        /// 修改者：
        /// 修改时间：
        ServiceResult<bool> SaveChanges();
    }
}
