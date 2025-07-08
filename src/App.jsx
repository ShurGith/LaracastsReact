import Form from './components/Form'
import Header from './components/Header'
import Main from './components/Main'
import PuppiesList from './components/PuppiesList'
import Search from './components/Search'
import ShortList from './components/ShortList'

function App() {
  return (
    <>
      <main className="min-h-dvh bg-gradient-to-b from-cyan-200 to-white to-[60vh]">
        <div className="mx-auto max-w-5xl p-4 md:p-8">
          <Header />
         <div className="mt-24 grid gap-8 sm:grid-cols-2">
          <Search />
          <ShortList />
          </div>
          <PuppiesList />
          <Form />
        </div>
      </main>

    </>
  )
}

export default App
