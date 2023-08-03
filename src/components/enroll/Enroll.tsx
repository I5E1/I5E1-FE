import dayjs from 'dayjs'
import React from 'react'

const Enroll = () => {
  return (
    <div className="flex justify-end items-center">
      <div>
        <span className="font-bold">신청일</span>
        <input
          className="border border-inputBorder rounded-[5px] w-[130px] m-[10px]"
          type="date"
          defaultValue={dayjs().format('YYYY-MM-DD')}
        />
      </div>
      <div>
        <span className="font-bold">종료일</span>
        <input
          className="border border-inputBorder rounded-[5px] w-[130px] m-[10px]"
          type="date"
          defaultValue={dayjs().format('YYYY-MM-DD')}
        />
      </div>
      <button className="bg-primary rounded-[30px] w-[120px] h-[46px] text-[white]">
        신청하기
      </button>
    </div>
  )
}

export default Enroll
