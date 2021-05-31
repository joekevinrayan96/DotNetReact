using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LawStoreBackend.Models
{
    public class JobsDetail
    {
        [Key]
        public int JobId { get; set; }

        [Column(TypeName="nvarchar(100)")]
        public string JobType { get; set; }

        [Column(TypeName ="float")]
        public float Salary { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Title { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Description { get; set; }

        [Column(TypeName = "date")]
        public DateTime DateTimeSaved { get; set; }
    }
}
