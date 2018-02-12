using EPS.Common;
using EPS.DALFactory;
using EPS.EFDAL;
using EPS.IDAL;
using EPS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.BLL
{
    public class PatrolSchemeService : BaseService<PatrolScheme>
    {
        IPatrolSchemeDal dal = DbFactory.GetDal<PatrolScheme>(typeof(PatrolScheme).Name) as IPatrolSchemeDal;//new PatrolSchemeDal();

        public ServiceResult<bool> UpdateScheme(PatrolScheme scheme)
        {
            return dal.UpdateScheme(scheme);

        }
    }
}
