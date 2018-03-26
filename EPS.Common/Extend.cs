using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.Common
{
    /// <summary>
    /// 类名称：Extend
    /// 命名空间：EPS.Common
    /// 类功能：扩展类，用于类方法的扩展
    /// </summary>
    /// 创建者：叶烨星
    /// 创建时间：2018/2/11 12:29
    /// 修改者：
    /// 修改时间：
    public static class Extend
    {
        /// <summary>
        /// 字符串是否为空
        /// </summary>
        /// <param name="value">字符串值</param>
        /// <returns>
        ///   <c>若为空，则返回true</c> 
        ///   <c>否则，返回false</c>.
        /// </returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/21 21:48
        /// 修改者：
        /// 修改时间：
        public static bool IsEmptyOrNull(this string value)
        {
            if (string.IsNullOrEmpty(value))
            {
                return true;
            }

            return value.Trim().Length == 0;
        }

        /// <summary>
        /// 序列化
        /// </summary>
        /// <param name="source">The source.</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/21 22:57
        /// 修改者：
        /// 修改时间：
        public static string Serialize(this object source)
        {
            return JsonConvert.SerializeObject(source);
        }

        /// <summary>
        /// 反序列化
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="source">The source.</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/21 21:53
        /// 修改者：
        /// 修改时间：
        public static T Deserialize<T>(this string source)
        {
            var jObject = JObject.Parse(source);
            return jObject.ToObject<T>();
        }
    }
}
