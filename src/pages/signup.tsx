export default function SignUp () {
  return (
    <div className='flex h-screen font-Noto'>
      <div className='w-[80rem] p-8'>
        <div className='mb-20'>
          <img src='/logo.png' alt='logo' />
        </div>
        <div className='w-[70rem] mx-auto tracking-tighter font-medium text-3xl rounded-xl shadow-xl p-5'>
          <div className='mb-11 text-center'>
            <p className='mb-3'>환영합니다!</p>
            <p className='font-normal text-2xl'>
              <span className='font-Spoqa font-bold tracking-normal text-3xl text-primary mr-1.5'>RE:POST</span>
              사원 계정을 생성해주세요.
            </p>
          </div>
          <form className='mb-20 flex gap-11 justify-center px-16'>
            <div>
              <div className='mb-7'>
                <p className='text-lg mb-2.5'>사원명</p>
                <input 
                  className='text-base font-normal border w-96 px-5 py-2.5 rounded-md focus:outline-none focus:border-[#0474e4]' 
                  type='text' 
                  placeholder='사원명을 입력해주세요.'  
                />
              </div>
              <div className='mb-10'>
                <p className='text-lg mb-2.5'>이메일</p>
                <div className='flex'>
                  <input 
                    className='text-base font-normal border w-96 px-5 py-2.5 mr-2.5 rounded-md focus:outline-none focus:border-[#0474e4]' 
                    type='email' 
                    placeholder='이메일을 입력해주세요.' 
                  />
                  <button type='submit' className='py-2.5 w-16 bg-secondary text-[white] rounded-md text-xs'>중복체크</button>
                </div>
              </div>
              <div>
                <p className='text-lg mb-2.5'>연락처</p>
                <input 
                  className='text-base font-normal border w-96 px-5 py-2.5 rounded-md focus:outline-none focus:border-[#0474e4]' 
                  type='tel' 
                  name='phone'
                  pattern='(010)-\d{3,4}-\d{4}'
                  title='010-0000-0000'
                  placeholder='010-****-****' 
                />
              </div>
            </div>
            <div>
              <div className='mb-7'>
                <p className='text-lg mb-2.5'>비밀번호</p>
                <input 
                  className='text-base font-normal border w-96 px-5 py-2.5 rounded-md focus:outline-none focus:border-[#0474e4]' 
                  type='password' 
                  placeholder='비밀번호를 입력해주세요.'  
                />
              </div>
              <div className='mb-10'>
                <p className='text-lg mb-2.5'>비밀번호 확인</p>
                <input 
                  className='text-base font-normal border w-96 px-5 py-2.5 rounded-md focus:outline-none focus:border-[#0474e4]' 
                  type='password' 
                  placeholder='비밀번호를 입력해주세요.' 
                />
              </div>
            </div>
          </form>
          <div className="text-center">
            <button 
              className='w-60 h-16 py-2.5 bg-[#d9d9d9] rounded-[30px] font-normal text-base text-[white] hover:bg-[#0474e4] transition duration-300' 
              type='submit'
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
      <div className='w-[40rem] rounded-l-[30px] p-8 bg-[#0474E4] text-white tracking-tighter flex flex-col justify-end'>
        <div>
          <img src='/worker.png' alt='worker' />
        </div>
      </div>
    </div>
  )
}