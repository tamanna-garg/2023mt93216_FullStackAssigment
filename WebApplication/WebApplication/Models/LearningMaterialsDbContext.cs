using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace WebApplication.Models
{
    public class LearningMaterialsDbContext : DbContext
    {
        public DbSet<LearningMaterialModel> LearningMaterials { get; set; }
    }
}

