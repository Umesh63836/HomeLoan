using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using HomeLoan.Models;

namespace HomeLoan.Controllers
{
    public class TrackStatusController : ApiController
    {
        private HomeLoanEntities2 db = new HomeLoanEntities2();

        // GET: api/TrackStatus
        //public IQueryable<TrackStatu> GetTrackStatus()
        //{
        //    return db.TrackStatus;
        //}

        // GET: api/TrackStatus/5
        [ResponseType(typeof(TrackStatu))]
        [HttpGet]
        public IHttpActionResult GetTrackStatu([FromBody] string appid)
        {
            TrackStatu trackStatu = db.TrackStatus.ToList().Find(x => x.ApplicationID == appid);
            if (trackStatu == null)
            {
                return NotFound();
            }

            return Ok(trackStatu);
        }

        // PUT: api/TrackStatus/5
        [ResponseType(typeof(void))]
        [HttpPut]
        public IHttpActionResult PutTrackStatu([FromBody] string appid,[FromUri] string adminId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            TrackStatu trackStatus = db.TrackStatus.ToList().Find(x => x.ApplicationID == appid);
            //trackStatus.AppointmentDate = trackStatus.CustomerApplication.AppointmentDateTentative;
            trackStatus.LoanStatus = "verified and sent for final approval";
            trackStatus.AdminID = adminId;
            trackStatus.LoanApprovalDate = null;
            db.Entry(trackStatus).State = EntityState.Modified;
            //db.TrackStatus..Where(x => x.ApplicationID == appid).Update(x => new Task { LoanStatus = "verified and sent for final approval"});
            //db.tas
            //var query = "UPDATE Admin SET LoanStatus = 'verified and sent for final approval' WHERE  = 1";
            //using (var context = new YourContext())
            //{
            //    context.Database.ExecuteSqlCommand(query);
            //}
            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/TrackStatus
        //[ResponseType(typeof(TrackStatu))]
        //[HttpPut]
        //public IHttpActionResult PostTrackStatu([FromUri] string appid)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    db.TrackStatus.Add(trackStatu);

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateException)
        //    {
        //        if (TrackStatuExists(trackStatu.Contact))
        //        {
        //            return Conflict();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return CreatedAtRoute("DefaultApi", new { id = trackStatu.Contact }, trackStatu);
        //}

        //// DELETE: api/TrackStatus/5
        //[ResponseType(typeof(TrackStatu))]
        //public IHttpActionResult DeleteTrackStatu(int id)
        //{
        //    TrackStatu trackStatu = db.TrackStatus.Find(id);
        //    if (trackStatu == null)
        //    {
        //        return NotFound();
        //    }

        //    db.TrackStatus.Remove(trackStatu);
        //    db.SaveChanges();

        //    return Ok(trackStatu);
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        db.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}


    }
}