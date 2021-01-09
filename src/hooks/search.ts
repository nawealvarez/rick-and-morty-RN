import { useState } from "react";


export const useSearch = () => {
    const [searchField, setSearchField] = useState<string>('');
    const [query, setQuery] = useState<string>('');

    const handleChange = (text: string) => {
        setSearchField(text);
        if (text.length > 2 || text === '') {
          setQuery(text);
        }
      };

    return { searchField, setSearchField, query, setQuery, handleChange };

}