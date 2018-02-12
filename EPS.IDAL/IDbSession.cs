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
        ServiceResult<bool> SaveChanges();
    }
}
