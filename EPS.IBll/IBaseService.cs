using EPS.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace EPS.IBLL
{
    public interface IBaseService<T> where T : class, new()
    {
        /// <summary>
        /// Gets the element by id.
        /// </summary>
        /// <param name="id">id.</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/1/28 19:07
        /// 修改者：
        /// 修改时间：
        ServiceResult<T> Find(int id);

        /// <summary>
        /// Gets the element list.
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/1/28 19:30
        /// 修改者：
        /// 修改时间：
        ServiceResultList<T> GetElementList();

        /// <summary>
        /// Gets the element list.
        /// </summary>
        /// <param name="whereLambda">The where lambda.</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/1/28 19:08
        /// 修改者：
        /// 修改时间：
        ServiceResultList<T> Where(Expression<Func<T, bool>> whereLambda = null);

        /// <summary>
        /// Adds the specified element.
        /// </summary>
        /// <param name="element">The element.</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/1/28 19:10
        /// 修改者：
        /// 修改时间：
        ServiceResult<bool> Add(T element);

        /// <summary>
        /// Deletes the by id
        /// </summary>
        /// <param name="id">id</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/1/28 19:10
        /// 修改者：
        /// 修改时间：
        ServiceResult<bool> DeleteById(int id);
    }
}
