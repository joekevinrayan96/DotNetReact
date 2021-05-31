using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LawStoreBackend.Models;

namespace LawStoreBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobsDetailsController : ControllerBase
    {
        private readonly JobsDBContext _context;

        public JobsDetailsController(JobsDBContext context)
        {
            _context = context;
        }

        // GET: api/JobsDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<JobsDetail>>> GetJobsDetails()
        {
            return await _context.JobsDetails.ToListAsync();
        }

        // GET: api/JobsDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<JobsDetail>> GetJobsDetail(int id)
        {
            var jobsDetail = await _context.JobsDetails.FindAsync(id);

            if (jobsDetail == null)
            {
                return NotFound();
            }

            return jobsDetail;
        }

        // PUT: api/JobsDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutJobsDetail(int id, JobsDetail jobsDetail)
        {
            /* if (id != jobsDetail.JobId)
             {
                 return BadRequest();
             }*/

            jobsDetail.JobId = id;

            _context.Entry(jobsDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JobsDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/JobsDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<JobsDetail>> PostJobsDetail(JobsDetail jobsDetail)
        {
            _context.JobsDetails.Add(jobsDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetJobsDetail", new { id = jobsDetail.JobId }, jobsDetail);
        }

        // DELETE: api/JobsDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJobsDetail(int id)
        {
            var jobsDetail = await _context.JobsDetails.FindAsync(id);
            if (jobsDetail == null)
            {
                return NotFound();
            }

            _context.JobsDetails.Remove(jobsDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool JobsDetailExists(int id)
        {
            return _context.JobsDetails.Any(e => e.JobId == id);
        }
    }
}
