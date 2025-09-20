using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;

namespace SalesDashboardAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DashboardController : ControllerBase
    {
        private static readonly Random _rng = new();
        private static readonly DateTime _startup = DateTime.UtcNow;

        [HttpGet]
        public IActionResult Get()
        {
            var monthly = GenerateMonthlySales();

            var dashboard = new
            {
                totalSales          = _rng.Next(80_000, 150_000),
                totalOrders         = _rng.Next(800, 1_200),
                avgOrderValue       = _rng.Next(100, 200),
                monthly,

                totalCustomers      = _rng.Next(1_000, 1_500),
                customerSatisfaction = Math.Round(90 + _rng.NextDouble() * 8, 1), // 90-98 %
                dailyAvgOrders      = _rng.Next(25, 45),
                activeLocations     = _rng.Next(8, 20),

                trends = new
                {
                    salesTrend      = Math.Round(_rng.NextDouble() * 20 - 5, 1),   // -5 … +15 %
                    ordersTrend     = Math.Round(_rng.NextDouble() * 15 - 3, 1),
                    avgOrderTrend   = Math.Round(_rng.NextDouble() * 10 - 2, 1)
                },

                uptime       = CalculateUptime(),
                lastUpdated  = DateTime.UtcNow.ToString("yyyy-MM-dd HH:mm:ss"),
                systemStatus = "Active"
            };

            return Ok(dashboard);
        }

        /* ---------- helpers ---------- */

        private static int[] GenerateMonthlySales()
            => new[]
            {
                _rng.Next(10_000, 25_000),
                _rng.Next(10_000, 25_000),
                _rng.Next(10_000, 25_000),
                _rng.Next(10_000, 25_000),
                _rng.Next(10_000, 25_000),
                _rng.Next(10_000, 25_000)
            };

        private static double CalculateUptime()
        {
            // simulate 98-99.9 % uptime since startup
            var elapsed = (DateTime.UtcNow - _startup).TotalMinutes;
            var downMinutes = _rng.Next(0, (int)(elapsed * 0.02));
            return Math.Round((1 - downMinutes / elapsed) * 100, 1);
        }
    }
}