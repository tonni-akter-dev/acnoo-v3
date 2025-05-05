import DashboadLayout from "./components/DashboardLayout"
import '../css/dashboard.css';

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <DashboadLayout>{children}</DashboadLayout>
  }