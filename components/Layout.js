import Nav from "@/components/Nav.js"

export default function Layout({ children }) {
  
  async function uploadImages(e){
    const files = e.target?.files;
    if(files?.length > 0){
        const data = new FormData();
        for(const file of files){
            data.append('file', file)
        }
        await fetch('/api/upload', {
            method: 'POST',
            body: data,
        })
    }
}

  return (
    <div className="bg-blue-900 min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
      <label className="w-24 h-24 text-center cursor-pointer flex items-center justify-center text-sm gap-1 text-gray-500 rounded-lg bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            <div>
              Upload
            </div>
          <input type="file" onChange={(e)=>{uploadImages(e)}} className="hidden"></input>
      </label>
      </div>
    </div>
)
}