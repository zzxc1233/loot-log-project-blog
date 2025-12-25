import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-brown-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <header className="mb-8">
          <button className="px-4 py-2 bg-brown-200 text-brown-600 rounded-lg font-medium">
            Base style
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Colors Section */}
          <section>
            <h2 className="text-brown-400 text-lg font-medium mb-6">Colors</h2>

            {/* Base Colors */}
            <div className="mb-8">
              <h3 className="text-brown-600 font-semibold mb-4">Base</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-lg bg-brown-600 mb-2"></div>
                  <span className="text-xs text-brown-600">Brown 600</span>
                  <span className="text-xs text-brown-400">#26231E</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-lg bg-brown-500 mb-2"></div>
                  <span className="text-xs text-brown-600">Brown 500</span>
                  <span className="text-xs text-brown-400">#434038</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-lg bg-brown-400 mb-2"></div>
                  <span className="text-xs text-brown-600">Brown 400</span>
                  <span className="text-xs text-brown-400">#757168</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-lg bg-brown-300 mb-2"></div>
                  <span className="text-xs text-brown-600">Brown 300</span>
                  <span className="text-xs text-brown-400">#DAD6D1</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-lg bg-brown-200 mb-2"></div>
                  <span className="text-xs text-brown-600">Brown 200</span>
                  <span className="text-xs text-brown-400">#EFEEEB</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-lg bg-brown-100 mb-2"></div>
                  <span className="text-xs text-brown-600">Brown 100</span>
                  <span className="text-xs text-brown-400">#F9F8F6</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-lg bg-white border border-brown-300 mb-2"></div>
                  <span className="text-xs text-brown-600">White</span>
                  <span className="text-xs text-brown-400">#FFFFFF</span>
                </div>
              </div>
            </div>

            {/* Brand Colors */}
            <div>
              <h3 className="text-brown-600 font-semibold mb-4">Brand</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-lg bg-orange mb-2"></div>
                  <span className="text-xs text-brown-600">Orange</span>
                  <span className="text-xs text-brown-400">#F2B88C</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-lg bg-green mb-2"></div>
                  <span className="text-xs text-brown-600">Green</span>
                  <span className="text-xs text-brown-400">#128279</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-lg bg-green-light mb-2"></div>
                  <span className="text-xs text-brown-600">Green</span>
                  <span className="text-xs text-brown-400">#D7F2E9</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-lg bg-red mb-2"></div>
                  <span className="text-xs text-brown-600">Red</span>
                  <span className="text-xs text-brown-400">#EB5164</span>
                </div>
              </div>
            </div>
          </section>

          {/* Fonts Section */}
          <section>
            <div>
                <p className="text-brown-400 text-sm mb-2">Font</p>
                <p className="text-font text-gray-400">
                  Font
                </p>
              </div>


            <div className="space-y-6">
              <div>
                <p className="text-brown-400 text-sm mb-2">Headline</p>
                <h1 className="text-headline text-brown-600">
                  Headline
                </h1>
              </div>

              <div>
                <p className="text-brown-400 text-sm mb-2">Headline 2</p>
                <h2 className="text-headline-2 text-brown-600">
                  Headline 2
                </h2>
              </div>

              <div>
                <p className="text-brown-400 text-sm mb-2">Headline 3</p>
                <h3 className="text-headline-3 text-brown-600">
                  Headline 3
                </h3>
              </div>

              <div>
                <p className="text-brown-400 text-sm mb-2">Headline 4</p>
                <h4 className="text-headline-4 text-brown-600">
                  Headline 4
                </h4>
              </div>

              <div>
                <p className="text-brown-400 text-sm mb-2">Body</p>
                <p className="text-body text-brown-600">
                  Body
                </p>
              </div>

              <div>
                <p className="text-brown-400 text-sm mb-2">Body 2</p>
                <p className="text-body-2 text-brown-600">
                  Body 2
                </p>
              </div>

              <div>
                <p className="text-brown-400 text-sm mb-2">Body 3</p>
                <p className="text-body-3 text-brown-600">
                  Body 3
                </p>
              </div>

            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
