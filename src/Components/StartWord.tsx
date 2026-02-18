type Category = {
  name: string;
  words: string[];
};

interface StartWordProps {
  onSelect: (words: string[]) => void; // This function takes an array and returns nothing
}

export default function StartWord({ onSelect }: StartWordProps){ 
const categories: Category[] = [
    { name: "Food", words: ['Nasi Lemak', 'Chicken Tenders', 'Durian'] },
    { name: "Characters", words: ['Bruno Mars', 'Katy Perry', 'Ariana Grande', 'Dwayne Rock Johnson', 'Brad Pitt', 'Hello Kitty', 'Mickey Mouse'] },
    { name: "Shows", words: ['Friends', 'Upin Ipin', 'Tom & Jerry', 'Pink Panther', 'Simpsons', 'Dora The Explorer'] },
    { name: "Brands", words: ['Coca Cola', 'Red Bull', 'Apple', 'IKEA', 'Disney', 'Mydin', 'KFC'] },
];



    return(
        <>
        <h2 className="text-2xl font-black text-white pb-2">Choose a category</h2>
        <div className="grid grid-cols-2 items-center gap-6 p-8 bg-white border-3 shadow-xl border-black hover:shadow-[8px_8px_0_0] hover:scale-101 duration-50 ease-in-out">
            
            {categories.map((category) => (
                <button
                    key={category.name}
                    onClick={() => onSelect(category.words)}
                    className="h-32 
                            text-2xl 
                            font-bold 
                            rounded-xl 
                            border-3     
                            shadow-md 
                            hover:scale-105 
                            transition
                            flex 
                            items-center 
                            justify-center"
                            >
                    {category.name}
                </button>
            ))}
        </div>
        </>
    )




}