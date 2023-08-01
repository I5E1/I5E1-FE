export default function Login () {
  return (
    <div className='flex border h-screen'>
      <div className='w-[80rem] p-8'>
        <div className='mb-20'>
          <img src='/logo.png' alt='logo' />
        </div>
        <div className='w-[34rem] mx-auto font-Noto tracking-tighter font-medium text-3xl'>
          <div className='mb-11'>
            <p className='mb-3'>안녕하세요</p>
            <p>
              <span className='font-Spoqa font-bold tracking-normal text-6xl text-[#0474e4]'>RE:POST</span>입니다
            </p>
          </div>
          <form className='mb-20'>
            <div className='mb-7'>
              <p className='text-lg mb-2.5'>이메일</p>
              <input 
                className='text-base font-normal border w-full px-5 py-2.5 rounded-md focus:outline-none focus:border-[#0474e4]' 
                type='email' 
                placeholder='이메일을 입력해주세요.'  
              />
            </div>
            <div className='mb-10'>
              <p className='text-lg mb-2.5'>비밀번호</p>
              <input 
                className='text-base font-normal border w-full px-5 py-2.5 rounded-md focus:outline-none focus:border-[#0474e4]' 
                type='password' 
                placeholder='비밀번호를 입력해주세요.' 
              />
            </div>
            <div className='flex items-center gap-3 mb-'>
              <input 
                className='w-7 h-7 rounded-md '
                type='checkbox' 
              />
              <span className='font-normal text-sm'>이메일 저장</span>
            </div>
          </form>
          <div className="text-center">
            <button 
              className='w-60 h-16 py-2.5 bg-[#d9d9d9] rounded-[30px] font-normal text-base text-white hover:bg-[#0474e4] transition duration-300' 
              type='submit'
            >
              로그인
            </button>
          </div>
        </div>
      </div>
      <div className='w-[40rem] rounded-l-[30px] p-8 bg-[#0474E4]'>
        <div>
          <img src='/worker.png' alt='worker' />
        </div>
      </div>
    </div>
  )
}