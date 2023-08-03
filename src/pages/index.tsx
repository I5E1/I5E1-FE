import Calendar from '@/components/calendar/Calendar'
import Enroll from '@/components/enroll/Enroll'

export default function Home() {
  return (
    <div className="container mx-auto">
      <img className="mx-auto" src="/logo_cut_ver.png" alt="logo" />
      <div className="flex justify-between">
        <div>
          <button className="hover:bg-primary hover:text-white w-[140px] h-[46px] bg-gray rounded-t-[6px]">
            연차
          </button>
          <button className="hover:bg-primary hover:text-white w-[140px] h-[46px] bg-gray rounded-t-[6px]">
            당직
          </button>
        </div>
        <button className="text-white w-[140px] h-[46px] bg-secondary rounded-[6px]">
          My Page
        </button>
      </div>
      <div className="border-0 rounded-[12px] shadow-[3px_3px_5px_-2px_rgba(0,0,0,0.1)] p-[40px]">
        <Calendar />
        <Enroll />
      </div>
    </div>
  )
}
