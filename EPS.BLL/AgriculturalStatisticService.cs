using EPS.ASModel;
using EPS.Common;
using EPS.IBLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.BLL
{
    public class AgriculturalStatisticService : BaseService<AgriculturalStatistic>, IAgriculturalStatisticService
    {
        public ServiceResultList<AgiculturalRagionalStatistic> AgiculturalRagionalStatistic()
        {
            var query = from statistic in DbSession.EntityQueryable<AgriculturalStatistic>().Query()
                        join province in DbSession.EntityQueryable<Province>().Query() on statistic.ProvinceId equals province.Id

                        select new
                        {
                            ProvinceId = statistic.ProvinceId,
                            ProvinceName = province.Name,
                            ArableLandArea = statistic.ArableLandArea == null ? 0 : (double)statistic.ArableLandArea,
                            FertilizerQuantity = statistic.FertilizerQuantity == null ? 0 : (double)statistic.FertilizerQuantity,
                            PotashFertilizerQuantity = statistic.PotashFertilizerQuantity == null ? 0 : (double)statistic.PotashFertilizerQuantity,
                            TotalGrainOutput = statistic.TotalGrainOutput == null ? 0 : (double)statistic.TotalGrainOutput,
                            CattleCount = statistic.CattleCount == null ? 0 : (double)statistic.CattleCount,
                            PigCount = statistic.PigCount == null ? 0 : (double)statistic.PigCount,
                            SheepCount = statistic.SheepCount == null ? 0 : (double)statistic.SheepCount,
                            PoultryCount = statistic.PoultryCount == null ? 0 : (double)statistic.PoultryCount
                        };

            var result = from statistic in query
                         group statistic by new { statistic.ProvinceId } into statistic

                         select new AgiculturalRagionalStatistic
                         {
                             ProvinceId = statistic.Key.ProvinceId,
                             ProvinceName = statistic.FirstOrDefault(u => u.ProvinceId == statistic.Key.ProvinceId).ProvinceName,
                             ArableLandArea = statistic.Sum(u => u.ArableLandArea),
                             FertilizerQuantity = statistic.Sum(u => u.FertilizerQuantity),
                             PotashFertilizerQuantity = statistic.Sum(u => u.PotashFertilizerQuantity),
                             TotalGrainOutput = statistic.Sum(u => u.TotalGrainOutput),
                             CattleCount = statistic.Sum(u => u.CattleCount),
                             PigCount = statistic.Sum(u => u.PigCount),
                             SheepCount = statistic.Sum(u => u.SheepCount),
                             PoultryCount = statistic.Sum(u => u.PoultryCount),
                         };

            return new ServiceResultList<AgiculturalRagionalStatistic>
            {
                Result = result.OrderBy(u => new { u.ProvinceId }).ToList(),
                State = true
            };
        }
    }
}
