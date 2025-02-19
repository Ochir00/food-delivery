const array = [
  "All Dishes",
  "Appetizers",
  "Salads",
  "Pizzas",
  "Lunch favorites",
  "Main dishes",
  "Fish & Sea foods",
  "Brunch",
  "Side dish",
  "Desserts",
  "Beverages",
];
export function ToggleGroupDemo() {
  return (
    <div className="w-full p-5 bg-white m-5 rounded-lg">
      <h2>Dishes category</h2>
      <div>
        <div className=" flex gap-3 flex-wrap">
          {array.map((torlo, index) => {
            return (
              <div
                key={index}
                className="flex items-center h-[36px] text-black px-2 rounded-full border-[#EF4444] border-[1px]"
              >
                <p>{torlo}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
