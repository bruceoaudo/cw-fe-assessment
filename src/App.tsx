import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { TagListProps } from "./types";

function TagList({ title, tags }: TagListProps) {
  return (
    <div className="mt-8 px-6 max-w-5xl mx-auto">
      <div className="text-white text-lg font-semibold mb-4">{title}</div>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <Badge
            key={index}
            className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function BoxArea97() {
  const onSearch = (search: string) => {
    console.log(search);
    // implementing the search logic is not required for this task
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8">
      <img src="/task1/hero-bg.png" className="w-full h-96 object-cover" />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Search for words, phrases and meanings
        </h1>
        <BoxArea108 initialValue="" onSearch={onSearch} />
      </div>
    </div>
  );
}

function BoxArea108({
  initialValue,
  onSearch,
}: {
  initialValue: string;
  onSearch: (search: string) => void;
}) {
  const [innerValue, setInnerValue] = useState(initialValue);

  useEffect(() => {
    onSearch(innerValue);
  }, [innerValue, onSearch]);

  useEffect(() => {
    setInnerValue(initialValue);
  }, [initialValue]);

  return (
    <div className="flex items-center bg-black px-2 py-2 rounded-md w-full max-w-xl mt-6 shadow-lg pl-4">
      <Search className="text-gray-400 mr-3" />
      <Input
        value={innerValue}
        onChange={(e) => setInnerValue(e.target.value)}
        type="text"
        placeholder="Type to search..."
        className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 !ring-0 !focus:ring-0 !focus-visible:ring-0 !border-0 !focus:border-0 !focus-visible:border-0 shadow-none"
      />
      <Button className="bg-blue-600 hover:bg-blue-700 text-white ml-4">
        Search
      </Button>
    </div>
  );
}

function Header() {
  const [searchClicked, setSearchClicked] = useState(false);

  return (
    <header className="flex items-center justify-between sm:px-6 px-2 py-4 bg-black border-b border-gray-800">
      <div className={searchClicked ? "hidden" : "flex items-center gap-2"}>
        <img
          src="/task1/logo.png"
          alt="Logo"
          className="sm:w-5 sm:h-5 w-7 h-7"
        />
        <div className="text-white font-bold text-xl">Wortionary</div>
      </div>

      <div className="flex items-center sm:gap-4 gap-3">
        <div className="flex items-center sm:bg-gray-800 bg-transparent rounded-md px-3 w-2/3">
          <Search className="text-gray-400 text-sm hidden sm:block" />
          <Search
            onClick={() => setSearchClicked((prev) => !prev)}
            className="text-gray-400 text-sm block sm:hidden"
          />
          <Input
            type="text"
            placeholder="search"
            className={
              searchClicked
                ? "text-white !ring-0 !focus:ring-0 !focus-visible:ring-0 !border-0 !focus:border-0 !focus-visible:border-0 shadow-none"
                : "text-white !ring-0 !focus:ring-0 !focus-visible:ring-0 !border-0 !focus:border-0 !focus-visible:border-0 shadow-none hidden"
            }
          />
          <Input
            type="text"
            placeholder="search"
            className="text-white !ring-0 !focus:ring-0 !focus-visible:ring-0 !border-0 !focus:border-0 !focus-visible:border-0 shadow-none hidden sm:block"
          />
        </div>
        <Avatar className="w-[32px] h-[32px]">
          <AvatarImage src="/avatar.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

export default function App() {
  const [tags, setTags] = useState([
    "NFT",
    "Metaverse",
    "Sustainable",
    "Sonder",
    "FOMO",
    "Ghosting",
  ]);

  return (
    <main className="bg-black min-h-screen text-white">
      <Header />
      <BoxArea97 />
      <TagList title="Trending" tags={tags} />
      <TagList title="For you" tags={tags} />
    </main>
  );
}
