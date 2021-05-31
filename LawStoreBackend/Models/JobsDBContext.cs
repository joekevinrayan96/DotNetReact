using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LawStoreBackend.Models
{
    public class JobsDBContext:DbContext
    {
        public JobsDBContext(DbContextOptions<JobsDBContext> options):base(options)
        {

        }

        public DbSet<JobsDetail> JobsDetails { get; set; }
    }
}
