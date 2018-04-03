using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.IDAL
{
    public interface IBaseSpatialDal<T> : IBaseDal<T> where T : class, new()
    {
    }
}
