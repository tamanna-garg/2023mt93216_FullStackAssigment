using System.ComponentModel.DataAnnotations;

namespace WebApplication.Models
{
    public class UserModel
    {
        public int Id { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string PasswordHash { get; set; }
    }
}