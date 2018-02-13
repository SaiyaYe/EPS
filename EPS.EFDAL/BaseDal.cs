using EPS.Common;
using EPS.IDAL;
using EPS.Model;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace EPS.EFDAL
{
    public class BaseDal<T> : IBaseDal<T> where T : class, new()
    {
        public DbContext Db
        {
            get { return DbContextFactory.GetCurrentDbContext(); }
        }

        /// <summary>
        /// Gets the element by id.
        /// </summary>
        /// <param name="id">id</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/1/28 18:47
        /// 修改者：
        /// 修改时间：
        public ServiceResult<T> Find(int id)
        {
            if (id <= 0)
            {
                return new ServiceResult<T>
                {
                    State = false,
                    Message = "输入的id不合法"
                };
            }

            T element = Db.Set<T>().Find(id);
            if (element == null)
            {
                return new ServiceResult<T>
                {
                    State = false,
                    Message = "该元素不存在"
                };
            }

            return new ServiceResult<T>
            {
                Result = element,
                State = true
            };
        }

        /// <summary>
        /// 查询
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/1/28 19:29
        /// 修改者：
        /// 修改时间：
        public IQueryable<T> Query()
        {
            return Db.Set<T>();
        }

        /// <summary>
        /// 条件查询
        /// </summary>
        /// <param name="whereLambda">The where lambda.</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/1/28 18:50
        /// 修改者：
        /// 修改时间：
        public IQueryable<T> Where(Expression<Func<T, bool>> whereLambda = null)
        {
            return Db.Set<T>().Where(whereLambda);
        }

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
        public IQueryable<T> GetPageList(Expression<Func<T, bool>> whereLambda, Expression<Func<T, bool>> orderLambda, int pageSize = 15, int pageIndex = 1)
        {
            var result = Db.Set<T>().Where(whereLambda)
                .OrderBy(orderLambda)
                .Skip((pageIndex - 1) * pageSize)
                .Take(pageSize);

            return result;
        }

        /// <summary>
        /// Adds the specified element.
        /// </summary>
        /// <param name="element">The element.</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/1/28 18:53
        /// 修改者：
        /// 修改时间：
        public ServiceResult<bool> Add(T element)
        {
            Db.Set<T>().Add(element);
            return new ServiceResult<bool>
            {
                Result = true,
                State = true
            };
            //try
            //{
            //    Db.SaveChanges();
            //    return new ServiceResult<bool>
            //    {
            //        Result = true,
            //        State = true
            //    };
            //}
            //catch (Exception e)
            //{
            //    return new ServiceResult<bool>
            //    {
            //        State = false,
            //        Message = e.ToString()
            //    };
            //}
        }

        /// <summary>
        /// Deletes the by id.
        /// </summary>
        /// <param name="id">The id.</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/1/28 18:59
        /// 修改者：
        /// 修改时间：
        public ServiceResult<bool> DeleteById(int id)
        {
            ServiceResult<T> result = Find(id);
            if (!result.State)
            {
                return new ServiceResult<bool>
                {
                    State = false,
                    Message = result.Message
                };
            }

            Db.Set<T>().Remove(result.Result);

            return new ServiceResult<bool>
            {
                Result = true,
                State = true
            };
        }
    }
}
