import MyHistory from '@/components/myHistory/MyHistory'

export default function MyPage() {
  return (
    <>
      <div className="container mx-auto">
        <img className="pt-[30px]" src="/logo_cut_ver.png" alt="logo" />
        <div className="relative z-10 mt-[70px]">
          <div className="flex flex-wrap gap-[100px] items-end">
            <div className="relative w-full lg:w-[480px] shadow-[3px_3px_10px_0px_rgba(0,0,0,0.15)] rounded-t-[55px] rounded-b-[20px] bg-[white]">
              <div className="bg-primary w-full h-[200px] absolute z-10 rounded-t-[50px] rounded-bl-[100px]"></div>
              <div className="bg-sub-primary w-[95%] h-[200px] absolute z-5 top-[20px] right-0 rounded-t-[50px] rounded-bl-[100px]"></div>
              <div className="relative z-20 p-[20px]">
                <img
                  className="rounded-[100px] w-[182px] h-[182px] mt-[100px] mx-auto"
                  src="/logo_cut_ver.png"
                  alt="test"
                />
                <div className="flex flex-col items-end my-[40px]">
                  <div className="my-info">
                    <span className="my-info-title">직급</span>
                    <span className="input-span">|</span>
                    <span className="my-data"> 임시직급</span>
                  </div>
                  <div className="my-info">
                    <span className="my-info-title">이름</span>
                    <span className="input-span">|</span>
                    <span className="my-data">
                      <input
                        className="my-input"
                        type="text"
                        placeholder="홍길동"
                      />
                    </span>
                  </div>
                  <div className="my-info">
                    <span className="my-info-title">이메일</span>
                    <span className="input-span">|</span>
                    <span className="my-data">
                      <input
                        className="my-input"
                        type="text"
                        placeholder="fastcampus@gmail.com"
                      />
                    </span>
                  </div>
                  <div className="my-info">
                    <span className="my-info-title">연락처</span>
                    <span className="input-span">|</span>
                    <span className="my-data">
                      <input
                        className="my-input"
                        type="text"
                        placeholder="010-0000-0000"
                      />
                    </span>
                  </div>
                  <div className="my-info">
                    <span className="my-info-title">비밀번호</span>
                    <span className="input-span">|</span>
                    <span className="my-data">
                      <input
                        className="my-input"
                        type="password"
                        placeholder="********"
                      />
                    </span>
                  </div>
                  <div className="my-info">
                    <span className="my-info-title">잔여일수</span>
                    <span className="input-span">|</span>
                    <span className="my-data"> 임시일수</span>
                  </div>
                </div>
                <button className="bg-primary text-[white] w-[140px] h-[50px] rounded-[6px] block ml-auto">
                  정보 수정
                </button>
              </div>
            </div>
            <div className="w-full lg:max-w-[700px] ">
              <div className="history-container mb-[40px]">
                <div className="history-title">연차 내역</div>
                <div className="h-full overflow-auto">
                  <MyHistory />
                </div>
              </div>
              <div className="history-container">
                <div className="history-title">당직 내역</div>
                <div className="h-full overflow-auto">
                  <MyHistory />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary w-1/3 rounded-l-[30px] h-screen fixed inset-y-0 right-0 hidden md:block">
          <img
            className="absolute bottom-[30px] w-full"
            src="/worker.png"
            alt="worker"
          />
        </div>
      </div>
    </>
  )
}
