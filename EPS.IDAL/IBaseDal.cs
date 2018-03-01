using EPS.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace EPS.IDAL
{
    public interface IBaseDal<T> where T : class, new()
    {
        /// <summary>
        /// Gets the element by id.
        /// </summary>
        /// <param name="id">id</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/1/28 18:47
        /// 修改者：
        /// 修改时间：
        ServiceResult<T> Find(int id);

        /// <summary>
        /// Gets the element list.
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/1/28 19:29
        /// 修改者：
        /// 修改时间：
        IQueryable<T> Query();

        /// <summary>
        /// Gets the element list.
        /// </summary>
        /// <param name="whereLambda">The where lambda.</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/1/28 18:50
        /// 修改者：
        /// 修改时间：
        IQueryable<T> Where(Expression<Func<T, bool>> whereLambda = null);

        /// <summary>
        /// 获取分页列表
        /// </summary>
        /// <param name="pageSize">页容量</param>
        /// <param name="pageIndex">页码号</param>
        /// <param name="whereLambda">条件查询</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/11 11:11
        /// 修改者：
        /// 修改时间：
        ServiceResultList<T> GetPageList(Expression<Func<T, bool>> whereLambda, Expression<Func<T, bool>> orderLambda, int pageSize = 15, int pageIndex = 1);

        /// <summary>
        /// Adds the specified element.
        /// </summary>
        /// <param name="element">The element.</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/1/28 18:53
        /// 修改者：
        /// 修改时间：
        ServiceResult<bool> Add(T element);

        /// <summary>
        /// Deletes the by id.
        /// </summary>
        /// <param name="id">The id.</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/1/28 18:59
        /// 修改者：
        /// 修改时间：
        ServiceResult<bool> DeleteById(int id);
    }
}
