import Head from 'next/head'
import DashboardNavbar from '../../components/dashboard/DashboardNavbar'

export default function Overview() {
  return (
    <div className="min-h-full">
      <Head>
        <title>Dashboard - DabCash</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <DashboardNavbar />
    </div>
  )
}