import Navbar from './components/navbar'
import Aboutme from './components/aboutme'
  
export default function Home() {
  return (
    <>
    <div>
        <Navbar/>
    </div>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Aboutme/>  
    </main>
    </>
  )
}
