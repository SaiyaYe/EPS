using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EPS.UI.Portal.Models
{
    public class PaginationModel
    {
        /// <summary>
        /// 获取或设置当前页码
        /// </summary>
        /// <value>
        /// 当前页码
        /// </value>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/28 15:26
        /// 修改者：
        /// 修改时间：
        public int PageIndex { get; set; }

        /// <summary>
        /// 获取或设置每页数量
        /// </summary>
        /// <value>
        /// 每页数量
        /// </value>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/28 15:26
        /// 修改者：
        /// 修改时间：
        public int PageSize { get; set; }

        /// <summary>
        /// 获取或设置当前页记录数
        /// </summary>
        /// <value>
        /// 当前页记录数
        /// </value>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/28 15:26
        /// 修改者：
        /// 修改时间：
        public int CurrentCount { get; set; }

        /// <summary>
        /// 获取或设置记录总数
        /// </summary>
        /// <value>
        /// 记录总数
        /// </value>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/28 15:27
        /// 修改者：
        /// 修改时间：
        public int TotalCount { get; set; }

        /// <summary>
        /// 获取或设置总页数
        /// </summary>
        /// <value>
        /// 总页数
        /// </value>
        /// 创建者：叶烨星
        /// 创建时间：2018/2/28 15:28
        /// 修改者：
        /// 修改时间：
        public int TotalPageCount { get; set; }
    }
}