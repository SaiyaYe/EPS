using EPS.IDAL;
using System.Reflection;

namespace EPS.DALFactory
{
    public class DbFactory
    {
        public static IBaseDal<T> GetDal<T>(string dalName) where T : class, new()
        {
            //return new EFDAL.BaseDal<T>();
            string assemblyName = System.Configuration.ConfigurationManager.AppSettings["DalAssemblyName"];
            return Assembly.Load(assemblyName).CreateInstance(assemblyName + "." + dalName + "Dal") as IBaseDal<T>;
        }
    }
}
