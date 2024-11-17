using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Linq;
using System.Web.Http;
using WebApplication.Models;

namespace WebApplication.Controllers
{
    [RoutePrefix("api/auth")]
    public class AccountController : ApiController
    {
        private readonly AppDbContext _db = new AppDbContext();

        [HttpPost]
        [Route("register")]
        public IHttpActionResult Register([FromBody] UserModel user)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (_db.Users.Any(u => u.Email == user.Email))
                return BadRequest("Email already exists.");

            user.PasswordHash = PasswordHasher.HashPassword(user.PasswordHash);
            _db.Users.Add(user);
            _db.SaveChanges();

            return Ok("User registered successfully.");
        }

        [HttpPost]
        [Route("login")]
        public IHttpActionResult Login([FromBody] UserModel user)
        {
            var existingUser = _db.Users.SingleOrDefault(u => u.Email == user.Email);
            if (existingUser == null || !PasswordHasher.VerifyPassword(user.PasswordHash, existingUser.PasswordHash))
            {
                return Unauthorized();
            }

            return Ok("Login successful.");
        }

        [HttpPost]
        [Route("reset-password")]
        public IHttpActionResult ResetPassword([FromBody] string email)
        {
            var user = _db.Users.SingleOrDefault(u => u.Email == email);
            if (user == null)
                return NotFound();

            // Simulate sending an email with a password reset link.
            return Ok("Password reset email sent.");
        }
    }
}
