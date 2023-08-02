import Calendar from '@/components/calendar/Calendar'

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <img src="/logo_cut_ver.png" alt="logo" />
        <button className="bg-[var(--secondary)]">My Page</button>
      </div>
      <Calendar />
    </div>
  )
}
