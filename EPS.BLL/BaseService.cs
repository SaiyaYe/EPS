﻿using EPS.Common;
using EPS.DALFactory;
using EPS.EFDAL;
using EPS.IDAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace EPS.BLL
{
    public class BaseService<T> where T : class, new()
    {
        IBaseDal<T> dal = DbFactory.GetDal<T>(typeof(T).Name);

        public IDbSession DbSession
        {
            get { return DbSessionFactory.GetCurrentDbSession(); }
        }

        /// <summary>
        /// Gets the element by id.
        /// </summary>
        /// <param name="id">id.</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/1/28 19:07
        /// 修改者：
        /// 修改时间：
        public ServiceResult<T> Find(int id)
        {
            return dal.Find(id);
        }

        /// <summary>
        /// Gets the element list.
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/1/28 19:30
        /// 修改者：
        /// 修改时间：
        public ServiceResultList<T> GetElementList()
        {
            return dal.GetElementList();
        }

        /// <summary>
        /// Gets the element list.
        /// </summary>
        /// <param name="whereLambda">The where lambda.</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/1/28 19:08
        /// 修改者：
        /// 修改时间：
        public ServiceResultList<T> Where(Expression<Func<T, bool>> whereLambda = null)
        {
            return dal.Where(whereLambda);
        }

        /// <summary>
        /// Adds the specified element.
        /// </summary>
        /// <param name="element">The element.</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/1/28 19:10
        /// 修改者：
        /// 修改时间：
        public ServiceResult<bool> Add(T element)
        {
            dal.Add(element);
            return DbSession.SaveChanges();
        }

        /// <summary>
        /// Deletes the by id
        /// </summary>
        /// <param name="id">id</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/1/28 19:10
        /// 修改者：
        /// 修改时间：
        public ServiceResult<bool> DeleteById(int id)
        {
            return dal.DeleteById(id);
        }
    }
}
