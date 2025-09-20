/* frontend/src/App.jsx */
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'
import './App.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
)

/* ---------- CONFIG ---------- */
const API_URL = 'http://localhost:5086/api/dashboard'   // ← same port you used before

/* ---------- REACT ---------- */
function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setLoading(true)
    try {
      const { data: res } = await axios.get(API_URL, { timeout: 5000 })
      setData(res)
      setError(null)
    } catch (err) {
      console.error('[Dashboard] ', err.message)   // ← real reason in console
      setError('Could not load dashboard')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) return <div className="loading">Loading…</div>
  if (error)   return <div className="error">{error}</div>
  if (!data)   return <div className="error">No data</div>

  /* ---------- CHARTS ---------- */
  const salesChart = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: data.monthly,
        backgroundColor: 'rgba(59, 130, 246, 0.85)',
        borderColor: '#2563eb',
        borderWidth: 1,
      },
    ],
  }

  const trendChart = {
    labels: ['Sales', 'Orders', 'Avg Order'],
    datasets: [
      {
        label: 'Trend %',
        data: [data.trends.salesTrend, data.trends.ordersTrend, data.trends.avgOrderTrend],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.15)',
        tension: 0.3,
        pointRadius: 5,
      },
    ],
  }

  const chartOptions = { responsive: true, maintainAspectRatio: false }

  /* ---------- UI ---------- */
  return (
    <div className="app">
      <header className="header">
        <h1>Sales Dashboard</h1>
        <button className="refresh-btn" onClick={fetchData}>Refresh</button>
      </header>

      <section className="cards">
        <Card title="Total Sales" value={`$${data.totalSales.toLocaleString()}`} />
        <Card title="Orders" value={data.totalOrders.toLocaleString()} />
        <Card title="Avg Order" value={`$${data.avgOrderValue}`} />
        <Card title="Customers" value={data.totalCustomers.toLocaleString()} />
        <Card title="Satisfaction" value={`${data.customerSatisfaction}%`} trend={data.trends.salesTrend} />
        <Card title="Locations" value={data.activeLocations} />
      </section>

      <section className="charts">
  <div className="chart-box">
    <h3>Monthly Sales (6 mo)</h3>
    <div className="chart-wrapper">
      <Bar data={salesChart} options={chartOptions} />
    </div>
  </div>

  <div className="chart-box">
    <h3>Trend Overview</h3>
    <div className="chart-wrapper">
      <Line data={trendChart} options={chartOptions} />
    </div>
  </div>
</section>

      <footer className="status-bar">
        <span>System {data.systemStatus}</span>
        <span>Uptime {data.uptime}%</span>
        <span>Updated {new Date(data.lastUpdated).toLocaleTimeString()}</span>
      </footer>
    </div>
  )
}

/* ---------- small card ---------- */
const Card = ({ title, value, trend }) => (
  <div className="card">
    <h4>{title}</h4>
    <p className="value">{value}</p>
    {trend != null && (
      <span className={`trend ${trend >= 0 ? 'up' : 'down'}`}>
        {trend >= 0 ? '▲' : '▼'} {Math.abs(trend)}%
      </span>
    )}
  </div>
)

export default App