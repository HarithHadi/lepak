type Category = {
  name: string;
  words: string[];
};

interface StartWordProps {
  onSelect: (words: string[]) => void; 
}

export default function StartWord({ onSelect }: StartWordProps){ 
    const categories: Category[] = [
        { name: "Food", words: ['Nasi Lemak', 'Chicken Tenders', 'Durian', 'Banana', 'Tomyam', 'Fish', 'Roti Canai', 'Budu','Keropok Lekor']},
        { name: "Characters", words: ['Bruno Mars', 'Katy Perry', 'Ariana Grande', 'Dwayne Rock Johnson', 'Brad Pitt', 'Hello Kitty', 'Mickey Mouse'] },
        { name: "Shows", words: ['Friends', 'Upin Ipin', 'Tom & Jerry', 'Pink Panther', 'Simpsons', 'Dora The Explorer'] },
        { name: "Brands", words: ['Coca Cola', 'Red Bull', 'Apple', 'IKEA', 'Disney', 'Mydin', 'KFC'] },    
        { name: "State", words: ['Perlis', 'Kelantan', ' Melaka', 'Selangor', 'Sarawak', 'Johor', 'Perak', 'Pahang', 'Terengganu', 'Sabah', 'Johor', 'N9', 'KL'] },
    ];

    

    return(
        <>
        <h2 className="text-2xl font-black text-white pb-2">Choose a category</h2>
        <div className="grid grid-cols-2 items-center gap-6 p-8 bg-white border-3 border-black shadow-[8px_8px_0_0]  duration-50 ease-in-out">
            
            {categories.map((category) => (
                <button
                    key={category.name}
                    onClick={() => onSelect(category.words)}
                    // Changed px-10 to px-2 and added w-full to ensure they fill the grid evenly
                    className="w-full bg-[#7CFC00] text-black border-3 border-black px-2 py-4 font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-50 flex items-center justify-center"
                >
                    <span className="text-xs sm:text-base md:text-lg break-all font-bold">
                        {category.name}
                    </span>
                </button>
            ))}
        </div>
        </>
    )




}