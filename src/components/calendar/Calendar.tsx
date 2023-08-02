import React, { useState } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import Day from './Day'
import { CalendarDate } from '@/types/data'
dayjs.locale('ko')

const Calendar = () => {
  const now = dayjs() // 현재 시간 데이터
  const [calendarData, setCalendarData] = useState(now)

  const endDay = calendarData.endOf('month') // 이번달 마지막 날 데이터

  // 지난 달의 마지막 날 데이터
  const lastMonthEnd = calendarData.subtract(1, 'month').endOf('month')

  const lastMonthEndDate = lastMonthEnd.get('date') // 지난 달 마지막 날짜
  const lastMonthEndDay = lastMonthEnd.get('day') // 지난 달 마지막 요일

  // 다음 달의 첫 날 데이터
  const nextMonthStart = calendarData.add(1, 'month').startOf('month')

  const weeks = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']

  const week = weeks.map((day, index) => {
    return (
      <div className="text-center" key={index}>
        {day}
      </div>
    )
  })

  const days: CalendarDate[] = []
  for (let i = lastMonthEndDate - lastMonthEndDay; i <= lastMonthEndDate; i++) {
    days.push({
      year: lastMonthEnd.get('year'),
      month: lastMonthEnd.get('month') + 1,
      date: i,
      day: dayjs(lastMonthEnd.format('YYYY-MM') + `${i}`).format('ddd')
    })
  }

  const endDate = endDay.get('date') //이번 달의 마지막 날
  for (let i = 1; i <= endDate; i++) {
    days.push({
      year: calendarData.get('year'),
      month: calendarData.get('month') + 1,
      date: i,
      day: dayjs(calendarData.format('YYYY-MM') + `${i}`).format('ddd')
    })
  }

  // 42(6주의 일 수)
  for (let i = 1; days.length < 42; i++) {
    days.push({
      year: nextMonthStart.get('year'),
      month: nextMonthStart.get('month') + 1,
      date: i,
      day: dayjs(nextMonthStart.format('YYYY-MM') + `${i}`).format('ddd')
    })
  }

  const body = days.map((day, index) => {
    return (
      <div className="h-[100px] " key={index}>
        {/* border-t border-l */}
        <div className="border-b w-3/4 mx-auto pb-[10px] pl-[10px] mx-[10px]">
          <Day day={day} calendarMonth={calendarData.get('month') + 1} />
        </div>
      </div>
    )
  })

  return (
    <div>
      Calendar
      <div className="flex">
        <input
          className="text-[2rem] font-bold mb-[1rem]"
          type="month"
          defaultValue={calendarData.format('YYYY-MM')}
          onChange={(e) => setCalendarData(dayjs(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-7 gap-0 mb-[20px]">{week}</div>
      <div className="grid grid-cols-7 gap-0 ">{body}</div>
      {/* border-b border-r */}
    </div>
  )
}

export default Calendar
