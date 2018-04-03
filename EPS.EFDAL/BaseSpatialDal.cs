using EPS.IDAL;
using System;
using System.Collections.Generic;
using System.Data.Entity.Spatial;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.EFDAL
{
    public class BaseSpatialDal<T> : BaseDal<T>, IBaseSpatialDal<T> where T : class, new()
    {
        public DbSpatialServices SpatialService
        {
            get { return  DbSpatialServices.Default; }
        }
    }
}
