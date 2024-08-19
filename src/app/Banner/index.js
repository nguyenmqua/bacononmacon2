import Modal from "../Modals/index"
const items = [
    {
      title: 'Wifi Info',
      imageUrl:"data:image/png;base64,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"
      ,info: 'Name: Wifi',
      secondaryInfo: '1905smaconway'    
    },
    {
        title: 'HotTub Help',
        imageUrl:"data:image/png;base64,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",
        info: 'If you want to bring the temperature of the hot tub, leave the cover on and turn up the temperature on the hot tub. The preheat of the hot tub is 92 degrees. Also when using the hot tub, please crack a window so the room won’t condensate. After you are done, please put back on the cover or the room will become wet from the moisture. Please also turn down the temperature of the hot tub to 93. Thanks',  
      },
      {
        title: 'Keypad Instructions',
        imageUrl:"https://cdn-icons-png.flaticon.com/512/61/61026.png",
        src: "https://www.youtube.com/embed/NI3tYlv7E9A"
      },
]
  
const Banner =()=> {
    return (
      <div className="bg-white p-5">
        <div className="mx-auto grid gap-x-20 gap-y-10 px-6 lg:px-8 xl:grid-cols-3">
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          <li>
            <a href="https://turo.com/us/en/suv-rental/united-states/aurora-co/jeep/patriot/1747729?endDate=08%2F20%2F2024&endTime=10%3A00&startDate=08%2F17%2F2024&startTime=10%3A00">
            <div className="flex items-center gap-x-6">
                  <img alt="Airbnb" src="https://cdn-icons-png.flaticon.com/512/4965/4965302.png" className="h-16 w-16 rounded-full" />
                  <button
                type="button"
               
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
               Turo Car Rental
              </button>
                </div>
            </a>
            </li>
            {items.map((item) => (
              <li key={item.title}>
                <div className="flex items-center gap-x-6">
                  <img alt="" src={item.imageUrl} className="h-16 w-16 rounded-full" />
                  <div>
                    <Modal label= {item.title} image ={item.imageUrl} info ={item.info} secondaryInfo ={item.secondaryInfo}/>
                  </div>
                </div>
              </li>
            ))}
            <li>
            <a href="https://www.airbnb.com/s/guidebooks?refinement_paths[]=/guidebooks/3121054&s=67&unique_share_id=392552aa-e173-4cf8-8d8e-891fd2b0b8a3" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            <div className="flex items-center gap-x-6">
                  <img alt="Airbnb" src="https://cdn-icons-png.flaticon.com/512/5194/5194459.png" className="h-16 w-16 rounded-full" />
                  <button
                type="button"
               
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
               Guidebook
              </button>
                </div>
            </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
  

  export default Banner